<?php

namespace App\Http\Controllers\Api;

use App\Events\ChatMessageEvent;
use App\Http\Controllers\Controller;
use App\Http\Resources\ConversationFolderResource;
use App\Http\Resources\ConversationResource;
use App\Http\Resources\MessageResource;
use App\Models\Conversation;
use App\Models\ConversationFolder;
use App\Models\Message;
use App\Models\Reporting;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class ChatController extends Controller
{
    public function createConversation(Request $request)
    {

        $conversationExistante = Conversation::whereHas('users', function ($query) use ($request) {
            $query->where('user_id', $request->users[0])->orWhere('user_id', $request->users[1]);
        }, '=', 2)->get();

        if (count($conversationExistante) > 0) {
            $conversationExistante[0]->deleted_users = NULL;
            $conversationExistante[0]->save();
            return response()->noContent();
        } else {
            $conversation = Conversation::create([]);
            $conversation->users()->sync($request->users);
            return new ConversationResource($conversation);
        }
    }

    public function createMessage(Request $request)
    {
        $conversation = Conversation::find($request->conversation_id);
        $conversation->deleted_users = NULL;
        $conversation->save();
        $data = [
            'attachement_path' => '',
            'message' => $request->message,
            'type' => $request->type,
            'attachement_size' => $request->attachement_size,
            'attachement_name' => $request->attachement_name,
            'user_id' => $request->user_id,
            'message' => $request->message ? $request->message : ' ',
            'conversation_id' => $request->conversation_id,
        ];
        if ($request->file('attachement')) {
            if ($request->type == 'image') {
                $request->validate([
                    'attachement' => 'required|mimes:png,jpg,jpeg,gif,webp'
                ]);
            }
            $filename = '/uploads/chat/conversation_' . $request->conversation_id . '/' . time() . '.' . $request->file('attachement')->extension();
            $request->file('attachement')->storePubliclyAs('public', $filename);
            $data['attachement_path'] = $filename;
        }
        $message = Message::create($data);
        Message::where([
            ['conversation_id', $request->conversation_id],
            ['user_id', '!=', $request->user_id],
            ['is_read', 0]
        ])->update(['is_read' => 1]);
        broadcast(new ChatMessageEvent($request->received_id))->toOthers();
        return new MessageResource($message);
    }

    public function editMessage(Request $request, Message $message)
    {
        $message->is_edit = 1;
        $message->message = $request->text;
        $message->save();
        broadcast(new ChatMessageEvent($request->received_id))->toOthers();
        return response()->noContent();
    }

    public function createConversationFolder(Request $request)
    {
        ConversationFolder::create([
            'name' => $request->name,
            'user_id' => $request->user_id
        ]);
        $user = User::find($request->user_id);
        return ConversationFolderResource::collection($user->conversationFolders()->orderByDesc('created_at')->get());
    }

    public function deleteConversationFolder(Request $request, ConversationFolder $folder)
    {
        $folder->delete();
        return response()->noContent();
    }

    public function deleteConversationToFolder(Request $request, ConversationFolder $folder)
    {
        $folder->conversations()->detach([$request->conversation_id]);
        return response()->noContent();
    }

    public function getConversationByUser(Request $request, User $user)
    {
        return ConversationResource::collection($user->conversations()->whereNull('deleted_users')->orWhereNotIn('deleted_users', [$user->id])->get());
    }

    public function getConversationFolderByUser(Request $request, User $user)
    {
        return ConversationFolderResource::collection($user->conversationFolders()->get());
    }

    public function addConversationToFolder(Request $request)
    {
        $folder = ConversationFolder::find($request->conversation_folder_id);
        $folder->conversations()->attach([$request->conversation_id]);
        return response()->noContent();
    }

    public function deleteConversation(Request $request, Conversation $conversation)
    {
        $deletedUsers = explode(',', $conversation->deleted_users);
        if (!in_array("$request->user_id", $deletedUsers)) {
            array_push($deletedUsers, $request->user_id);
        }
        $index = array_search("", $deletedUsers);
        if ($index !== false) {
            unset($deletedUsers[$index]);
        }
        $deletedUsers = implode(",", $deletedUsers);
        $conversation->deleted_users = $deletedUsers;
        $conversation->save();
        $messages = $conversation->messages;
        for ($i = 0; $i < count($messages); $i++) {
            $message = $messages[$i];
            $dusers = explode(',', $message->deleted_users);
            if (!in_array("$request->user_id", $dusers)) {
                array_push($dusers, $request->user_id);
            }
            $uindex = array_search("", $dusers);
            if ($uindex !== false) {
                unset($dusers[$uindex]);
            }
            $dusers = implode(",", $dusers);
            $message->deleted_users = $dusers;
            $message->save();
        }

        return response()->noContent();
    }

    public function isRead(Request $request)
    {
        Message::where([
            ['conversation_id', $request->conversation_id],
            ['user_id', '!=', $request->user_id],
            ['is_read', 0]
        ])->update(['is_read' => 1]);
        $user = User::find($request->user_id);
        broadcast(new ChatMessageEvent($request->received_id))->toOthers();
        broadcast(new ChatMessageEvent(Auth::user()->id))->toOthers();
        return ConversationResource::collection($user->conversations()->orderByDesc('created_at')->get());
    }

    public function deleteMessage(Request $request, Message $message)
    {
        if ($request->for) {
            $message->delete();
        } else {
            $deletedUsers = explode(',', $message->deleted_users);
            array_push($deletedUsers, $request->user_id);
            $index = array_search("", $deletedUsers);
            if ($index !== false) {
                unset($deletedUsers[$index]);
            }
            $deletedUsers = implode(",", $deletedUsers);
            $message->deleted_users = $deletedUsers;
            $message->save();
        }
        broadcast(new ChatMessageEvent($request->received_id))->toOthers();
        return response()->noContent();
    }

    public function reportMessage(Request $request)
    {
        $conversation = Conversation::find($request->conversation_id);
        $message = Message::find($request->message_id);
        Reporting::create([
            'user_id' => Auth::user()->id,
            'type' => 'Chat',
            'content' => $message->message,
            'url' => ' ',
            'reported' => 'Message by : '. $message->user->firstname . ' ' . $message->user->email,
            'reported_id' => $message->user_id,
        ]);
        return response()->noContent();
    }
}

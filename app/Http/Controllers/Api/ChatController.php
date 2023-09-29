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
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ChatController extends Controller
{
    public function createConversation(Request $request)
    {
        $conversation = Conversation::create([]);
        $conversation->users()->sync($request->users);
        return new ConversationResource($conversation);
    }

    public function createMessage(Request $request)
    {
        dd($request->all());
        /*$message = Message::create([
            'message' => $request->message,
            'conversation_id' => $request->conversation_id,
            'user_id' => $request->user_id
        ]);
        Message::where([
            ['conversation_id', $request->conversation_id],
            ['user_id', '!=', $request->user_id],
            ['is_read', 0]
        ])->update(['is_read' => 1]);
        broadcast(new ChatMessageEvent( $message))->toOthers();*/
        //return new MessageResource($message);
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

    public function deleteConversationFolder(Request $request, ConversationFolder $folder){
        $folder->delete();
        return response()->noContent();
    }

    public function deleteConversationToFolder(Request $request, ConversationFolder $folder){
        $folder->conversations()->detach([$request->conversation_id]);
        return response()->noContent();
    }

    public function getConversationByUser(Request $request, User $user)
    {
        return ConversationResource::collection($user->conversations()->orderByDesc('created_at')->get());   
    }

    public function getConversationFolderByUser(Request $request, User $user)
    {
        return ConversationFolderResource::collection($user->conversationFolders()->get());   
    }

    public function addConversationToFolder(Request $request) {
        $folder = ConversationFolder::find($request->conversation_folder_id);
        $folder->conversations()->attach([$request->conversation_id]);
        return response()->noContent();
    }

    public function deleteConversation(Request $request, Conversation $conversation)
    {
       /* if (File::exists(public_path(substr($conversation->image, 1, null)))) {
            File::delete(public_path(substr($conversation->image, 1, null)));
        }
        $conversation->delete();*/
        return response()->noContent();
    }

    public function isRead(Request $request){
        Message::where([
            ['conversation_id', $request->conversation_id],
            ['user_id', '!=', $request->user_id],
            ['is_read', 0]
        ])->update(['is_read' => 1]);
        $user = User::find($request->user_id);
        return ConversationResource::collection($user->conversations()->orderByDesc('created_at')->get()); 
    }
}

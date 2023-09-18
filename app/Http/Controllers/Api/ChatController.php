<?php

namespace App\Http\Controllers\Api;

use App\Events\ChatMessageEvent;
use App\Http\Controllers\Controller;
use App\Http\Resources\ConversationResource;
use App\Http\Resources\MessageResource;
use App\Models\Conversation;
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
        $message = Message::create([
            'message' => $request->message,
            'conversation_id' => $request->conversation_id,
            'user_id' => $request->user_id
        ]);
        Message::where([
            ['conversation_id', $request->conversation_id],
            ['user_id', '!=', $request->user_id],
            ['is_read', 0]
        ])->update(['is_read' => 1]);
        broadcast(new ChatMessageEvent( $message))->toOthers();
        return new MessageResource($message);
    }

    public function getConversationByUser(Request $request, User $user)
    {
        return ConversationResource::collection($user->conversations()->orderByDesc('created_at')->get());   
    }

    public function deleteConversation(Request $request, Conversation $conversation)
    {
        if (File::exists(public_path(substr($conversation->image, 1, null)))) {
            File::delete(public_path(substr($conversation->image, 1, null)));
        }
        $conversation->delete();
        return response()->noContent();
    }

    public function isRead(Request $request){
        Message::where([
            ['conversation_id', $request->conversation_id],
            ['user_id', '!=', $request->user_id],
            ['is_read', 0]
        ])->update(['is_read' => 1]);
        return response()->noContent();
    }
}

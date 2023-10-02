<?php

namespace App\Http\Resources;

use App\Models\Conversation;
use App\Models\Message;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class ConversationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->type,
            'image' => $this->image,
            'description' => $this->description,
            'users' => UserResource2::collection(Conversation::find($this->id)->users),
            'messages' => MessageResource::collection(Conversation::find($this->id)->messages->whereNotIn('deleted_users', [Auth::user()->id])),
            'deleted_users' => $this->deleted_users ? explode(',', $this->deleted_users) : [],
            'nbUnRead' => Conversation::find($this->id)->messages->where('is_read', 0)->where('user_id', '!=', Auth::user()->id)->count()
        ];
    }
}

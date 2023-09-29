<?php

namespace App\Http\Resources;

use App\Models\Conversation;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
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
            'message' => $this->message,
            'is_read' => $this->is_read,
            'conversation_id' => $this->conversation_id,
            'user_id' => $this->user_id,
            'is_send' => true,
            'user' => new UserResource2(User::find($this->user_id)),
            'date' => $this->created_at,
            'type' => $this->type,
            'attachement_path' => $this->attachement_path,
            'attachement_name' => $this->attachement_path,
            'attachement_size' => $this->attachement_size,
            'is_edit' => $this->is_edit,
            'deleted_users' => $this->deleted_users ? explode(',', $this->deleted_users) : [],
        ];
    }
}

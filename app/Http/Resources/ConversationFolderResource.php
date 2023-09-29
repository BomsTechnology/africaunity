<?php

namespace App\Http\Resources;

use App\Models\ConversationFolder;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class ConversationFolderResource extends JsonResource
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
            'user_id' => $this->user_id,
            'user' => new UserResource2(User::find($this->user_id)),
            'conversations' => ConversationResource::collection(ConversationFolder::find($this->id)->conversations),
        ];
    }
}

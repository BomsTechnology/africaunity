<?php

namespace App\Http\Resources;

use App\Models\PersonalPost;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class PersonalPostCommentResource extends JsonResource
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
            'content' => $this->content,
            'status' => $this->status,
            'user' => User::find($this->user_id),
            'user_id' => $this->user_id,
            'personalPost' => new PersonalPostResource(PersonalPost::find($this->personal_post_id)),
            'personal_post_id' => $this->personal_post_id,
            'date' => $this->created_at ? $this->created_at->format('Y-m-d') : "",
        ];
    }
}

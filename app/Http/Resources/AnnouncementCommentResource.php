<?php

namespace App\Http\Resources;

use App\Models\Announcement;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class AnnouncementCommentResource extends JsonResource
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
            'announcement' => new AnnouncementResource(Announcement::find($this->announcement_id)),
            'announcement_id' => $this->announcement_id,
            'date' => $this->created_at->format('Y-m-d'),
        ];
    }
}

<?php

namespace App\Http\Resources;

use App\Models\Demonstration;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class DemonstrationCommentResource extends JsonResource
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
            'demonstration' => new DemonstrationResource(Demonstration::find($this->demonstration_id)),
            'demonstration_id' => $this->demonstration_id,
            'date' => $this->created_at->format('Y-m-d'),
        ];
    }
}

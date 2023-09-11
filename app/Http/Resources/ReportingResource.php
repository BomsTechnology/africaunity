<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class ReportingResource extends JsonResource
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
            "id" => $this->id,
            "content" => $this->content,
            "type" => $this->type,
            "user_id" => $this->user_id,
            "url" => $this->url,
            "reported" => $this->reported,
            'user' => new UserResource2(User::find($this->user_id)),
            "reported_id" => $this->reported_id,
        ];
    }
}

<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class FollowerResource extends JsonResource
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
            'subscriber' => $this->subscriber,
            'subscription' => $this->subscription,
            'subscriber_detail' => new UserResource(User::find($this->subscriber)),
            'subscription_detail' => new UserResource(User::find($this->subscription)),
        ];
    }
}

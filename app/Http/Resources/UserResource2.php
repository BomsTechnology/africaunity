<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource2 extends JsonResource
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
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'status' => $this->status,
            'email' => $this->email,
            'type' => $this->type,
            'avatar' => $this->avatar,
            'cover' => $this->cover,
            'detail' => new DetailResource(User::find($this->id)->detail)
        ];
    }
}

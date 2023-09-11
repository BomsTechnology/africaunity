<?php

namespace App\Http\Resources;

use App\Models\Follower;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

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
            'slug' => $this->lastname && $this->lastname  != 'null'  ? Str::slug("$this->firstname  $this->lastname") : Str::slug("$this->firstname"),
            'status' => $this->status,
            'email' => $this->email,
            'hide_email' => $this->hide_email,
            'hide_phone' => $this->hide_phone,
            'hide_birthday' => $this->hide_birthday,
            'recruitment_agency' => $this->recruitment_agency,
            'type' => $this->type,
            'avatar' => $this->avatar,
            'cover' => $this->cover,
            'detail' => new DetailResource(User::find($this->id)->detail),
            'subscribers' =>  FollowerResource::collection(Follower::where('subscription', $this->id)->orderBy('id', 'desc')->get()),
            'subscriptions' =>  FollowerResource::collection(Follower::where('subscriber', $this->id)->orderBy('id', 'desc')->get()),
        ];
    }
}

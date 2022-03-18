<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ContinentResource;
use App\Models\Continent;
use App\Models\Country;
use App\Models\Ministry;
use App\Models\User;
use App\Models\Zone;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        /* return parent::toArray($request);*/
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'image' => $this->image,
            'status' => $this->status,
            'type' => $this->type,
            'language' => $this->language,
            'user' => User::find($this->user_id),
            'continent' => new ContinentResource(Continent::find($this->continent_id)),
            'zone' => new ZoneResource(Zone::find($this->zone_id)),
            'country' => new MinistryResource(Country::find($this->country_id)),
            'ministry' => new MinistryResource(Ministry::find($this->ministry_id)),
        ];
    }
}

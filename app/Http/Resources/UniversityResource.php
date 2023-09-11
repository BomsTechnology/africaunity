<?php

namespace App\Http\Resources;

use App\Models\City;
use App\Models\Continent;
use App\Models\Country;
use App\Models\Zone;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class UniversityResource extends JsonResource
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
            'name' => $this->name,
            'text' => $this->name,
            'slug' => Str::slug($this->name),
            'description' => $this->description,
            'image' => $this->image,
            'continent' => new ContinentResource(Continent::find($this->continent_id)),
            'city' => new CityResource(City::find($this->city_id)),
            'country' => new CountryResource(Country::find($this->country_id)),
            'zone' => new ZoneResource(Zone::find($this->zone_id)),
            'date' => $this->created_at->format('Y-m-d'),
        ];
    }
}

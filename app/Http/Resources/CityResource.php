<?php

namespace App\Http\Resources;

use App\Models\Country;
use Illuminate\Http\Resources\Json\JsonResource;

class CityResource extends JsonResource
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
            "name_fr" => $this->name_fr,
            "text" => $this->name_fr,
            "name_en" => $this->name_en,
            "name" => $this->name_fr,
            "name_es" => $this->name_es,
            "name_pt" => $this->name_pt,
            "country_id" => $this->country_id,
            "country" => new CountryResource(Country::find($this->country_id)),
        ];
    }
}

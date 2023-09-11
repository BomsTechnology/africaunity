<?php

namespace App\Http\Resources;

use App\Models\Zone;
use Illuminate\Http\Resources\Json\JsonResource;

class CountryResource extends JsonResource
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
            "code_iso" => $this->code_iso,
            "name_fr" => $this->name_fr,
            "text" => $this->name_fr,
            "name_en" => $this->name_en,
            "name" => $this->name_fr,
            "name_es" => $this->name_es,
            "name_pt" => $this->name_pt,
            "zone_id" => $this->zone_id,
            "zone" => new ZoneResource(Zone::find($this->zone_id)),
        ];
    }
}

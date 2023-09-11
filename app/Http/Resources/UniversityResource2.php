<?php

namespace App\Http\Resources;

use App\Models\City;
use App\Models\Continent;
use App\Models\Country;
use Illuminate\Http\Resources\Json\JsonResource;

class UniversityResource2 extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}

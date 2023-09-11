<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MinistryResource extends JsonResource
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
            'color' => $this->color,
            'name_fr' => $this->name_fr,
            'name_en' => $this->name_en,
            'name_es' => $this->name_es,
            'name_pt' => $this->name_pt,
            'name' => $this->name_en,
        ];
    }
}

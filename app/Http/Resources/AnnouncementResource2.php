<?php

namespace App\Http\Resources;

use App\Models\CategoryAnnouncement;
use App\Models\Currency;
use App\Models\University;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class AnnouncementResource2 extends JsonResource
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

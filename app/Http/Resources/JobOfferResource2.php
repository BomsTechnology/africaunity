<?php

namespace App\Http\Resources;

use App\Models\City;
use App\Models\Continent;
use App\Models\Country;
use App\Models\Currency;
use App\Models\JobOffer;
use App\Models\LevelStudy;
use App\Models\OfferType;
use App\Models\SizeCompany;
use App\Models\User;
use App\Models\WorkDepartment;
use App\Models\WorkMode;
use App\Models\YearExperience;
use App\Models\Zone;
use Illuminate\Http\Resources\Json\JsonResource;

class JobOfferResource2 extends JsonResource
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

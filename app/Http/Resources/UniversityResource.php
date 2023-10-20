<?php

namespace App\Http\Resources;

use App\Models\City;
use App\Models\Continent;
use App\Models\Country;
use App\Models\LegalStatus;
use App\Models\LevelStudy;
use App\Models\UniversitySector;
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
            'type' => $this->type,
            'firstday_university' => $this->firstday_university,
            'registration_period' => $this->registration_period,
            'required_level' => $this->required_level,
            'slug' => Str::slug($this->name),
            'description' => $this->description,
            'continent_id' => $this->continent_id,
            'city_id' => $this->city_id,
            'country_id' => $this->country_id,
            'zone_id' => $this->zone_id,
            'schooling_type_id' => $this->schooling_type_id,
            'university_sector_id' => $this->university_sector_id,
            'level_study_id' => $this->level_study_id,
            'legal_status_id' => $this->legal_status_id,
            'image' => $this->image,
            'continent' => new ContinentResource(Continent::find($this->continent_id)),
            'city' => new CityResource(City::find($this->city_id)),
            'country' => new CountryResource(Country::find($this->country_id)),
            'legal_status' => $this->legal_status_id ? new LegalStatusResource(LegalStatus::find($this->legal_status_id)) : null,
            'level_study' => $this->level_study_id ? new LevelStudyResource(LevelStudy::find($this->level_study_id)) : null,
            'level_required' => $this->required_level ? new LevelStudyResource(LevelStudy::find($this->required_level)) : null,
            'university_sector' => $this->university_sector_id ? new UniversitySectorResource(UniversitySector::find($this->university_sector_id)) : null,
            'schooling_type' => $this->schooling_type_id ? new SchoolingTypeResource(Zone::find($this->schooling_type_id)) : null,
            'zone' => new ZoneResource(Zone::find($this->zone_id)),
            'date' => $this->created_at->format('Y-m-d'),
        ];
    }
}

<?php

namespace App\Http\Resources;

use App\Models\City;
use App\Models\Continent;
use App\Models\ContractType;
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
use Illuminate\Support\Str;

class JobOfferResource extends JsonResource
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
            'status' => $this->status,
            'title' => $this->title,
            'description' => $this->description,
            'reference' => $this->reference,
            'location' => $this->location,
            'company_name' => $this->company_name,
            'start_date' => $this->start_date->format('Y-m-d'),
            'company_email' => $this->company_email,
            'company_website' => $this->company_website,
            'company_logo' => $this->company_logo,
            'min_price' => $this->min_price,
            'max_price' => $this->max_price,
            'user' => new UserResource2(User::find($this->user_id)),
            'contract_type' => new ContractTypeResource(ContractType::find($this->contract_type_id)),
            'contract_type_id' => $this->contract_type_id,
            'currency' => new CurrencyResource(Currency::find($this->currency_id)),
            'year_experience' => new YearExperienceResource(YearExperience::find($this->year_experience_id)),
            'work_department' => new WorkDepartmentResource(WorkDepartment::find($this->work_department_id)),
            'work_mode' => new WorkModeResource(WorkMode::find($this->work_mode_id)),
            'size_company' => new SizeCompanyResource(SizeCompany::find($this->size_company_id)),
            'offer_type' => new OfferTypeResource(OfferType::find($this->offer_type_id)),
            'level_study' => new LevelStudyResource(LevelStudy::find($this->level_study_id)),
            'city' => new CityResource(City::find($this->city_id)),
            'zone' => new ZoneResource(Zone::find($this->zone_id)),
            'continent' => new ContinentResource(Continent::find($this->continent_id)),
            'country' => new CountryResource(Country::find($this->country_id)),
            'date' => $this->created_at->format('Y-m-d'),
            'activity_areas' => ActivityAreaResource::collection(JobOffer::find($this->id)->activity_areas()->orderBy('id')->get()),
            'languages' => LanguageResource::collection(JobOffer::find($this->id)->languages()->orderBy('id')->get()),
            'slug' => Str::slug($this->title)
        ];
    }
}

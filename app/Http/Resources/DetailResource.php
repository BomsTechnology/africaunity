<?php

namespace App\Http\Resources;

use App\Models\BusinessSize;
use App\Models\BusinessType;
use App\Models\Country;
use App\Models\Detail;
use App\Models\Follower;
use App\Models\LegalStatus;
use App\Models\Status;
use Illuminate\Http\Resources\Json\JsonResource;

class DetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // return parent::toArray($request);

        return [
            'id' => $this->id,
            'status' => $this->status,
            'social_object' => $this->social_object,
            'goal_attribution' => $this->goal_attribution,
            'presentation' => $this->presentation,
            'sex' => $this->sex,
            'name_responsible' => $this->name_responsible,
            'adress' => $this->adress,
            'cv_path' => $this->cv_path,
            'phone_number' => $this->phone_number,
            'phone_number_2' => $this->phone_number_2,
            'navite_date' => $this->navite_date,
            'website' => $this->website,
            'youtube' => $this->youtube,
            'other_activity' => $this->other_activity,
            'search_partner' => $this->search_partner,
            'user_id' => $this->user_id,
            'business_type_id' => $this->business_type_id,
            'business_size_id' => $this->business_size_id,
            'legal_status_id' => $this->legal_status_id,
            'status_id' => $this->status_id,
            'native_country' => $this->native_country,
            'residence_country' => $this->residence_country,
            'subscribers' =>  FollowerResource::collection(Follower::where('subscription', $this->user_id)->orderBy('id', 'desc')->get()),
            'subscriptions' =>  FollowerResource::collection(Follower::where('subscriber', $this->user_id)->orderBy('id', 'desc')->get()),
            'status' => new StatusResource(Status::find($this->status_id)),
            'business_type' => new BusinessTypeResource(BusinessType::find($this->business_type_id)),
            'business_size' => new BusinessSizeResource(BusinessSize::find($this->business_size_id)),
            'legal_status' => new LegalStatusResource(LegalStatus::find($this->legal_status_id)),
            'country_native' => new CountryResource(Country::find($this->native_country)),
            'country_residence' => new CountryResource(Country::find($this->residence_country)),
            'activity_areas' => ActivityAreaResource::collection(Detail::find($this->id)->activity_areas()->orderBy('id')->get()),
            'languages' => LanguageResource::collection(Detail::find($this->id)->languages()->orderBy('id')->get()),
        ];
    }
}

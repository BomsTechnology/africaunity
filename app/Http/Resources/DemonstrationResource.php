<?php

namespace App\Http\Resources;

use App\Models\ActivityArea;
use App\Models\City;
use App\Models\Continent;
use App\Models\Country;
use App\Models\Currency;
use App\Models\DemonstrationMode;
use App\Models\DemonstrationNiche;
use App\Models\DemonstrationType;
use App\Models\Ministry;
use App\Models\User;
use App\Models\Zone;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;
class DemonstrationResource extends JsonResource
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
            'hourly' => $this->hourly,
            'place_link' => $this->place_link,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'email' => $this->email,
            'phone' => $this->phone,
            'enter_type' => $this->enter_type,
            'image' => $this->image,
            'price' => $this->price,
            'demonstration_type_id' => $this->demonstration_type_id,
            'demonstration_mode_id' => $this->demonstration_mode_id,
            'demonstration_niche_id' => $this->demonstration_niche_id,
            'currency_id' => $this->currency_id,
            'user_id' => $this->user_id,
            'city_id' => $this->city_id,
            'zone_id' => $this->zone_id,
            'continent_id' => $this->continent_id,
            'country_id' => $this->country_id,
            'ministry_id' => $this->ministry_id,
            'activity_area_id' => $this->activity_area_id,
            'ministry' => new MinistryResource(Ministry::find($this->ministry_id)),
            'activity_area' => new ActivityAreaResource(ActivityArea::find($this->activity_area_id)),
            'demonstration_type' => new DemonstrationTypeResource(DemonstrationType::find($this->demonstration_type_id)),
            'demonstration_mode' => new DemonstrationModeResource(DemonstrationMode::find($this->demonstration_mode_id)),
            'demonstration_niche' => new DemonstrationNicheResource(DemonstrationNiche::find($this->demonstration_niche_id)),
            'user' => new UserResource2(User::find($this->user_id)),
            'currency' => new CurrencyResource(Currency::find($this->currency_id)),
            'city' => new CityResource(City::find($this->city_id)),
            'zone' => new ZoneResource(Zone::find($this->zone_id)),
            'continent' => new ContinentResource(Continent::find($this->continent_id)),
            'country' => new CountryResource(Country::find($this->country_id)),
            'date' => $this->created_at->format('Y-m-d'),
            'slug' => Str::slug($this->title)
        ];
    }
}

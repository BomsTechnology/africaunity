<?php

namespace App\Http\Resources;

use App\Models\CategoryAnnouncement;
use App\Models\Currency;
use App\Models\University;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class AnnouncementResource extends JsonResource
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
            'title' => $this->title,
            'slug' => Str::slug($this->title),
            'description' => $this->description,
            'image' => explode(";", $this->image),
            'status' => $this->status,
            'price' => $this->price,
            'email' => $this->email,
            'phone' => $this->phone,
            'adress' => $this->adress,
            'website' => $this->website,
            'user' => new UserResource2(
                User::find($this->user_id)
            ),
            'currency_id' => $this->currency_id,
            'category_announcement_id' => $this->category_announcement_id,
            'university_id' => $this->university_id,
            'currency' => $this->currency_id != null ? new CurrencyResource(Currency::find($this->currency_id)) : '',
            'category' => new CategoryAnnouncementResource(CategoryAnnouncement::find($this->category_announcement_id)),
            'university' => new UniversityResource(University::find($this->university_id)),
            'date' => $this->created_at->format('Y-m-d'),
        ];
    }
}

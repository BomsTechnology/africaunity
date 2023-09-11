<?php

namespace App\Http\Resources;

use App\Models\JobOffer;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class JobOfferCommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return 
        [
            'id' => $this->id,
            'content' => $this->content,
            'status' => $this->status,
            'user' => User::find($this->user_id),
            'user_id' => $this->user_id,
            'jobOffer' => new JobOfferResource(JobOffer::find($this->job_offer_id)),
            'job_offer_id' => $this->job_offer_id,
            'date' => $this->created_at,
        ];
    }
}

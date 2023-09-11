<?php

namespace App\Http\Resources;

use App\Models\Tender;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class TenderCommentResource extends JsonResource
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
            'content' => $this->content,
            'status' => $this->status,
            'user' => User::find($this->user_id),
            'user_id' => $this->user_id,
            'tender' => new TenderResource(Tender::find($this->tender_id)),
            'tender_id' => $this->tender_id,
            'date' => $this->created_at,
        ];
    }
}

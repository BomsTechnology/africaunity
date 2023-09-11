<?php

namespace App\Http\Resources;

use App\Models\CategoryPersonalPost;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class PersonalPostResource extends JsonResource
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
            'title' => $this->title,
            'slug' => Str::slug($this->title),
            'content' => $this->content,
            'image' => $this->image,
            'status' => $this->status,
            'subtheme' => $this->subtheme,
            'user_id' => $this->user_id,
            'language' => $this->language,
            'date' => $this->created_at->format('Y-m-d'),
            'category_personal_post_id' => $this->category_personal_post_id,
            'user' => new UserResource2(User::find($this->user_id)),
            'category_personal_post' => new CategoryPersonalPostResource(CategoryPersonalPost::find($this->category_personal_post_id)),
        ];
    }
}

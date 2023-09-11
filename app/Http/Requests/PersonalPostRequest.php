<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PersonalPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => 'required|string|between:1,50',
            'content' => 'required|string',
            'subtheme' => '',
            'language' => 'required|string',
            'user_id' => 'integer|required',
            'category_personal_post_id' => 'integer|required',
            'image' => 'required|mimes:png,jpg,jpeg,gif|dimensions:min_width=100,min_height=200'
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UniversityRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|between:1,50',
            'description' => 'required|string',
            'image' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048',
            'continent_id' => 'integer|required',
            'country_id' => 'integer|required',
            'city_id' => 'integer|required',
        ];
    }
}

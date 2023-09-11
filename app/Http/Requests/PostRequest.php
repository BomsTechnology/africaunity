<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
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
            'title' => 'required|string|between:10,50',
            'content' => 'required|string',
            'type' => 'required|string',
            'language' => 'required|string',
            'user_id' => 'integer|required',
            'continent_id' => 'integer|required',
            'zone_id' => 'integer|required',
            'country_id' => 'integer|required',
            'ministries' => 'required',
        ];
    }
}

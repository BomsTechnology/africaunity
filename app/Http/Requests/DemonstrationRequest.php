<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DemonstrationRequest extends FormRequest
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
        'description' => 'required|string',
        'hourly'=> 'required|string',
        'place_link'=> 'required|string',
        'enter_type'=> 'required|string',
        'price'=> 'required|string',
        'phone'=> 'required|string',
        'email'=> 'required|string|email',
        'start_date'=> 'required|date',
        'end_date'=> 'required|date',
        'user_id'=> 'required|integer',
        'demonstration_type_id'=> 'integer|required',
        'demonstration_mode_id'=> 'integer|required',
        'demonstration_niche_id'=> 'integer|required',
        'city_id'=> 'integer|required',
        'zone_id'=> 'integer|required',
        'continent_id'=> 'integer|required',
        'country_id'=> 'integer|required',
        'currency_id'=> 'nullable|string',
        'ministry_id'=> 'nullable|string',
        'activity_area_id'=> 'nullable|string',
        ];
    }
}

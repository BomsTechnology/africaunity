<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TenderRequest extends FormRequest
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
        'title'  => 'required|string|between:1,50',
        'description' => 'required|string',
        'reference' => 'required|string',
        'location' => 'required|string',
        'company_name' => 'required|string',
        'company_email' => 'required|string',
        'company_website' => 'required|string',
        'company_logo' => 'required|string',
        'min_price' => 'required|string',
        'max_price' => 'required|string',
        'user_id' => 'integer|required',
        'currency_id' => 'integer|required',
        'work_department_id' => 'integer|required',
        'work_mode_id' => 'integer|required',
        'size_company_id' => 'integer|required',
        'zone_id' => 'integer|required',
        'continent_id' => 'integer|required',
        'end_date' => 'required|date',
        'country_id' => 'integer|required',
        ];
    }
}

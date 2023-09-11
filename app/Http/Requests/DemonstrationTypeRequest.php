<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DemonstrationTypeRequest extends FormRequest
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
            'name_fr' => 'required|string',
            'name_en' => 'required|string',
            'name_es' => 'required|string',
            'name_pt' => 'required|string',
        ];
    }
}

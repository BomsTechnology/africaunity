<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CountryRequest;
use App\Http\Resources\CountryResource;
use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(string $lang)
    {
        if($lang == 'pt'){
            return CountryResource::collection(Country::orderBy('name_pt', 'asc')->get());
        }elseif ($lang == 'es') {
            return CountryResource::collection(Country::orderBy('name_es', 'asc')->get());
        }elseif ($lang == 'en') {
            return CountryResource::collection(Country::orderBy('name_en', 'asc')->get());
        }else {
            return CountryResource::collection(Country::orderBy('name_fr', 'asc')->get());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CountryRequest $request)
    {
        $country = Country::create($request->validated());

        return new CountryResource($country);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function show(Country $country)
    {
        return new CountryResource($country);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function update(CountryRequest $request, Country $country)
    {
        $country->update($request->validated());

        return new CountryResource($country);
    }


    public function destroy($countries)
    {
        $countries = json_decode($countries);
        foreach ($countries as  $country) {
            Country::where('id', $country)->delete();
        }

        return response()->noContent();
    }
}

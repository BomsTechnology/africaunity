<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CityRequest;
use App\Http\Resources\CityResource;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(string $lang)
    {
        if($lang == 'pt'){
            return CityResource::collection(City::orderBy('name_pt', 'asc')->get());
        }elseif ($lang == 'es') {
            return CityResource::collection(City::orderBy('name_es', 'asc')->get());
        }elseif ($lang == 'en') {
            return CityResource::collection(City::orderBy('name_en', 'asc')->get());
        }else {
            return CityResource::collection(City::orderBy('name_fr', 'asc')->get());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CityRequest $request)
    {
        $city = City::create($request->validated());

        return new CityResource($city);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function show(City $city)
    {
        return new CityResource($city);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function update(CityRequest $request, City $city)
    {
        $city->update($request->validated());

        return new CityResource($city);
    }


    public function destroy($cities)
    {
        $cities = json_decode($cities);
        foreach ($cities as  $city) {
            City::where('id', $city)->delete();
        }

        return response()->noContent();
    }
}

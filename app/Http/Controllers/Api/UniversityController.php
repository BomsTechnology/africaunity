<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UniversityRequest;
use App\Http\Resources\UniversityResource;
use App\Http\Resources\UniversityResource2;
use App\Models\University;
use Illuminate\Http\Request;

class UniversityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UniversityResource::collection(University::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fileds = $request->validate([
            'name' => 'required|string|between:1,50',
            'description' => 'required|string',
            'image' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048',
            'continent_id' => 'integer|required',
            'country_id' => 'integer|required',
            'city_id' => 'integer|required',
            'zone_id' => 'integer|required',
        ]);
        $filename = '/uploads/'.time().'.'. $request->file('image')->extension();
        $request->file('image')->storePubliclyAs('public', $filename);
        $data = [
            'name' => $fileds['name'],
            'description' => $fileds['description'],
            'continent_id' => $fileds['continent_id'],
            'country_id' => $fileds['country_id'],
            'city_id' => $fileds['city_id'],
            'zone_id' => $fileds['zone_id'],
            'image' => $filename
        ];

        $university = University::create($data);
        
        return new UniversityResource($university);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\University  $university
     * @return \Illuminate\Http\Response
     */
    public function show(University $university)
    {
        return new UniversityResource2($university);
    }

    public function show2(University $university)
    {
        return new UniversityResource($university);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\University  $university
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, University $university)
    {
        $fileds = $request->validate([
            'name' => 'required|string|between:1,50',
            'description' => 'required|string',
            'continent_id' => 'integer|required',
            'country_id' => 'integer|required',
            'city_id' => 'integer|required',
            'zone_id' => 'integer|required',
        ]);

        $data = [
            'name' => $fileds['name'],
            'description' => $fileds['description'],
            'continent_id' => $fileds['continent_id'],
            'country_id' => $fileds['country_id'],
            'city_id' => $fileds['city_id'],
            'zone_id' => $fileds['zone_id'],
        ];

        if($request->file('image')){
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            $data['image'] = $filename;
        }
        
        $university->update($data);

        return new UniversityResource($university);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\University  $university
     * @return \Illuminate\Http\Response
     */
    public function destroy(University $university)
    {
        $university->delete();

        return response()->noContent();
    }
}

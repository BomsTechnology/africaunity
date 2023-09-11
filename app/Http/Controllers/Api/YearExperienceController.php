<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\YearExperienceRequest;
use App\Http\Resources\YearExperienceResource;
use App\Models\YearExperience;
use Illuminate\Http\Request;

class YearExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return YearExperienceResource::collection(YearExperience::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(YearExperienceRequest $request)
    {
        $yearExperience = YearExperience::create($request->validated());
        
        return new YearExperienceResource($yearExperience);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\YearExperience  $yearExperience
     * @return \Illuminate\Http\Response
     */
    public function show(YearExperience $yearExperience)
    {
        return new YearExperienceResource($yearExperience);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\YearExperience  $yearExperience
     * @return \Illuminate\Http\Response
     */
    public function update(YearExperienceRequest $request, YearExperience $yearExperience)
    {
        $yearExperience->update($request->validated());
        return new YearExperienceResource($yearExperience);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\YearExperience  $yearExperience
     * @return \Illuminate\Http\Response
     */
    public function destroy(YearExperience $yearExperience)
    {
        $yearExperience->delete();

        return response()->noContent();
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SchoolingTypeRequest;
use App\Http\Resources\SchoolingTypeResource;
use App\Models\SchoolingType;
use Illuminate\Http\Request;

class SchoolingTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SchoolingTypeResource::collection(SchoolingType::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SchoolingTypeRequest $request)
    {
        $legalStatus = SchoolingType::create($request->validated());
        
        return new SchoolingTypeResource($legalStatus);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SchoolingType  $schoolingType
     * @return \Illuminate\Http\Response
     */
    public function show(SchoolingType $schoolingType)
    {
        return new SchoolingTypeResource($schoolingType);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SchoolingType  $schoolingType
     * @return \Illuminate\Http\Response
     */
    public function update(SchoolingTypeRequest $request, SchoolingType $schoolingType)
    {
        $schoolingType->update($request->validated());

        return new SchoolingTypeResource($schoolingType);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SchoolingType  $schoolingType
     * @return \Illuminate\Http\Response
     */
    public function destroy(SchoolingType $schoolingType)
    {
        $schoolingType->delete();

        return response()->noContent();
    }
}

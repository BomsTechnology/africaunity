<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BusinessTypeRequest;
use App\Http\Resources\BusinessTypeResource;
use App\Models\BusinessType;
use Illuminate\Http\Request;

class BusinessTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return BusinessTypeResource::collection(BusinessType::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BusinessTypeRequest $request)
    {
        $businessType = BusinessType::create($request->validated());

        return new BusinessTypeResource($businessType);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BusinessType  $businessType
     * @return \Illuminate\Http\Response
     */
    public function show(BusinessType $businessType)
    {
        return new BusinessTypeResource($businessType);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BusinessType  $businessType
     * @return \Illuminate\Http\Response
     */
    public function update(BusinessTypeRequest $request, BusinessType $businessType)
    {
        $businessType->update($request->validated());

        return new BusinessTypeResource($businessType);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BusinessType  $businessType
     * @return \Illuminate\Http\Response
     */
    public function destroy(BusinessType $businessType)
    { 
        $businessType->delete();

        return response()->noContent();
    }
}

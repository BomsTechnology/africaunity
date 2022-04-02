<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BusinessSizeRequest;
use App\Http\Resources\BusinessSizeResource;
use App\Models\BusinessSize;
use Illuminate\Http\Request;

class BusinessSizeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return BusinessSizeResource::collection(BusinessSize::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BusinessSizeRequest $request)
    {
        $businessSize = BusinessSize::create($request->validated());
        
        return new BusinessSizeResource($businessSize);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BusinessSize  $businessSize
     * @return \Illuminate\Http\Response
     */
    public function show(BusinessSize $businessSize)
    {
        return new BusinessSizeResource($businessSize);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BusinessSize  $businessSize
     * @return \Illuminate\Http\Response
     */
    public function update(BusinessSizeRequest $request, BusinessSize $businessSize)
    {
        $businessSize->update($request->validated());

        return new BusinessSizeResource($businessSize);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BusinessSize  $businessSize
     * @return \Illuminate\Http\Response
     */
    public function destroy(BusinessSize $businessSize)
    {
        $businessSize->delete();

        return response()->noContent();
    }
}

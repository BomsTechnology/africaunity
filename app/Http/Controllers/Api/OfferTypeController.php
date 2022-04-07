<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\OfferTypeRequest;
use App\Http\Resources\OfferTypeResource;
use App\Models\OfferType;
use Illuminate\Http\Request;

class OfferTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OfferTypeResource::collection(OfferType::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OfferTypeRequest $request)
    {
        $legalStatus = OfferType::create($request->validated());
        
        return new OfferTypeResource($legalStatus);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OfferType  $offerType
     * @return \Illuminate\Http\Response
     */
    public function show(OfferType $offerType)
    {
        return new OfferTypeResource($offerType);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OfferType  $offerType
     * @return \Illuminate\Http\Response
     */
    public function update(OfferTypeRequest $request, OfferType $offerType)
    {
        $offerType->update($request->validated());

        return new OfferTypeResource($offerType);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OfferType  $offerType
     * @return \Illuminate\Http\Response
     */
    public function destroy(OfferType $offerType)
    {
        $offerType->delete();

        return response()->noContent();
    }
}

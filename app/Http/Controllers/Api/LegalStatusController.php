<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LegalStatusRequest;
use App\Http\Resources\LegalStatusResource;
use App\Models\LegalStatus;
use Illuminate\Http\Request;

class LegalStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LegalStatusResource::collection(LegalStatus::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LegalStatusRequest $request)
    {
        $legalStatus = LegalStatus::create($request->validated());
        
        return new LegalStatusResource($legalStatus);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LegalStatus  $legalStatus
     * @return \Illuminate\Http\Response
     */
    public function show(LegalStatus $legalStatus)
    {
        return new LegalStatusResource($legalStatus);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LegalStatus  $legalStatus
     * @return \Illuminate\Http\Response
     */
    public function update(LegalStatusRequest $request, LegalStatus $legalStatus)
    {
        $legalStatus->update($request->validated());

        return new LegalStatusResource($legalStatus);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LegalStatus  $legalStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(LegalStatus $legalStatus)
    {
        $legalStatus->delete();

        return response()->noContent();
    }
}

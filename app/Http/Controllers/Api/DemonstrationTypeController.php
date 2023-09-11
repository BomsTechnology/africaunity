<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DemonstrationTypeRequest;
use App\Http\Resources\DemonstrationTypeResource;
use App\Models\DemonstrationType;
use Illuminate\Http\Request;

class DemonstrationTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DemonstrationTypeResource::collection(DemonstrationType::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DemonstrationTypeRequest $request)
    {
        $demonstrationType = DemonstrationType::create($request->validated());

        return new DemonstrationTypeResource($demonstrationType);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DemonstrationType  $demonstrationType
     * @return \Illuminate\Http\Response
     */
    public function show(DemonstrationType $demonstrationType)
    {
        return new DemonstrationTypeResource($demonstrationType);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DemonstrationType  $demonstrationType
     * @return \Illuminate\Http\Response
     */
    public function update(DemonstrationTypeRequest $request, DemonstrationType $demonstrationType)
    {
        $demonstrationType->update($request->validated());

        return new DemonstrationTypeResource($demonstrationType);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DemonstrationType  $demonstrationType
     * @return \Illuminate\Http\Response
     */
    public function destroy(DemonstrationType $demonstrationType)
    {
        $demonstrationType->delete();

        return response()->noContent();
    }
}

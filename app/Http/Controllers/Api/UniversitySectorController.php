<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UniversitySectorRequest;
use App\Http\Resources\UniversitySectorResource;
use App\Models\UniversitySector;
use Illuminate\Http\Request;

class UniversitySectorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UniversitySectorResource::collection(UniversitySector::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UniversitySectorRequest $request)
    {
        $legalStatus = UniversitySector::create($request->validated());
        
        return new UniversitySectorResource($legalStatus);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UniversitySector  $universitySector
     * @return \Illuminate\Http\Response
     */
    public function show(UniversitySector $universitySector)
    {
        return new UniversitySectorResource($universitySector);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UniversitySector  $universitySector
     * @return \Illuminate\Http\Response
     */
    public function update(UniversitySectorRequest $request, UniversitySector $universitySector)
    {
        $universitySector->update($request->validated());

        return new UniversitySectorResource($universitySector);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UniversitySector  $universitySector
     * @return \Illuminate\Http\Response
     */
    public function destroy(UniversitySector $universitySector)
    {
        $universitySector->delete();

        return response()->noContent();
    }
}

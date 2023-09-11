<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DemonstrationModeRequest;
use App\Http\Resources\DemonstrationModeResource;
use App\Models\DemonstrationMode;
use Illuminate\Http\Request;

class DemonstrationModeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DemonstrationModeResource::collection(DemonstrationMode::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DemonstrationModeRequest $request)
    {
        $demonstrationMode = DemonstrationMode::create($request->validated());

        return new DemonstrationModeResource($demonstrationMode);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DemonstrationMode  $demonstrationMode
     * @return \Illuminate\Http\Response
     */
    public function show(DemonstrationMode $demonstrationMode)
    {
        return new DemonstrationModeResource($demonstrationMode);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DemonstrationMode  $demonstrationMode
     * @return \Illuminate\Http\Response
     */
    public function update(DemonstrationModeRequest $request, DemonstrationMode $demonstrationMode)
    {
        $demonstrationMode->update($request->validated());

        return new DemonstrationModeResource($demonstrationMode);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DemonstrationMode  $demonstrationMode
     * @return \Illuminate\Http\Response
     */
    public function destroy(DemonstrationMode $demonstrationMode)
    {
        $demonstrationMode->delete();

        return response()->noContent();
    }
}

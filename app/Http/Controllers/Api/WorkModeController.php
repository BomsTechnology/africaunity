<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\WorkModeRequest;
use App\Http\Resources\WorkModeResource;
use App\Models\WorkMode;
use Illuminate\Http\Request;

class WorkModeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return WorkModeResource::collection(WorkMode::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(WorkModeRequest $request)
    {
        $legalStatus = WorkMode::create($request->validated());
        
        return new WorkModeResource($legalStatus);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\WorkMode  $workMode
     * @return \Illuminate\Http\Response
     */
    public function show(WorkMode $workMode)
    {
        return new WorkModeResource($workMode);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\WorkMode  $workMode
     * @return \Illuminate\Http\Response
     */
    public function update(WorkModeRequest $request, WorkMode $workMode)
    {
        $workMode->update($request->validated());

        return new WorkModeResource($workMode);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\WorkMode  $workMode
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkMode $workMode)
    {
        $workMode->delete();

        return response()->noContent();
    }
}

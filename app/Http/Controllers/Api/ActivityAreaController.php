<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ActivityAreaRequest;
use App\Http\Resources\ActivityAreaResource;
use App\Models\ActivityArea;
use Illuminate\Http\Request;

class ActivityAreaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ActivityAreaResource::collection(ActivityArea::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ActivityAreaRequest $request)
    {
        $activityArea = ActivityArea::create($request->validated());

        return new ActivityAreaResource($activityArea);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ActivityArea  $activityArea
     * @return \Illuminate\Http\Response
     */
    public function show(ActivityArea $activityArea)
    {
        return new ActivityAreaResource($activityArea);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ActivityArea  $activityArea
     * @return \Illuminate\Http\Response
     */
    public function update(ActivityAreaRequest $request, ActivityArea $activityArea)
    {
        $activityArea->update($request->validated());

        return new ActivityAreaResource($activityArea);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ActivityArea  $activityArea
     * @return \Illuminate\Http\Response
     */
    public function destroy(ActivityArea $activityArea)
    {
        $activityArea->delete();

        return response()->noContent();
    }
}

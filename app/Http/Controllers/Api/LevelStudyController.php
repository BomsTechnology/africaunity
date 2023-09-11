<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LevelStudyRequest;
use App\Http\Resources\LevelStudyResource;
use App\Models\LevelStudy;
use Illuminate\Http\Request;

class LevelStudyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LevelStudyResource::collection(LevelStudy::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LevelStudyRequest $request)
    {
        $legalStatus = LevelStudy::create($request->validated());
        
        return new LevelStudyResource($legalStatus);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LevelStudy  $levelStudy
     * @return \Illuminate\Http\Response
     */
    public function show(LevelStudy $levelStudy)
    {
        return new LevelStudyResource($levelStudy);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LevelStudy  $levelStudy
     * @return \Illuminate\Http\Response
     */
    public function update(LevelStudyRequest $request, LevelStudy $levelStudy)
    {
        $levelStudy->update($request->validated());

        return new LevelStudyResource($levelStudy);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LevelStudy  $levelStudy
     * @return \Illuminate\Http\Response
     */
    public function destroy(LevelStudy $levelStudy)
    {
        $levelStudy->delete();

        return response()->noContent();
    }
}

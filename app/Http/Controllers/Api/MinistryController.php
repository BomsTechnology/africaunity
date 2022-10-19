<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\MinistryRequest;
use App\Http\Resources\MinistryResource;
use App\Models\Ministry;
use Illuminate\Http\Request;

class MinistryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MinistryResource::collection(Ministry::latest()->get());
    }


    public function ministry_home()
    {
        return MinistryResource::collection(Ministry::latest()->limit(4)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MinistryRequest $request)
    {
        $ministry = Ministry::create($request->validated());

        return new MinistryResource($ministry);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ministry  $ministry
     * @return \Illuminate\Http\Response
     */
    public function show(Ministry $ministry)
    {
        return new MinistryResource($ministry);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ministry  $ministry
     * @return \Illuminate\Http\Response
     */
    public function update(MinistryRequest $request, Ministry $ministry)
    {
        $ministry->update($request->validated());

        return new MinistryResource($ministry);
    }


    public function destroy($ministries)
    {
        $ministries = json_decode($ministries);
        foreach ($ministries as  $ministry) {
            Ministry::where('id', $ministry)->delete();
        }

        return response()->noContent();
    }
}

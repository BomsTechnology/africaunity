<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DemonstrationNicheRequest;
use App\Http\Resources\DemonstrationNicheResource;
use App\Models\DemonstrationNiche;
use Illuminate\Http\Request;

class DemonstrationNicheController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DemonstrationNicheResource::collection(DemonstrationNiche::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DemonstrationNicheRequest $request)
    {
        $demonstrationNiche = DemonstrationNiche::create($request->validated());

        return new DemonstrationNicheResource($demonstrationNiche);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DemonstrationNiche  $demonstrationNiche
     * @return \Illuminate\Http\Response
     */
    public function show(DemonstrationNiche $demonstrationNiche)
    {
        return new DemonstrationNicheResource($demonstrationNiche);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DemonstrationNiche  $demonstrationNiche
     * @return \Illuminate\Http\Response
     */
    public function update(DemonstrationNicheRequest $request, $demonstrationNiche)
    {
        $demonstrationNiche = DemonstrationNiche::find($demonstrationNiche);

        $demonstrationNiche->update($request->validated());

        return new DemonstrationNicheResource($demonstrationNiche);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DemonstrationNiche  $demonstrationNiche
     * @return \Illuminate\Http\Response
     */
    public function destroy($demonstrationNiche)
    {
        DemonstrationNiche::find($demonstrationNiche)->delete();

        return response()->noContent();
    }
}

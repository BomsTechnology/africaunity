<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ZoneRequest;
use App\Http\Resources\ZoneResource;
use App\Models\Zone;
use Illuminate\Http\Request;

class ZoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(string $lang)
    {
        if($lang == 'pt'){
            return ZoneResource::collection(Zone::orderBy('name_pt', 'asc')->get());
        }elseif ($lang == 'es') {
            return ZoneResource::collection(Zone::orderBy('name_es', 'asc')->get());
        }elseif ($lang == 'en') {
            return ZoneResource::collection(Zone::orderBy('name_en', 'asc')->get());
        }else {
            return ZoneResource::collection(Zone::orderBy('name_fr', 'asc')->get());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ZoneRequest $request)
    {
        $zone = Zone::create($request->validated());

        return new ZoneResource($zone);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Zone  $zone
     * @return \Illuminate\Http\Response
     */
    public function show(Zone $zone)
    {
        return new ZoneResource($zone);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Zone  $zone
     * @return \Illuminate\Http\Response
     */
    public function update(ZoneRequest $request, Zone $zone)
    {
        $zone->update($request->validated());

        return new ZoneResource($zone);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Zone  $zone
     * @return \Illuminate\Http\Response
     */
    public function destroy($zones)
    {
        $zones = json_decode($zones);
        foreach ($zones as  $zone) {
            Zone::where('id', $zone)->delete();
        }
        return response()->noContent();
    }
}

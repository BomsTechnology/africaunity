<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContinentRequest;
use App\Http\Resources\ContinentResource;
use App\Models\Continent;
use Illuminate\Http\Request;

class ContinentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(string $lang)
    {
        if($lang == 'pt'){
            return ContinentResource::collection(Continent::orderBy('name_pt', 'asc')->get());
        }elseif ($lang == 'es') {
            return ContinentResource::collection(Continent::orderBy('name_es', 'asc')->get());
        }elseif ($lang == 'en') {
            return ContinentResource::collection(Continent::orderBy('name_en', 'asc')->get());
        }else {
            return ContinentResource::collection(Continent::orderBy('name_fr', 'asc')->get());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContinentRequest $request)
    {
        $continent = Continent::create($request->validated());

        return new ContinentResource($continent);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Continent  $continent
     * @return \Illuminate\Http\Response
     */
    public function show(Continent $continent)
    {
        return new ContinentResource($continent);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Continent  $continent
     * @return \Illuminate\Http\Response
     */
    public function update(ContinentRequest $request, Continent $continent)
    {
        $continent->update($request->validated());

        return new ContinentResource($continent);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Continent  $continent
     * @return \Illuminate\Http\Response
     */
    public function destroy($continents)
    {
        $continents = json_decode($continents);
        foreach ($continents as  $continent) {
            Continent::where('id', $continent)->delete();
        }
        return response()->noContent();
    }
}

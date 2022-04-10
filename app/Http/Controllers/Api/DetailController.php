<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DetailResource;
use App\Models\Detail;
use App\Models\User;
use Illuminate\Http\Request;

class DetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Detail  $detail
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new DetailResource(User::find($id)->detail);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Detail  $detail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Detail $detail)
    {
        $detail->update([
            'status' => $request->status, 
            'social_object' => $request->social_object,
            'goal_attribution' => $request->goal_attribution,
            'presentation' => $request->presentation,
            'sex' => $request->sex,
            'name_responsible' => $request->name_responsible,
            'adress' => $request->adress,
            'phone_number' => $request->phone_number,
            'phone_number_2' => $request->phone_number_2,
            'navite_date' => $request->navite_date,
            'website' => $request->website,
            'youtube' => $request->youtube,
            'other_activity' => $request->other_activity,
            'search_partner' => $request->search_partner,
            'user_id' => $request->user_id,
            'business_type_id' => $request->business_type_id,
            'business_size_id' => $request->business_size_id,
            'legal_status_id' => $request->legal_status_id,
            'native_country' => $request->native_country,
            'residence_country' => $request->residence_country,
        ]);

        $detail->activity_areas()->sync($request->activity_areas);
        $detail->languages()->sync($request->languages);
        
        return new DetailResource($detail);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Detail  $detail
     * @return \Illuminate\Http\Response
     */
    public function destroy(Detail $detail)
    {
        //
    }
}

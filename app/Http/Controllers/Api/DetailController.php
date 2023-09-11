<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DetailResource;
use App\Models\Detail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

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
        if ($request->file('cv_path')) {
            $request->validate([
                'cv_path' => 'required|mimes:pdf'
            ]);

            if (File::exists(public_path(substr($detail->cv_path, 1, null)))) {
                File::delete(public_path(substr($detail->cv_path, 1, null)));
            }

            $filename = '/uploads/cv/' . time() . "_$detail->user_id." . $request->file('cv_path')->extension();
            $request->file('cv_path')->storePubliclyAs('public', $filename);
        } else {
            $filename = $request->cv_path;
        }



        $detail->update([
            'status_id' => $request->status_id == 'null' ? null : $request->status_id,
            'social_object' => $request->social_object == 'null' ? null : $request->social_object,
            'goal_attribution' => $request->goal_attribution == 'null' ? null : $request->goal_attribution,
            'presentation' => $request->presentation == 'null' ? null : $request->presentation,
            'sex' => $request->sex == 'null' ? null : $request->sex,
            'name_responsible' => $request->name_responsible == 'null' ? null : $request->name_responsible,
            'adress' => $request->adress == 'null' ? null : $request->adress,
            'cv_path' => $filename == 'null' ? null : $filename,
            'phone_number' => $request->phone_number == 'null' ? null : $request->phone_number,
            'phone_number_2' => $request->phone_number_2 == 'null' ? null : $request->phone_number_2,
            'navite_date' => $request->navite_date == 'null' ? null : $request->navite_date,
            'website' => $request->website == 'null' ? null : $request->website,
            'youtube' => $request->youtube == 'null' ? null : $request->youtube,
            'other_activity' => $request->other_activity == 'null' ? null : $request->other_activity,
            'search_partner' => $request->search_partner == 'null' ? null : $request->search_partner,
            'business_type_id' => $request->business_type_id == 'null' ? null : $request->business_type_id,
            'business_size_id' => $request->business_size_id == 'null' ? null : $request->business_size_id,
            'legal_status_id' => $request->legal_status_id == 'null' ? null : $request->legal_status_id,
            'native_country' => $request->native_country == 'null' ? null : $request->native_country,
            'residence_country' => $request->residence_country == 'null' ? null : $request->residence_country,
        ]);

        if($request->activity_areas){$detail->activity_areas()->sync(explode(',', $request->activity_areas));}
        if($request->languages){$detail->languages()->sync(explode(',', $request->languages));}

        $user = User::find($detail->user_id);
        $user->hide_email = $request->hideEmail === 'true' || $request->hideEmail === true ? 1 : 0;
        $user->hide_phone = $request->hidePhone === 'true' || $request->hidePhone === true ? 1 : 0;
        $user->hide_birthday = $request->hideBirthday === 'true' || $request->hideBirthday === true ? 1 : 0;
        $user->recruitment_agency = $request->recruitmentAgency === 'true' || $request->recruitmentAgency  === true ? 1 : 0;
        $user->save();

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

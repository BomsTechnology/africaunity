<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobOfferResource;
use App\Http\Resources\JobOfferResource2;
use App\Models\JobOffer;
use Illuminate\Http\Request;

class JobOfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return JobOfferResource::collection(JobOffer::latest()->get());
    }

    public function jobOffers_user($user)
    {
        return JobOfferResource::collection(JobOffer::where('user_id',$user)->orderBy('id', 'desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fileds = $request->validate([
            'title' => 'required|string|between:1,50',
            'description' => 'required|string',
            'location' => 'required|string',
            'company_name' => 'required|string',
            'company_email' => 'required|string',
            'company_website' => '',
            'min_price' => 'required|string',
            'max_price' => 'string|required',
            'user_id' => 'integer|required',
            'currency_id' => 'integer|required',
            'year_experience_id' => 'integer|required',
            'work_department_id' => 'integer|required',
            'work_mode_id' => 'integer|required',
            'size_company_id' => 'integer|required',
            'offer_type_id' => 'integer|required',
            'level_study_id' => 'integer|required',
            'city_id' => 'integer|required',
            'zone_id' => 'integer|required',
            'continent_id' => 'integer|required',
            'country_id' => 'integer|required',
            'activityAreas' => 'required',
            'languages' => 'required',
        ]);
        $data = [
            'title' => $fileds['title'],
            'description' => $fileds['description'],
            'location' => $fileds['location'],
            'company_name' => $fileds['company_name'],
            'company_email' => $fileds['company_email'],
            'company_website' => $fileds['company_website'],
            'min_price' => $fileds['min_price'],
            'max_price' => $fileds['max_price'],
            'user_id' => $fileds['user_id'],
            'currency_id' => $fileds['currency_id'],
            'year_experience_id' => $fileds['year_experience_id'],
            'work_department_id' => $fileds['work_department_id'],
            'work_mode_id' => $fileds['work_mode_id'],
            'size_company_id' => $fileds['size_company_id'],
            'offer_type_id' => $fileds['offer_type_id'],
            'level_study_id' => $fileds['level_study_id'],
            'city_id' => $fileds['city_id'],
            'zone_id' => $fileds['zone_id'],
            'continent_id' => $fileds['continent_id'],
            'country_id' => $fileds['country_id'],
        ];

        if($request->file('company_logo')){
            $request->validate([
                'company_logo' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('company_logo')->extension();
            $request->file('company_logo')->storePubliclyAs('public', $filename);
            $data['company_logo'] = $filename;
        }

        $jobOffer = JobOffer::create($data);

        $jobOffer->activity_areas()->toggle($request->activityAreas);
        $jobOffer->languages()->toggle($request->languages);
        
        return new JobOfferResource($jobOffer);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\JobOffer  $jobOffer
     * @return \Illuminate\Http\Response
     */
    public function show(JobOffer $jobOffer)
    {
        return new JobOfferResource($jobOffer);
    }

    public function show2(JobOffer $jobOffer)
    {
        return new JobOfferResource2($jobOffer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\JobOffer  $jobOffer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, JobOffer $jobOffer)
    {
        $fileds = $request->validate([
            'title' => 'required|string|between:1,50',
            'description' => 'required|string',
            'location' => 'required|string',
            'company_name' => 'required|string',
            'company_email' => 'required|string',
            'company_website' => '',
            'min_price' => 'required|string',
            'max_price' => 'string|required',
            'user_id' => 'integer|required',
            'currency_id' => 'integer|required',
            'year_experience_id' => 'integer|required',
            'work_department_id' => 'integer|required',
            'work_mode_id' => 'integer|required',
            'size_company_id' => 'integer|required',
            'offer_type_id' => 'integer|required',
            'level_study_id' => 'integer|required',
            'city_id' => 'integer|required',
            'zone_id' => 'integer|required',
            'continent_id' => 'integer|required',
            'country_id' => 'integer|required',
            'activityAreas' => 'required',
            'languages' => 'required',
        ]);
        $data = [
            'title' => $fileds['title'],
            'description' => $fileds['description'],
            'location' => $fileds['location'],
            'company_name' => $fileds['company_name'],
            'company_email' => $fileds['company_email'],
            'company_website' => $fileds['company_website'],
            'min_price' => $fileds['min_price'],
            'max_price' => $fileds['max_price'],
            'user_id' => $fileds['user_id'],
            'currency_id' => $fileds['currency_id'],
            'year_experience_id' => $fileds['year_experience_id'],
            'work_department_id' => $fileds['work_department_id'],
            'work_mode_id' => $fileds['work_mode_id'],
            'size_company_id' => $fileds['size_company_id'],
            'offer_type_id' => $fileds['offer_type_id'],
            'level_study_id' => $fileds['level_study_id'],
            'city_id' => $fileds['city_id'],
            'zone_id' => $fileds['zone_id'],
            'continent_id' => $fileds['continent_id'],
            'country_id' => $fileds['country_id'],
        ];

        if($request->file('company_logo')){
            $request->validate([
                'company_logo' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('company_logo')->extension();
            $request->file('company_logo')->storePubliclyAs('public', $filename);
            $data['company_logo'] = $filename;
        }

        $jobOffer->update($data);

        $jobOffer->activity_areas()->sync(explode(",",$request->activityAreas));
        $jobOffer->languages()->sync(explode(",",$request->languages));
        
        return new JobOfferResource($jobOffer);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\JobOffer  $jobOffer
     * @return \Illuminate\Http\Response
     */
    public function destroy(JobOffer $jobOffer)
    {
        $jobOffer->delete();

        return response()->noContent();
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobOfferResource;
use App\Http\Resources\JobOfferResource2;
use App\Models\JobOffer;
use App\Models\User;
use App\Notifications\ApplyJobNotification;
use Illuminate\Database\Eloquent\Builder;
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

    public function filter(Request $request)
    {
        $jobs = JobOffer::where('status','<>',3);

        if($request->offer_type != ""){
            $offer_type = $request->offer_type;
            $jobs = $jobs->with(['offer_type' => function ($query) use($offer_type) {
                $query->where('id', $offer_type);
            }])->whereHas('offer_type', function (Builder $query) use($offer_type) {
                $query->where('id', $offer_type);
            });
        }

        if($request->work_mode != ""){
            $work_mode = $request->work_mode;
            $jobs = $jobs->with(['work_mode' => function ($query) use($work_mode) {
                $query->where('id', $work_mode);
            }])->whereHas('work_mode', function (Builder $query) use($work_mode) {
                $query->where('id', $work_mode);
            });
        }

        if($request->level_study != ""){
            $level_study = $request->level_study;
            $jobs = $jobs->with(['level_study' => function ($query) use($level_study) {
                $query->where('id', $level_study);
            }])->whereHas('level_study', function (Builder $query) use($level_study) {
                $query->where('id', $level_study);
            });
        }

        if($request->year_experience != ""){
            $year_experience = $request->year_experience;
            $jobs = $jobs->with(['year_experience' => function ($query) use($year_experience) {
                $query->where('id', $year_experience);
            }])->whereHas('year_experience', function (Builder $query) use($year_experience) {
                $query->where('id', $year_experience);
            });
        }

        if($request->city != ""){
            $city = $request->city;
            $jobs = $jobs->with(['city' => function ($query) use($city) {
                $query->where('id', $city);
            }])->whereHas('city', function (Builder $query) use($city) {
                $query->where('id', $city);
            });
        }

        if($request->zone != ""){
            $zone = $request->zone;
            $jobs = $jobs->with(['zone' => function ($query) use($zone) {
                $query->where('id', $zone);
            }])->whereHas('zone', function (Builder $query) use($zone) {
                $query->where('id', $zone);
            });
        }

        if($request->continent != ""){
            $continent = $request->continent;
            $jobs = $jobs->with(['continent' => function ($query) use($continent) {
                $query->where('id', $continent);
            }])->whereHas('continent', function (Builder $query) use($continent) {
                $query->where('id', $continent);
            });
        }

        if($request->country != ""){
            $country = $request->country;
            $jobs = $jobs->with(['country' => function ($query) use($country) {
                $query->where('id', $country);
            }])->whereHas('country', function (Builder $query) use($country) {
                $query->where('id', $country);
            });
        }

        if($request->currency != ""){
            $currency = $request->currency;
            $jobs = $jobs->with(['currency' => function ($query) use($currency) {
                $query->where('id', $currency);
            }])->whereHas('currency', function (Builder $query) use($currency) {
                $query->where('id', $currency);
            });
        }

        if($request->activity_area != ""){
            $activity_area = $request->activity_area;
            $jobs = $jobs->whereHas('activity_areas', function (Builder $query) use($activity_area) {
                    $query->where('activity_areas.id', $activity_area);
                });
        }

        if($request->language != ""){
            $language = $request->language;
            $jobs = $jobs->whereHas('languages', function (Builder $query) use($language) {
                    $query->where('languages.id', $language);
                });
        }


        return JobOfferResource::collection($jobs->get());
    }

    public function jobOffers_front()
    {
        return JobOfferResource::collection(JobOffer::where('status','<>',3)->orderBy('id', 'desc')->get());
    }

    public function jobOffers_home()
    {
        return JobOfferResource::collection(JobOffer::where('status','<>',3)->limit(5)->orderBy('id', 'desc')->get());
    }

    public function jobOffers_user($user)
    {
        return JobOfferResource::collection(JobOffer::where('user_id',$user)->orderBy('id', 'desc')->get());
    }

    public function jobOffers_apply(Request $request)
    {
        $request->validate([
            'user' => 'required',
            'job' => 'required',
            'message' => 'required|string',
            'email' => 'required|email',
            'name' => 'string|required',
            'cv' => 'required|mimes:pdf'
        ]);

        $job = JobOffer::find($request->job);
        $applyUser = User::find($request->user);
        $authorUser = User::find($job->user_id);

        $filename = '/uploads/'.$job->title.'_'.$applyUser->firstname.'_'.time().'.'. $request->file('cv')->extension();
        $request->file('cv')->storePubliclyAs('public', $filename);       


        $data = [
            'name' => $request->name,
            'message' => $request->message,
            'email' => $request->email,
            'cv' => $filename,
        ];

        $authorUser->notify(new ApplyJobNotification($job, $data));
        $response = [
            'status'=>true,
            'message'=>'Apply Send successfully!',
        ];
        return response($response,201);
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
                'company_logo' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048'
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

    public function jobOffers_mark(JobOffer $jobOffer)
    {
        $jobOffer->status = $jobOffer->status == 3 ? 1 : 3;
        $jobOffer->save();

        return response()->noContent();
    }
}

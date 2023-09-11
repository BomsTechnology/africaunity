<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DemonstrationRequest;
use App\Http\Resources\DemonstrationResource;
use App\Models\Demonstration;
use App\Models\User;
use App\Notifications\ContactAnnouncementNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class DemonstrationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DemonstrationResource::collection(Demonstration::latest()->get());
    }


    public function demonstration_user($user) {
        
        return DemonstrationResource::collection(Demonstration::where('user_id', $user)->orderBy('id', 'desc')->get());
    }

    public function filter(Request $request){
       $demonstrations = Demonstration::where('status', '<>', 3);


        if ($request->date  != "") {
            $date = Carbon::createFromFormat('Y-m-d', $request->date);
            $demonstrations->where(function ($query) use ($date) {
                //$query->whereDate('start_date', '<=' , $date)->whereDate('end_date', '>=', $date);
                $query->whereDate('end_date', '>=', $date);
            }); 
        } 
       

        if($request->enter_type != "") {
            $enter_type =  $request->enter_type;
            $demonstrations->where('enter_type', $enter_type);
        }

        if($request->demonstration_niche_id != ""){
            $demonstration_niche = $request->demonstration_niche_id;
            $demonstrations = $demonstrations->with(['demonstrationNiche' => function ($query) use ($demonstration_niche) {
                $query->where('id', $demonstration_niche);
            }])->whereHas('demonstrationNiche', function (Builder $query) use ($demonstration_niche) {
                $query->where('id', $demonstration_niche);
            }); 
        }

        if( $request->demonstration_mode_id != "") {
            $demonstration_mode = $request->demonstration_mode_id;
            $demonstrations = $demonstrations->with(['demonstrationMode' => function ($query) use ($demonstration_mode) {
                $query->where('id', $demonstration_mode);
            }])->whereHas('demonstrationMode', function (Builder $query) use ($demonstration_mode) {
                $query->where('id', $demonstration_mode);
            });
        }

        
        if( $request->demonstration_type_id != "") {
            $demonstration_type = $request->demonstration_type_id;
            $demonstrations = $demonstrations->with(['demonstrationType' => function ($query) use ($demonstration_type) {
                $query->where('id', $demonstration_type);
            }])->whereHas('demonstrationType', function (Builder $query) use ($demonstration_type) {
                $query->where('id', $demonstration_type);
            });
        }

        if ($request->ministry_id  != "") {
            $ministry = $request->ministry_id;
            $demonstrations = $demonstrations->with(['ministry' => function ($query) use ($ministry) {
                $query->where('id', $ministry);
            }])->whereHas('ministry', function (Builder $query) use ($ministry) {
                $query->where('id', $ministry);
            });
        }

        if ($request->activity_area_id  != "") {
            $activityArea = $request->activity_area_id;
            $demonstrations = $demonstrations->with(['activityArea' => function ($query) use ($activityArea) {
                $query->where('id', $activityArea);
            }])->whereHas('activityArea', function (Builder $query) use ($activityArea) {
                $query->where('id', $activityArea);
            });
        }

        if ($request->city_id  != "") {
            $city = $request->city_id;
            $demonstrations = $demonstrations->with(['city' => function ($query) use ($city) {
                $query->where('id', $city);
            }])->whereHas('city', function (Builder $query) use ($city) {
                $query->where('id', $city);
            });
        }

        if ($request->zone_id  != "") {
            $zone = $request->zone_id;
            $demonstrations = $demonstrations->with(['zone' => function ($query) use ($zone) {
                $query->where('id', $zone);
            }])->whereHas('zone', function (Builder $query) use ($zone) {
                $query->where('id', $zone);
            });
        }

        if ($request->continent_id  != "") {
            $continent = $request->continent_id;
            $demonstrations = $demonstrations->with(['continent' => function ($query) use ($continent) {
                $query->where('id', $continent);
            }])->whereHas('continent', function (Builder $query) use ($continent) {
                $query->where('id', $continent);
            });
        }

        if ($request->country_id  != "") {
            $country = $request->country_id;
            $demonstrations = $demonstrations->with(['country' => function ($query) use ($country) {
                $query->where('id', $country);
            }])->whereHas('country', function (Builder $query) use ($country) {
                $query->where('id', $country);
            });
        }

        if ($request->profile  != "") {
            $profile = $request->profile;
            $demonstrations = $demonstrations->with(['user' => function ($query) use ($profile) {
                $query->where('type', $profile);
            }])->whereHas('user', function (Builder $query) use ($profile) {
                $query->where('type', $profile);
            });
        }

        

        return DemonstrationResource::collection($demonstrations->get());
    }

    public function contact(Request $request)
    {
        $fileds = $request->validate([
            'user' => 'required',
            'demonstration' => 'required',
            'content' => 'required|string',
        ]);

        $contactUser = User::find($fileds['user']);
        $demonstration = Demonstration::find($fileds['demonstration']);
        $authorUser = User::find($demonstration->user_id);
        $authorUser->notify(new ContactAnnouncementNotification($demonstration, $contactUser, $fileds['content']));

        $response = [
            'status' => true,
            'message' => 'Contact Send successfully!',
        ];
        return response($response, 201);
    }

    public function demonstration_mark(Demonstration $demonstration) {
        $demonstration->status = $demonstration->status == 3 ? 1 : 3;
        $demonstration->save();
        return new DemonstrationResource($demonstration);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DemonstrationRequest $request)
    {
        $fields = $request->validated();

        if ($request->file('image')) {
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/events/' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            $fields['image'] = $filename;
        }

        $demonstration = Demonstration::create($fields);

        return new DemonstrationResource($demonstration);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Demonstration  $demonstration
     * @return \Illuminate\Http\Response
     */
    public function show(Demonstration $demonstration)
    {
        return new DemonstrationResource($demonstration);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Demonstration  $demonstration
     * @return \Illuminate\Http\Response
     */
    public function update(DemonstrationRequest $request, Demonstration $demonstration)
    {
        $fields = $request->validated();

        if ($request->file('image')) {
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/events/' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            if (File::exists(public_path(substr($demonstration->image, 1, null)))) {
                File::delete(public_path(substr($demonstration->image, 1, null)));
            }
            $fields['image'] = $filename;
        }

        $demonstration->update([
            'title' => $fields['title'],
            'description' => $fields['description'],
            'image' => $request->file('image')? $fields['image'] : $demonstration->image ,
            'hourly' => $fields['hourly'],
            'place_link' => $fields['place_link'],
            'enter_type' => $fields['enter_type'],
            'price' => $fields['price'],
            'phone' => $fields['phone'],
            'email' => $fields['email'],
            'start_date' => $fields['start_date'],
            'end_date' => $fields['end_date'],
            'user_id' => $fields['user_id'],
            'demonstration_type_id' => $fields['demonstration_type_id'],
            'demonstration_mode_id' => $fields['demonstration_mode_id'],
            'demonstration_niche_id' => $fields['demonstration_niche_id'],
            'city_id' => $fields['city_id'],
            'zone_id' => $fields['zone_id'],
            'continent_id' => $fields['continent_id'],
            'country_id' => $fields['country_id'],
            'currency_id' => $fields['currency_id'] == 'null' ? null : $fields['currency_id'],
            'ministry_id' => $fields['ministry_id'] == 'null' ? null : $fields['ministry_id'],
            'activity_area_id' => $fields['activity_area_id'] == 'null' ? null : $fields['activity_area_id']
        ]);

        return new DemonstrationResource($demonstration);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Demonstration  $demonstration
     * @return \Illuminate\Http\Response
     */
    public function destroy($demonstrations)
    {
        $demonstrations = json_decode($demonstrations);
        foreach ($demonstrations as  $demonstration) {
            $demonstration = Demonstration::find($demonstration);
            if (File::exists(public_path(substr($demonstration->image, 1, null)))) {
                File::delete(public_path(substr($demonstration->image, 1, null)));
            }
            $demonstration->delete();
        }

        return response()->noContent();
    }
}

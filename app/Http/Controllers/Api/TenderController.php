<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TenderResource;
use App\Models\Tender;
use Illuminate\Http\Request;
use App\Models\User;
use App\Notifications\ApplyJobNotification;
use App\Notifications\ContactAnnouncementNotification;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\File;

class TenderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TenderResource::collection(Tender::latest()->get());
    }

    public function contact(Request $request)
    {
        $fileds = $request->validate([
            'user' => 'required',
            'tender' => 'required',
            'content' => 'required|string',
        ]);

        $contactUser = User::find($fileds['user']);
        $tender = Tender::find($fileds['tender']);
        $authorUser = User::find($tender->user_id);
        $authorUser->notify(new ContactAnnouncementNotification($tender, $contactUser, $fileds['content']));

        $response = [
            'status' => true,
            'message' => 'Contact Send successfully!',
        ];
        return response($response, 201);
    }

    public function filter(Request $request)
    {
        $tenders = Tender::where('status', '<>', 3);

        if ($request->searchKey != "") {
            $searchKey = $request->searchKey;
            $tenders = $tenders->whereRaw('LOWER(`title`) LIKE ? OR LOWER(`description`) LIKE ?', ['%' . trim(strtolower($searchKey)) . '%', '%' . trim(strtolower($searchKey)) . '%']);
        }

        if ($request->min_price != "") {
            $price = intval($request->min_price);
            $tenders = $tenders->where([
                ['max_price', '>=', $price],
                ['min_price', '<=', $price],
                ]);
        }

        if ($request->work_mode != "") {
            $work_mode = $request->work_mode;
            $tenders = $tenders->with(['work_mode' => function ($query) use ($work_mode) {
                $query->where('id', $work_mode);
            }])->whereHas('work_mode', function (Builder $query) use ($work_mode) {
                $query->where('id', $work_mode);
            });
        }


        if ($request->city != "") {
            $city = $request->city;
            $tenders = $tenders->with(['city' => function ($query) use ($city) {
                $query->where('id', $city);
            }])->whereHas('city', function (Builder $query) use ($city) {
                $query->where('id', $city);
            });
        }

        if ($request->zone != "") {
            $zone = $request->zone;
            $tenders = $tenders->with(['zone' => function ($query) use ($zone) {
                $query->where('id', $zone);
            }])->whereHas('zone', function (Builder $query) use ($zone) {
                $query->where('id', $zone);
            });
        }

        if ($request->continent != "") {
            $continent = $request->continent;
            $tenders = $tenders->with(['continent' => function ($query) use ($continent) {
                $query->where('id', $continent);
            }])->whereHas('continent', function (Builder $query) use ($continent) {
                $query->where('id', $continent);
            });
        }

        if ($request->country != "") {
            $country = $request->country;
            $tenders = $tenders->with(['country' => function ($query) use ($country) {
                $query->where('id', $country);
            }])->whereHas('country', function (Builder $query) use ($country) {
                $query->where('id', $country);
            });
        }

        if ($request->currency != "") {
            $currency = $request->currency;
            $tenders = $tenders->with(['currency' => function ($query) use ($currency) {
                $query->where('id', $currency);
            }])->whereHas('currency', function (Builder $query) use ($currency) {
                $query->where('id', $currency);
            });
        }

        if ($request->activity_area != "") {
            $activity_area = $request->activity_area;
            $tenders = $tenders->whereHas('activity_areas', function (Builder $query) use ($activity_area) {
                $query->where('activity_areas.id', $activity_area);
            });
        }

        if ($request->language != "") {
            $language = $request->language;
            $tenders = $tenders->whereHas('languages', function (Builder $query) use ($language) {
                $query->where('languages.id', $language);
            });
        }

        return TenderResource::collection($tenders->get());
    }

    public function tenders_front()
    {
        $tenders = Tender::join('users', 'user_id', '=', 'users.id')
                        ->where('tenders.status', '<>', 3)
                        ->orderBy('tenders.id', 'desc')
                        ->orderBy('users.type', 'desc')
                        ->select('tenders.*');

        return TenderResource::collection($tenders->paginate(10));
    }


    public function tenders_user($user)
    {
        return TenderResource::collection(Tender::where('user_id', $user)->orderBy('id', 'desc')->get());
    }

    public function tenders_apply(Request $request)
    {
        $request->validate([
            'user' => 'required',
            'job' => 'required',
            'message' => 'required|string',
            'email' => 'required|email',
            'name' => 'string|required',
            'cv' => 'required|mimes:pdf|max:40000'
        ]);

        $job = Tender::find($request->job);
        $applyUser = User::find($request->user);
        $authorUser = User::find($job->user_id);

        $filename = '/uploads/tenders/cv/' . str_replace(" ", "_", $job->title ). '_' . str_replace(" ", "_", $applyUser->firstname) . '_' . time() . '.' . $request->file('cv')->extension();
        $request->file('cv')->storePubliclyAs('public', $filename);

        $data = [
            'name' => $request->name,
            'message' => $request->message,
            'email' => $request->email,
            'cv' => $filename,
        ];

        //$authorUser->notify(new ApplyJobNotification($job, $data));
        $response = [
            'status' => true,
            'message' => 'Apply Send successfully!',
        ];
        return response($response, 201);
    }

    public function store(Request $request)
    {
        $fileds = $request->validate([
            'title' => 'required|string|between:1,50',
            'description' => 'required|string',
            'location' => 'required|string',
            'reference' => 'required|string',
            'company_name' => 'required|string',
            'company_email' => 'required|string|email',
            'company_website' => '',
            'min_price' => 'required|string',
            'max_price' => 'string|required',
            'user_id' => 'integer|required',
            'currency_id' => 'integer|required',
            'work_department_id' => 'integer|required',
            'work_mode_id' => 'integer|required',
            'size_company_id' => 'integer|required',
            'city_id' => 'nullable',
            'zone_id' => 'integer|required',
            'end_date' => 'date|required',
            'continent_id' => 'integer|required',
            'country_id' => 'integer|required',
            'activityAreas' => 'required',
            'languages' => 'required',
        ]);
        $data = [
            'title' => $fileds['title'],
            'description' => $fileds['description'],
            'location' => $fileds['location'],
            'reference' => $fileds['reference'],
            'company_name' => $fileds['company_name'],
            'company_email' => $fileds['company_email'],
            'company_website' => $fileds['company_website'],
            'min_price' => $fileds['min_price'],
            'max_price' => $fileds['max_price'],
            'user_id' => $fileds['user_id'],
            'currency_id' => $fileds['currency_id'],
            'work_department_id' => $fileds['work_department_id'],
            'work_mode_id' => $fileds['work_mode_id'],
            'end_date' => $fileds['end_date'],
            'size_company_id' => $fileds['size_company_id'],
            'city_id' => $fileds['city_id'],
            'zone_id' => $fileds['zone_id'],
            'continent_id' => $fileds['continent_id'],
            'country_id' => $fileds['country_id'],
        ];

        if ($request->file('company_logo')) {
            $request->validate([
                'company_logo' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/tenders/logo/' . time() . '.' . $request->file('company_logo')->extension();
            $request->file('company_logo')->storePubliclyAs('public', $filename);
            $data['company_logo'] = $filename;
        }

        if ($request->file('attachement')) {
            $request->validate([
                'attachement' => 'required|mimes:pdf'
            ]);
            $filename = '/uploads/tenders/attachement/' . time() . '.' . $request->file('attachement')->extension();
            $request->file('attachement')->storePubliclyAs('public', $filename);
            $data['attachement'] = $filename;
        }

        $tender = Tender::create($data);

        $tender->activity_areas()->attach(explode(',', $request->activityAreas));
        $tender->languages()->attach(explode(',', $request->languages));

        return new TenderResource($tender);
    }


    public function show(Tender $tender)
    {
        return new TenderResource($tender);
    }


    public function update(Request $request, Tender $tender)
    {
        $fileds = $request->validate([
            'title' => 'required|string|between:1,50',
            'description' => 'required|string',
            'location' => 'required|string',
            'reference' => 'required|string',
            'company_name' => 'required|string',
            'company_email' => 'required|string',
            'company_website' => '',
            'end_date' => 'date|required',
            'min_price' => 'required|string',
            'max_price' => 'string|required',
            'user_id' => 'integer|required',
            'currency_id' => 'integer|required',
            'work_department_id' => 'integer|required',
            'work_mode_id' => 'integer|required',
            'size_company_id' => 'integer|required',
            'city_id' => 'nullable',
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
            'reference' => $fileds['reference'],
            'company_name' => $fileds['company_name'],
            'company_email' => $fileds['company_email'],
            'company_website' => $fileds['company_website'],
            'min_price' => $fileds['min_price'],
            'max_price' => $fileds['max_price'],
            'user_id' => $fileds['user_id'],
            'currency_id' => $fileds['currency_id'],
            'work_department_id' => $fileds['work_department_id'],
            'work_mode_id' => $fileds['work_mode_id'],
            'size_company_id' => $fileds['size_company_id'],
            'city_id' => $fileds['city_id'] != null && $fileds['city_id'] != 'null'  ? $fileds['city_id']  : NULL,
            'zone_id' => $fileds['zone_id'],
            'continent_id' => $fileds['continent_id'],
            'country_id' => $fileds['country_id'],
            'end_date' => $fileds['end_date'],
        ];

        if ($request->file('company_logo')) {
            $request->validate([
                'company_logo' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/tenders/logo/' . time() . '.' . $request->file('company_logo')->extension();
            $request->file('company_logo')->storePubliclyAs('public', $filename);

            if (File::exists(public_path(substr($tender->company_logo, 1, null)))) {
                File::delete(public_path(substr($tender->company_logo, 1, null)));
            }
            $data['company_logo'] = $filename;
        }

        if ($request->file('attachement')) {
            $request->validate([
                'attachement' => 'required|mimes:pdf'
            ]);
            $filename = '/uploads/tenders/attachement/' . time() . '.' . $request->file('attachement')->extension();
            $request->file('attachement')->storePubliclyAs('public', $filename);

            if (File::exists(public_path(substr($tender->attachement, 1, null)))) {
                File::delete(public_path(substr($tender->attachement, 1, null)));
            }
            $data['attachement'] = $filename;
        }

        $tender->update($data);

        $tender->activity_areas()->sync(explode(",", $request->activityAreas));
        $tender->languages()->sync(explode(",", $request->languages));

        return new TenderResource($tender);
    }


    public function destroy($tenders)
    {
        $tenders = json_decode($tenders);
        foreach ($tenders as  $tender) {
            $tender = Tender::find($tender);
            if (File::exists(public_path(substr($tender->company_logo, 1, null)))) {
                File::delete(public_path(substr($tender->company_logo, 1, null)));
            }
            $tender->delete();
        }

        return response()->noContent();
    }

    public function tenders_mark(Tender $tender)
    {
        $tender->status = $tender->status == 3 ? 1 : 3;
        $tender->save();

        return response()->noContent();
    }
}

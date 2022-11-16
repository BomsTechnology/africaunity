<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UniversityRequest;
use App\Http\Resources\UniversityResource;
use App\Http\Resources\UniversityResource2;
use App\Models\University;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\File;

class UniversityController extends Controller
{

    public function index()
    {
        return UniversityResource::collection(University::orderBy('id', 'desc')->paginate(8));
    }
    public function all()
    {
        return UniversityResource::collection(University::latest()->get());
    }

    public function store(Request $request)
    {
        $fileds = $request->validate([
            'name' => 'required|string|between:1,50',
            'description' => 'required|string',
            'image' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048',
            'continent_id' => 'integer|required',
            'country_id' => 'integer|required',
            'city_id' => 'integer|required',
            'zone_id' => 'integer|required',
        ]);
        $filename = '/uploads/' . time() . '.' . $request->file('image')->extension();
        $request->file('image')->storePubliclyAs('public', $filename);
        $data = [
            'name' => $fileds['name'],
            'description' => $fileds['description'],
            'continent_id' => $fileds['continent_id'],
            'country_id' => $fileds['country_id'],
            'city_id' => $fileds['city_id'],
            'zone_id' => $fileds['zone_id'],
            'image' => $filename
        ];

        $university = University::create($data);

        return new UniversityResource($university);
    }

    public function filter(Request $request)
    {
        $universities = University::query();

        if ($request->searchKey != "") {
            $keywords = $request->searchKey;
            $universities = $universities->whereRaw('LOWER(`name`) LIKE ?', ['%'.trim(strtolower($keywords)).'%']);
        }

        if ($request->country != "") {
            $country = $request->country;
            $universities = $universities->with(['country' => function ($query) use ($country) {
                $query->where('id', $country);
            }])->whereHas('country', function (Builder $query) use ($country) {
                $query->where('id', $country);
            });
        }

        if ($request->continent != "") {
            $continent = $request->continent;
            $universities = $universities->with(['continent' => function ($query) use ($continent) {
                $query->where('id', $continent);
            }])->whereHas('continent', function (Builder $query) use ($continent) {
                $query->where('id', $continent);
            });
        }

        if ($request->city != "") {
            $city = $request->city;
            $universities = $universities->with(['city' => function ($query) use ($city) {
                $query->where('id', $city);
            }])->whereHas('city', function (Builder $query) use ($city) {
                $query->where('id', $city);
            });
        }

        if ($request->zone != "") {
            $zone = $request->zone;
            $universities = $universities->with(['zone' => function ($query) use ($zone) {
                $query->where('id', $zone);
            }])->whereHas('zone', function (Builder $query) use ($zone) {
                $query->where('id', $zone);
            });
        }

        return UniversityResource::collection($universities->get());
    }

    public function show(University $university)
    {
        return new UniversityResource2($university);
    }

    public function show2(University $university)
    {
        return new UniversityResource($university);
    }


    public function update(Request $request, University $university)
    {
        $fileds = $request->validate([
            'name' => 'required|string|between:1,50',
            'description' => 'required|string',
            'continent_id' => 'integer|required',
            'country_id' => 'integer|required',
            'city_id' => 'integer|required',
            'zone_id' => 'integer|required',
        ]);

        $data = [
            'name' => $fileds['name'],
            'description' => $fileds['description'],
            'continent_id' => $fileds['continent_id'],
            'country_id' => $fileds['country_id'],
            'city_id' => $fileds['city_id'],
            'zone_id' => $fileds['zone_id'],
        ];

        if ($request->file('image')) {
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            if (File::exists(public_path(substr($university->image, 1, null)))) {
                File::delete(public_path(substr($university->image, 1, null)));
            }
            $data['image'] = $filename;
        }

        $university->update($data);

        return new UniversityResource($university);
    }


    public function destroy($universities)
    {
        $universities = json_decode($universities);
        foreach ($universities as  $university) {
            $university = University::find($university);
            if (File::exists(public_path(substr($university->image, 1, null)))) {
                File::delete(public_path(substr($university->image, 1, null)));
            }
            $university->delete();
        }
        return response()->noContent();
    }
}

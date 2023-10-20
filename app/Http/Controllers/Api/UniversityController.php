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

    public function index(Request $request, string $type)
    {
        return UniversityResource::collection(University::where('type', $type)->orderBy('id', 'desc')->paginate(6));
    }
    public function all(Request $request, string $type)
    {
        return UniversityResource::collection(University::where('type', $type)->orderBy('id', 'desc')->get());
    }

    public function store(Request $request)
    {
        $fileds = $request->validate([
            'name' => 'required|string|between:1,50',
            'description' => 'required|string',
            'image' => 'required|mimes:png,jpg,jpeg,gif,webp|dimensions:max_width=2048,max_height=2048',
            'continent_id' => 'integer|required',
            'country_id' => 'integer|required',
            'city_id' => 'integer|required',
            'zone_id' => 'integer|required',
            'legal_status_id'  => 'integer|required',
            'level_study_id'  => 'integer|required',
            'university_sector_id'  => 'integer|required',
            'schooling_type_id'  => 'integer|required',
            'required_level'  => 'integer|required',
            'registration_period'  => 'required|string',
            "firstday_university"  => 'required|string',
            "type"  => 'required|string',
        ]);
       $filename = '/uploads/university/' . time() . '.' . $request->file('image')->extension();
       $request->file('image')->storePubliclyAs('public', $filename);
       //$filename = time() . '.' . $request->image->extension();
       //$path = $request->image->storeAs('images/university', $filename, 'public');
        
        $data = [
            'name' => $fileds['name'],
            'description' => $fileds['description'],
            'continent_id' => $fileds['continent_id'],
            'country_id' => $fileds['country_id'],
            'city_id' => $fileds['city_id'],
            'zone_id' => $fileds['zone_id'],
            'legal_status_id' => $fileds['legal_status_id'],
            'level_study_id' => $fileds['level_study_id'],
            'university_sector_id' => $fileds['university_sector_id'],
            'schooling_type_id' => $fileds['schooling_type_id'],
            'required_level' => $fileds['required_level'],
            'registration_period' => $fileds['registration_period'],
            'firstday_university' => $fileds['firstday_university'],
            'type' => $fileds['type'],
            'image' => $filename
        ];

        $university = University::create($data);

        return new UniversityResource($university);
    }

    public function filter(Request $request)
    {
        $universities = University::where('type', $request->type);

        if ($request->searchKey != "") {
            $keywords = $request->searchKey;
            $universities = $universities->whereRaw('LOWER(`name`) LIKE ?', ['%'.trim(strtolower($keywords)).'%']);
        }

        if ($request->registration_period != "") {
            $registration_period = $request->registration_period;
            $universities = $universities->whereRaw('registration_period', $registration_period);
        }

        if ($request->firstday_university != "") {
            $firstday_university = $request->firstday_university;
            $universities = $universities->where('firstday_university', $firstday_university);
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

        if ($request->required_level != "") {
            $required_level = $request->required_level;
            $universities = $universities->with(['requiredLevel' => function ($query) use ($required_level) {
                $query->where('id', $required_level);
            }])->whereHas('requiredLevel', function (Builder $query) use ($required_level) {
                $query->where('id', $required_level);
            });
        }

        if ($request->legal_status != "") {
            $legal_status = $request->legal_status;
            $universities = $universities->with(['legalStatus' => function ($query) use ($legal_status) {
                $query->where('id', $legal_status);
            }])->whereHas('legalStatus', function (Builder $query) use ($legal_status) {
                $query->where('id', $legal_status);
            });
        }

        if ($request->level_study != "") {
            $level_study = $request->level_study;
            $universities = $universities->with(['levelStudy' => function ($query) use ($level_study) {
                $query->where('id', $level_study);
            }])->whereHas('levelStudy', function (Builder $query) use ($level_study) {
                $query->where('id', $level_study);
            });
        }

        if ($request->university_sector != "") {
            $university_sector = $request->university_sector;
            $universities = $universities->with(['universitySector' => function ($query) use ($university_sector) {
                $query->where('id', $university_sector);
            }])->whereHas('universitySector', function (Builder $query) use ($university_sector) {
                $query->where('id', $university_sector);
            });
        }

        if ($request->schooling_type != "") {
            $schooling_type = $request->schooling_type;
            $universities = $universities->with(['schoolingType' => function ($query) use ($schooling_type) {
                $query->where('id', $schooling_type);
            }])->whereHas('schoolingType', function (Builder $query) use ($schooling_type) {
                $query->where('id', $schooling_type);
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
            'legal_status_id'  => 'integer|required',
            'level_study_id'  => 'integer|required',
            'university_sector_id'  => 'integer|required',
            'schooling_type_id'  => 'integer|required',
            'required_level'  => 'integer|required',
            'registration_period'  => 'required|string',
            "firstday_university"  => 'required|string',
        ]);

        $data = [
            'name' => $fileds['name'],
            'description' => $fileds['description'],
            'continent_id' => $fileds['continent_id'],
            'country_id' => $fileds['country_id'],
            'city_id' => $fileds['city_id'],
            'zone_id' => $fileds['zone_id'],
            'legal_status_id' => $fileds['legal_status_id'],
            'level_study_id' => $fileds['level_study_id'],
            'university_sector_id' => $fileds['university_sector_id'],
            'schooling_type_id' => $fileds['schooling_type_id'],
            'required_level' => $fileds['required_level'],
            'registration_period' => $fileds['registration_period'],
            'firstday_university' => $fileds['firstday_university'],
        ];

        if ($request->file('image')) {
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeg,gif,webp|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/university/' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
           //$filename = time() . '.' . $request->image->extension();
           //$path = $request->image->storeAs('images/university', $filename, 'public');
            
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

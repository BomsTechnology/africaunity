<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserResource2;
use App\Models\Announcement;
use App\Models\Detail;
use App\Models\JobOffer;
use App\Models\Post;
use App\Models\Status;
use App\Models\User;
use App\Notifications\DeleteAccountNotification;
use App\Notifications\DesactivationAccountNotification;
use App\Notifications\ReportNotification;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserResource2::collection(User::latest()->get());
    }

    public function usersType($type)
    {
        if ($type == 'business') {
            $users = User::where('status', '<>', 3)->where(function ($query) {
                $query->where('type', 'business1')->orWhere('type', 'business2');
            });
        } else {
            $users = User::where([
                ['type', $type],
                ['status', '<>', 3]
            ]);
        }
        return UserResource2::collection($users->orderBy('id', 'desc')->orderBy('avatar', 'desc')->paginate(9));
    }

    public function filterByWords(Request $request, string $searchKey)
    {
        return UserResource2::collection(
            User::where('status', '<>', 3)
            ->whereRaw('LOWER(`firstname`) LIKE ?', ['%' . trim(strtolower($searchKey)) . '%'])
            ->orWhereRaw('LOWER(`lastname`) LIKE ?', ['%' . trim(strtolower($searchKey)) . '%'])
            ->orWhereRaw('LOWER(`email`) LIKE ?', ['%' . trim(strtolower($searchKey)) . '%'])
            ->get());
    }

    public function filter(Request $request)
    {

        if ($request->type == 'business') {
            $users = User::where('status', '<>', 3)->where(function ($query) {
                $query->where('type', 'business1')->orWhere('type', 'business2');
            });
        } else {
            $users = User::where([
                ['type', $request->type],
                ['status', '<>', 3]
            ]);
        }

        if ($request->searchKey != "") {
            $searchKey = $request->searchKey;
            $users =  $users->whereRaw('LOWER(`firstname`) LIKE ?', ['%' . trim(strtolower($searchKey)) . '%']);
        }

        if ($request->email != "") {
            $email = $request->email;
            $users = $users->where('email', 'like', "%$email%");
        }

        if ($request->status != "") {
            $status = $request->status;
            $users = $users->with(['detail' => function ($query) use ($status) {
                $query->where('status_id', $status);
            }])->whereHas('detail', function (Builder $query) use ($status) {
                $query->where('status_id', $status);
            });
        }

        if ($request->native_country != "") {
            $native_country = $request->native_country;
            $users = $users->with(['detail' => function ($query) use ($native_country) {
                $query->where('native_country', $native_country);
            }])->whereHas('detail', function (Builder $query) use ($native_country) {
                $query->where('native_country', $native_country);
            });
        }

        if ($request->residence_country != "") {
            $residence_country = $request->residence_country;
            $users = $users->with(['detail' => function ($query) use ($residence_country) {
                $query->where('residence_country', $residence_country);
            }])->whereHas('detail', function (Builder $query) use ($residence_country) {
                $query->where('residence_country', $residence_country);
            });
        }

        if ($request->activity_area != "") {
            $activity_area = $request->activity_area;
            $users = $users->whereHas('detail', function (Builder $query) use ($activity_area) {
                $query->whereHas('activity_areas', function (Builder $query) use ($activity_area) {
                    $query->where('activity_areas.id', $activity_area);
                });
            });
        }

        if ($request->language != "") {
            $language = $request->language;
            $users = $users->whereHas('detail', function (Builder $query) use ($language) {
                $query->whereHas('languages', function (Builder $query) use ($language) {
                    $query->where('languages.id', $language);
                });
            });
        }

        if ($request->business_size != "") {
            $business_size = $request->business_size;
            $users = $users->with(['detail' => function ($query) use ($business_size) {
                $query->where('business_size_id', $business_size);
            }])->whereHas('detail', function (Builder $query) use ($business_size) {
                $query->where('business_size_id', $business_size);
            });
        }

        if ($request->business_type != "") {
            $business_type = $request->business_type;
            $users = $users->with(['detail' => function ($query) use ($business_type) {
                $query->where('business_type_id', $business_type);
            }])->whereHas('detail', function (Builder $query) use ($business_type) {
                $query->where('business_type_id', $business_type);
            });
        }

        return UserResource2::collection($users->get());
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'nullable|string',
            'type' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|confirmed'
        ]);

        $user = User::create([
            'firstname' => $fields['firstname'],
            'lastname' => $fields['lastname'],
            'type' => $fields['type'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password']),
        ]);
        $status = Status::query()->orderBy('id', 'asc')->first();
        Detail::create([
            'user_id' => $user->id,
            'status_id' => $status->id
        ]);

        $user->markEmailAsVerified();

        return new UserResource($user);
    }

    public function deleteData(Request $request)
    {
        $fileds = $request->validate([
            'user' => 'required|integer',
            'password' => 'required|string'
        ]);

        $user = User::find($fileds['user']);

        if (!$user || !Hash::check($fileds['password'], $user->password)) {
            return response(['status' => false, 'message' => 'Your password is invalid'], 401);
        }

        Post::where('user_id', $user->id)->delete();
        JobOffer::where('user_id', $user->id)->delete();
        Announcement::where('user_id', $user->id)->delete();

        $response = [
            'status' => true,
            'message' => 'Data delete successfully!',
        ];
        return response($response, 201);
    }

    public function deleteUser(Request $request)
    {
        $fileds = $request->validate([
            'user' => 'required|integer',
            'type' => 'required|integer|between:1,2',
            'password' => 'required|string'
        ]);

        $user = User::find($fileds['user']);

        if (!$user || !Hash::check($fileds['password'], $user->password)) {
            return response(['status' => false, 'message' => 'Your password is invalid'], 401);
        }

        if ($fileds['type'] == 1) {
            $user->status = 3;
            $user->save();
            $user->notify(new DesactivationAccountNotification());
        } else {
            $user->notify(new DeleteAccountNotification());
            $user->delete();
        }

        $response = [
            'status' => true,
            'message' => 'Account delete successfully!',
        ];
        return response($response, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */

    public function changePassword(Request $request, User $user)
    {
        $fileds = $request->validate([
            'old_password' => 'required|string',
            'password' => 'required|confirmed'
        ]);

        if (!$user || !Hash::check($fileds['old_password'], $user->password)) {
            return response(['status' => false, 'message' => 'Your old password is invalid'], 401);
        }

        $user->password = Hash::make($fileds['password']);
        $user->save();

        $response = [
            'status' => true,
            'message' => 'password update successfully!',
        ];
        return response($response, 201);
    }

    public function changeStatus(Request $request, User $user)
    {
        $fileds = $request->validate([
            'status' => 'required|integer|between:1,3',
        ]);

        $user->status = $fileds['status'];
        $user->save();

        return new UserResource($user);
    }

    public function update2(Request $request, User $user)
    {
        $fileds = $request->validate([
            'firstname' => 'required|string',
            'lastname' => '',
            'type' => 'required|string',
            'email' => 'required|string|email',
        ]);
        $data = [
            'firstname' => $fileds['firstname'],
            'lastname' => $fileds['lastname'],
            'type' => $fileds['type'],
            'email' => $fileds['email'],
        ];

        if ($user->email != $fileds['email']) {
            $e = $request->validate([
                'email' => 'unique:users,email'
            ]);
            $data['email'] = $e;
        }

        if ($request->password) {
            $user->password = Hash::make($request->password);
        }

        $user->update($data);

        return new UserResource2($user);
    }

    public function update(Request $request, User $user)
    {
        $fileds = $request->validate([
            'firstname' => 'required|string',
            'lastname' => '',
            'email' => 'required|string|email',
        ]);
        $data = [
            'firstname' => $fileds['firstname'],
            'lastname' => $fileds['lastname'],
            'email' => $fileds['email'],
        ];

        if ($user->email != $fileds['email']) {
            $e = $request->validate([
                'email' => 'unique:users,email'
            ]);
            $data['email'] = $e;
        }

        if ($request->file('avatar')) {
            $request->validate([
                'avatar' => 'required|mimes:png,jpg,jpeg,gif,webp|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/user/avatar/' . time() . '.' . $request->file('avatar')->extension();
            $request->file('avatar')->storePubliclyAs('public', $filename);
            //$filename = time() . '.' . $request->avatar->extension();
            //$path = $request->image->storeAs('images/users', $filename, 'public');

            if (File::exists(public_path(substr($user->avatar, 1, null)))) {
                File::delete(public_path(substr($user->avatar, 1, null)));
            }
            $data['avatar'] = $filename;
        }

        if ($request->file('cover')) {
            $request->validate([
                'cover' => 'required|mimes:png,jpg,jpeg,gif,webp|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/users/cover/' . time() . '.' . $request->file('cover')->extension();
            $request->file('cover')->storePubliclyAs('public', $filename);
            //$filename = time() . '.' . $request->cover->extension();
            //$path = $request->image->storeAs('images/users', $filename, 'public');
            if (File::exists(public_path(substr($user->cover, 1, null)))) {
                File::delete(public_path(substr($user->cover, 1, null)));
            }
            $data['cover'] = $filename;
        }

        $user->update($data);

        return new UserResource2($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($users)
    {
        $users = json_decode($users);
        foreach ($users as  $user) {
            $user = User::find($user);
            Post::where('user_id', $user->id)->delete();
            JobOffer::where('user_id', $user->id)->delete();
            Announcement::where('user_id', $user->id)->delete();
            if (File::exists(public_path(substr($user->avatar, 1, null)))) {
                File::delete(public_path(substr($user->avatar, 1, null)));
            }
            $user->delete();
        }

        return response()->noContent();
    }
}

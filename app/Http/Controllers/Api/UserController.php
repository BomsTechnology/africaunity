<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Announcement;
use App\Models\JobOffer;
use App\Models\Post;
use App\Models\User;
use App\Notifications\DeleteAccountNotification;
use App\Notifications\DesactivationAccountNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
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

    public function deleteData(Request $request)
    {
        $fileds = $request->validate([
            'user' => 'required|integer',
            'password' =>'required|string'
        ]);

        $user = User::find($fileds['user']);

        if(!$user || !Hash::check($fileds['password'],$user->password)){
            return response(['status'=>false,'message'=>'Your password is invalid'],401);
        }

        Post::where('user_id', $user->id)->delete();
        JobOffer::where('user_id', $user->id)->delete();
        Announcement::where('user_id', $user->id)->delete();

        $response = [
            'status'=>true,
            'message'=>'Data delete successfully!',
        ];
        return response($response,201);
    }

    public function deleteUser(Request $request)
    {
        $fileds = $request->validate([
            'user' => 'required|integer',
            'type' => 'required|integer|between:1,2',
            'password' =>'required|string'
        ]);

        $user = User::find($fileds['user']);

        if(!$user || !Hash::check($fileds['password'],$user->password)){
            return response(['status'=>false,'message'=>'Your password is invalid'],401);
        }

        if($fileds['type'] == 1){
            $user->status = 3;
            $user->save();
            $user->notify(new DesactivationAccountNotification());
        }else{
            $user->notify(new DeleteAccountNotification());
            $user->delete();
        }

        $response = [
            'status'=>true,
            'message'=>'Account delete successfully!',
        ];
        return response($response,201);
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
            'password' =>'required|confirmed'
        ]);

        if(!$user || !Hash::check($fileds['old_password'],$user->password)){
            return response(['status'=>false,'message'=>'Your old password is invalid'],401);
        }

        $user->password = Hash::make($fileds['password']);
        $user->save();

        $response = [
            'status'=>true,
            'message'=>'password update successfully!',
        ];
        return response($response,201);
    }

    public function changeStatus(Request $request, User $user)
    {
        $fileds = $request->validate([
            'status' => 'required|integer|between:1,2',
        ]);

        $user->status = $fileds['status'];
        $user->save();

        return new UserResource($user);
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

        if($user->email != $fileds['email']){
            $e = $request->validate([
                'email' => 'unique:users,email'
            ]);
            $data['email'] = $e;
        }

        if($request->file('avatar')){
            $request->validate([
                'avatar' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('avatar')->extension();
            $request->file('avatar')->storePubliclyAs('public', $filename);
            $data['avatar'] = $filename;
        }

        if($request->file('cover')){
            $request->validate([
                'cover' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('cover')->extension();
            $request->file('cover')->storePubliclyAs('public', $filename);
            $data['cover'] = $filename;
        }

        $user->update($data);
        
        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FollowerRequest;
use App\Http\Resources\FollowerResource;
use App\Http\Resources\UserResource2;
use App\Models\Follower;
use App\Models\User;
use Illuminate\Http\Request;

class FollowerController extends Controller
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
    public function store(FollowerRequest $request)
    {

        Follower::create($request->validated());
        $user = User::find($request->subscriber);
        return new UserResource2($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Follower  $follower
     * @return \Illuminate\Http\Response
     */
    public function show(Follower $follower)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Follower  $follower
     * @return \Illuminate\Http\Response
     */
    public function update(FollowerRequest $request, Follower $follower)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Follower  $follower
     * @return \Illuminate\Http\Response
     */
    public function destroy(Follower $follower)
    {
        $user = User::find($follower->subscriber);
        $follower->delete();

        return new UserResource2($user);
    }
}

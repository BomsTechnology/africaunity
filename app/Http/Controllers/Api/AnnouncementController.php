<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AnnouncementResource;
use App\Http\Resources\AnnouncementResource2;
use App\Models\Announcement;
use App\Models\User;
use App\Notifications\ContactAnnouncementNotification;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AnnouncementResource::collection(Announcement::latest()->get());
    }

    public function announcements_user($user)
    {
        return AnnouncementResource::collection(Announcement::where('user_id',$user)->orderBy('id', 'desc')->get());
    }

    public function announcements_university($university)
    {
        return AnnouncementResource::collection(Announcement::where('university_id',$university)->orderBy('id', 'desc')->get());
    }

    public function contact(Request $request)
    {
        $fileds = $request->validate([
            'user' => 'required',
            'ads' => 'required',
            'content' => 'required|string',
        ]);

        $contactUser = User::find($fileds['user']);
        $announcement = Announcement::find($fileds['ads']);
        $authorUser = User::find($announcement->user_id);
        $authorUser->notify(new ContactAnnouncementNotification($announcement, $contactUser, $fileds['content']));

        $response = [
            'status'=>true,
            'message'=>'Contact Send successfully!',
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
            'adress' => '',
            'phone' => 'integer|string',
            'email' => 'required|string',
            'website' => '',
            'price' => '',
            'user_id' => 'integer|required',
            'currency_id' => '',
            'category_announcement_id' => 'integer|required',
            'university_id' => 'integer|required',
        ]);
        $data = [
            'title' => $fileds['title'],
            'description' => $fileds['description'],
            'adress' => $fileds['adress'],
            'phone' => $fileds['phone'],
            'website' => $fileds['website'],
            'price' => $fileds['price'],
            'user_id' => $fileds['user_id'],
            'currency_id' => $fileds['currency_id'],
            'category_announcement_id' => $fileds['category_announcement_id'],
            'university_id' => $fileds['university_id'],
            'email' => $fileds['email'],
        ];

        if($request->file('image')){
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            $data['image'] = $filename;
        }
        
        $announcement = Announcement::create($data);
    
        return new AnnouncementResource($announcement);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function show(Announcement $announcement)
    {
        return new AnnouncementResource2($announcement);
    }

    public function show2(Announcement $announcement)
    {
        return new AnnouncementResource($announcement);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Announcement $announcement)
    {
        $fileds = $request->validate([
            'title' => 'required|string|between:1,50',
            'description' => 'required|string',
            'adress' => '',
            'phone' => 'required|string',
            'email' => 'required|string',
            'website' => '',
            'user_id' => 'integer|required',
            'category_announcement_id' => 'integer|required',
            'university_id' => 'integer|required',
        ]);
        $data = [
            'title' => $fileds['title'],
            'description' => $fileds['description'],
            'adress' => $fileds['adress'],
            'phone' => $fileds['phone'],
            'website' => $fileds['website'],
            'user_id' => $fileds['user_id'],
            'category_announcement_id' => $fileds['category_announcement_id'],
            'university_id' => $fileds['university_id'],
            'email' => $fileds['email'],
        ];

        if($request->has('currency_id') && $request->currency_id != 'null'){
            $fileds = $request->validate([
                'currency_id' => 'integer|required'
            ]);
            $data['currency_id'] = $fileds['currency_id'];
        }

        if($request->has('price') && $request->price != 'null'){
            $fileds = $request->validate([
                'price' => 'integer|required'
            ]);
            $data['price'] = $fileds['price'];
        }

        if($request->file('image')){
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            $data['image'] = $filename;
        }

        $announcement->update($data);
        
        return new AnnouncementResource($announcement);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function destroy(Announcement $announcement)
    {
        $announcement->delete();

        return response()->noContent();
    }
}

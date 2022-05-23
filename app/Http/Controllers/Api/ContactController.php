<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\ContactNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;


class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
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
            'name' => 'required|string',
            'email' => 'required|email',
            'about' => 'required|integer',
            'city' => '',
            'content' => 'required|string',
        ]);

        switch ($fields['about']) {
            case 1:
                $about = 'Invitation to a conference';
                break;
            case 2:
                $about = 'Commercial proposition';
                break;
            case 3:
                $about = 'Proposition of collaboration';
                break;
            case 4:
                $about = 'Propose a university';
                break;
            case 5:
                $about = 'Others';
                break;
        }

        $data = [
            'name' => $fields['name'],
            'email' => $fields['email'],
            'about' => $about,
            'city' => $fields['city'],
            'content' => $fields['content'],
        ];

        // $admins = User::where('type', 'admin')->get();

        // foreach($admins as $admin){
        //     $admin->notify(new ContactNotification($data));
        // }

        Notification::route('mail', 'contact@africaunity.net')->notify(new ContactNotification($data));

        $response = [
            'status' => true,
            'message' => 'Contact Send successfully!',
        ];
        return response($response, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

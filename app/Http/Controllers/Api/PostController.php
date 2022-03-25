<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Http\Resources\PostResource2;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($type)
    {
        return PostResource::collection(Post::where('type',$type)->orderBy('id', 'desc')->get());
    }

    public function post_type($type, $lang)
    {
        return PostResource::collection(Post::where([
            ['type',$type],
            ['language',$lang]
            ])->orderBy('id', 'desc')->get());
    }

    public function post_user($user)
    {
        return PostResource::collection(Post::where('user_id',$user)->orderBy('id', 'desc')->get());
    }

    public function post_caroussel($lang)
    {
        return PostResource::collection(Post::where([
            ['type','article'],
            ['language',$lang]
            ])->orderBy('id', 'desc')->limit(4)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->type == 'propau'){
            $fileds = $request->validate([
                'title' => 'required|string|between:1,50',
                'content' => 'required|string',
                'type' => 'required|string',
                'language' => 'required|string',
                'user_id' => 'integer|required',
                'continent_id' => 'integer|required',
                'zone_id' => 'integer|required',
                'country_id' => 'integer|required',
                'ministry_id' => 'integer|required',
            ]);

            $data = [
                'title' => $fileds['title'],
                    'content' => $fileds['content'],
                    'type' => $fileds['type'],
                    'language' => $fileds['language'],
                    'user_id' => $fileds['user_id'],
                    'continent_id' => $fileds['continent_id'],
                    'zone_id' => $fileds['zone_id'],
                    'country_id' => $fileds['country_id'],
                    'ministry_id' => $fileds['ministry_id'],
                    'image' => ''
            ];
        }else{
            $fileds = $request->validate([
                'title' => 'required|string|between:1,50',
                'content' => 'required|string',
                'type' => 'required|string',
                'language' => 'required|string',
                'user_id' => 'integer|required',
                'continent_id' => 'integer|required',
                'zone_id' => 'integer|required',
                'country_id' => 'integer|required',
                'ministry_id' => 'integer|required',
                'image' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            $data = [
                'title' => $fileds['title'],
                    'content' => $fileds['content'],
                    'type' => $fileds['type'],
                    'language' => $fileds['language'],
                    'user_id' => $fileds['user_id'],
                    'continent_id' => $fileds['continent_id'],
                    'zone_id' => $fileds['zone_id'],
                    'country_id' => $fileds['country_id'],
                    'ministry_id' => $fileds['ministry_id'],
                    'image' => $filename
            ];
        }      
        $post = Post::create($data);
       
        return new PostResource($post);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return new PostResource2($post);
    }

    public function show2(Post $post)
    {
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        
        $fileds = $request->validate([
            'title' => 'required|string|between:1,50',
            'content' => 'required|string',
            'type' => 'required|string',
            'language' => 'required|string',
            'user_id' => 'integer|required',
            'continent_id' => 'integer|required',
            'zone_id' => 'integer|required',
            'country_id' => 'integer|required',
            'ministry_id' => 'integer|required',
        ]);
        $data = [
                'title' => $fileds['title'],
                'content' => $fileds['content'],
                'type' => $fileds['type'],
                'language' => $fileds['language'],
                'user_id' => $fileds['user_id'],
                'continent_id' => $fileds['continent_id'],
                'zone_id' => $fileds['zone_id'],
                'country_id' => $fileds['country_id'],
                'ministry_id' => $fileds['ministry_id'],
        ];

        if($request->file('image')){
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            $data['image'] = $filename;
        }

        $post->update($data);
        
        return new PostResource($post);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return response()->noContent();
    }
}

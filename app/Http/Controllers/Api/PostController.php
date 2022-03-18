<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PostResource::collection(Post::all());
    }

    public function post_type($type)
    {
        return PostResource::collection(Post::where('type',$type)->get());
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
            'title' => 'required|string|between:10,50',
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
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, Post $post)
    {
        $post->update($request->validated());
        
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

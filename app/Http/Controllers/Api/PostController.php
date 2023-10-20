<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Http\Resources\PostResource2;
use App\Http\Resources\PostSharedResource;
use App\Models\Post;
use App\Models\User;
use App\Notifications\ReportNotification;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($type)
    {
        return PostResource::collection(Post::where('type', $type)->orderBy('id', 'desc')->get());
    }

    public function post_type($type, $lang)
    {
        $posts = Post::join('users', 'user_id', '=', 'users.id')
                        ->where([
                            ['posts.status', 1],
                            ['posts.type', $type],
                            ['posts.language', $lang]
                        ])
                        ->orderBy('posts.id', 'desc')
                        ->orderBy('users.type', 'desc')
                        ->orderBy('users.type', 'desc')
                        ->select('posts.*');

        return PostResource::collection($posts->paginate(8));
    }

    public function filter(Request $request)
    {
        $posts = Post::where([
            ['status', 1],
            ['type', $request->type],
            ['language', $request->lang]
        ]);

        if ($request->keywords != "") {
            $keywords = $request->keywords;
            $posts = $posts->whereRaw('LOWER(`title`) LIKE ? OR LOWER(`content`) LIKE ?', ['%' . trim(strtolower($keywords)) . '%', '%' . trim(strtolower($keywords)) . '%']);
        }

        if ($request->zone != "") {
            $zone = $request->zone;
            $posts = $posts->with(['zone' => function ($query) use ($zone) {
                $query->where('id', $zone);
            }])->whereHas('zone', function (Builder $query) use ($zone) {
                $query->where('id', $zone);
            });
        }

        if ($request->ministry != "") {
            $ministry = $request->ministry;
            $posts = $posts->whereHas('ministries', function (Builder $query) use ($ministry) {
                $query->where('ministries.id', $ministry);
            });
        }

        if ($request->continent != "") {
            $continent = $request->continent;
            $posts = $posts->with(['continent' => function ($query) use ($continent) {
                $query->where('id', $continent);
            }])->whereHas('continent', function (Builder $query) use ($continent) {
                $query->where('id', $continent);
            });
        }

        if ($request->country != "") {
            $country = $request->country;
            $posts = $posts->with(['country' => function ($query) use ($country) {
                $query->where('id', $country);
            }])->whereHas('country', function (Builder $query) use ($country) {
                $query->where('id', $country);
            });
        }

        return PostResource::collection($posts->orderBy('id', 'desc')->get());
    }

   /* public function post_report(Request $request)
    {
        $request->validate([
            'user' => 'required',
            'reported' => 'required',
            'content' => 'required|string',
        ]);

        $admins = User::where('type', 'admin')->get();

        $post = Post::find($request->reported);
        $url = "/post/$post->id";

        $userReport = User::find($request->user);

        foreach ($admins as $admin) {
            $admin->notify(new ReportNotification($url, $userReport, $request->content));
        }

        $response = [
            'status' => true,
            'message' => 'Report Send successfully!',
        ];
        return response($response, 201);
    }*/

    public function post_user($user)
    {
        return PostResource::collection(Post::where('user_id', $user)->orderBy('id', 'desc')->get());
    }

    public function post_date($date)
    {
        return PostResource::collection(Post::whereDate('created_at', $date)->orderBy('id', 'desc')->get());
    }

    public function post_caroussel($lang)
    {
        return PostResource::collection(Post::where([
            ['status', 1],
            ['type', 'article'],
            ['language', $lang]
        ])->orderBy('id', 'desc')->limit(4)->get());
    }

    public function post_home($lang, $ministry)
    {
        return PostResource::collection(Post::where([
            ['status', 1],
            ['type', 'article'],
            ['language', $lang],
            ['ministry_id', $ministry],
        ])->orderBy('id', 'desc')->limit(5)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if ($request->type == 'propau') {
            $fileds = $request->validate([
                'title' => 'required|string|between:1,50',
                'content' => 'required|string|between:1,1000',
                'type' => 'required|string',
                'language' => 'required|string',
                'user_id' => 'integer|required',
                'continent_id' => 'integer|required',
                'zone_id' => 'integer|required',
                'country_id' => 'integer|required',
                'city_id' => 'nullable',
                'ministries' => 'required',
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
                'city_id' => $fileds['city_id'],
                'image' => ''
            ];
        } else {

            $fileds = $request->validate([
                'title' => 'required|string|between:1,50',
                'content' => 'required|string',
                'type' => 'required|string',
                'language' => 'required|string',
                'user_id' => 'integer|required',
                'continent_id' => 'integer|required',
                'zone_id' => 'integer|required',
                'country_id' => 'integer|required',
                'ministries' => 'required',
                'city_id' => 'nullable',
                'image' => 'required|mimes:png,jpg,jpeg,gif,webp|dimensions:min_width=100,min_height=200'
            ]);
             $filename = '/uploads/posts/' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            //$filename = time() . '.' . $request->image->extension();
            //$path = $request->image->storeAs('images/posts', $filename, 'public');

            $data = [
                'title' => $fileds['title'],
                'content' => $fileds['content'],
                'type' => $fileds['type'],
                'language' => $fileds['language'],
                'user_id' => $fileds['user_id'],
                'continent_id' => $fileds['continent_id'],
                'zone_id' => $fileds['zone_id'],
                'country_id' => $fileds['country_id'],
                'city_id' => $fileds['city_id'],
                'image' => $filename
            ];
        }

        $post = Post::create($data);
        $post->ministries()->toggle(explode(",",$request->ministries));

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

    public function show2(Post $post)
    {
        return new PostResource($post);
    }

    //Shared post to not authenficated users

    public function post_shared(Post $post)
    {
        return new PostSharedResource($post);
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
            'ministries' => 'required',
            'city_id' => 'nullable',
        ]);
        $data = [
            'title' => $fileds['title'],
            'content' => $fileds['content'],
            'type' => $fileds['type'],
            'language' => $fileds['language'],
            'user_id' => $fileds['user_id'],
            'continent_id' => $fileds['continent_id'],
            'zone_id' => $fileds['zone_id'],
            'city_id' => $fileds['city_id'] != null && $fileds['city_id'] != 'null'  ? $fileds['city_id']  : NULL,
            'country_id' => $fileds['country_id'],
        ];
        if ($request->file('image')) {
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeg,gif,webp|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/posts/' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            //$filename = time() . '.' . $request->image->extension();
            //$path = $request->image->storeAs('images/posts', $filename, 'public');
            
            if (File::exists(public_path(substr($post->image, 1, null)))) {
                File::delete(public_path(substr($post->image, 1, null)));
            }
            $data['image'] = $filename;
        }

        $post->update($data);
        $post->ministries()->sync(explode(",",$request->ministries));

        return new PostResource($post);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy($posts)
    {
        $posts = json_decode($posts);
        foreach ($posts as  $post) {
            $post = Post::find($post);
            if (File::exists(public_path(substr($post->image, 1, null)))) {
                File::delete(public_path(substr($post->image, 1, null)));
            }
            $post->delete();
        }
        return response()->noContent();
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PersonalPostRequest;
use App\Http\Resources\PersonalPostResource;
use App\Models\PersonalPost;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;

class PersonalPostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PersonalPostResource::collection(PersonalPost::where([
            ['status', 1],
        ])->orderBy('id', 'desc')->paginate(8));
    }

    public function all()
    {
        return PersonalPostResource::collection(PersonalPost::latest('id', 'desc')->get());
    }

    public function post_user($user)
    {
        return PersonalPostResource::collection(PersonalPost::where('user_id', $user)->orderBy('id', 'desc')->get());
    }

    public function post_lang($lang)
    {
        return PersonalPostResource::collection(PersonalPost::where('language', $lang)->orderBy('id', 'desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PersonalPostRequest $request)
    {
        $fileds = $request->validated();
        $filename = '/uploads/personalPost/' . time() . '.' . $request->file('image')->extension();
        $request->file('image')->storePubliclyAs('public', $filename);
        
        //$filename = time() . '.' . $request->image->extension();
        //$path = $request->image->storeAs('images/personalPost', $filename, 'public');
         
        $data = [
            'title' => $fileds['title'],
            'content' => $fileds['content'],
            'subtheme' => $fileds['subtheme'],
            'language' => $fileds['language'],
            'user_id' => $fileds['user_id'],
            'category_personal_post_id' => $fileds['category_personal_post_id'],
            'image' => $filename
        ];

        $personalPost = PersonalPost::create($data);

        return new PersonalPostResource($personalPost);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PersonalPost  $personalPost
     * @return \Illuminate\Http\Response
     */
    public function show(PersonalPost $personalPost)
    {
        return new PersonalPostResource($personalPost);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PersonalPost  $personalPost
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PersonalPost $personalPost)
    {
        $fileds = $request->validate([
            'title' => 'required|string|between:1,50',
            'content' => 'required|string',
            'language' => 'required|string',
            'subtheme' => 'nullable|string',
            'user_id' => 'integer|required',
            'category_personal_post_id' => 'integer|required',
        ]);
        $data = [
            'title' => $fileds['title'],
            'content' => $fileds['content'],
            'language' => $fileds['language'],
            'subtheme' => $fileds['subtheme'],
            'user_id' => $fileds['user_id'],
            'category_personal_post_id' => $fileds['category_personal_post_id'],
        ];
        if ($request->file('image')) {
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/personalPost/' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            
            //$filename = time() . '.' . $request->image->extension();
            //$path = $request->image->storeAs('images/personalPost', $filename, 'public');
            
            if (File::exists(public_path(substr($personalPost->image, 1, null)))) {
                File::delete(public_path(substr($personalPost->image, 1, null)));
            }
            $data['image'] = $filename;
        }

        $personalPost->update($data);

        return new PersonalPostResource($personalPost);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PersonalPost  $personalPost
     * @return \Illuminate\Http\Response
     */
    public function destroy($personalPosts)
    {
        $posts = json_decode($personalPosts);
        foreach ($posts as  $post) {
            $post = PersonalPost::find($post);
            if (File::exists(public_path(substr($post->image, 1, null)))) {
                File::delete(public_path(substr($post->image, 1, null)));
            }
            $post->delete();
        }
        return response()->noContent();
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryPersonalPostRequest;
use App\Http\Resources\CategoryPersonalPostResource;
use App\Models\CategoryPersonalPost;
use Illuminate\Http\Request;

class CategoryPersonalPostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CategoryPersonalPostResource::collection(CategoryPersonalPost::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryPersonalPostRequest $request)
    {
        $categoryPersonalPost = CategoryPersonalPost::create($request->validated());

        return new CategoryPersonalPostResource($categoryPersonalPost);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CategoryPersonalPost  $categoryPersonalPost
     * @return \Illuminate\Http\Response
     */
    public function show(CategoryPersonalPost $categoryPersonalPost)
    {
        return new CategoryPersonalPostResource($categoryPersonalPost);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CategoryPersonalPost  $categoryPersonalPost
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryPersonalPostRequest $request, CategoryPersonalPost $categoryPersonalPost)
    {
        $categoryPersonalPost->update($request->validated());

        return new CategoryPersonalPostResource($categoryPersonalPost);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoryPersonalPost  $categoryPersonalPost
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoryPersonalPost $categoryPersonalPost)
    {
        $categoryPersonalPost->delete();

        return response()->noContent();
    }
}

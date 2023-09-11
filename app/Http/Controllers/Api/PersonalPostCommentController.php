<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PersonalPostCommentRequest;
use App\Http\Resources\PersonalPostCommentResource;
use App\Models\PersonalPostComment;
use Illuminate\Http\Request;

class PersonalPostCommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PersonalPostCommentResource::collection(PersonalPostComment::all());
    }

    public function comment_personalPost($id)
    {
        return PersonalPostCommentResource::collection(PersonalPostComment::where([
            ['status', 1],
            ['personal_post_id', $id],
        ])->get());
    }

    public function comment_user($id)
    {
        return PersonalPostCommentResource::collection(PersonalPostComment::where([
            ['user_id', $id],
        ])->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\PersonalPostCommentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PersonalPostCommentRequest $request)
    {
        $comment = PersonalPostComment::create($request->validated());
        return new PersonalPostCommentResource($comment);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PersonalPostComment  $personalPostComment
     * @return \Illuminate\Http\Response
     */
    public function show(PersonalPostComment $personalPostComment)
    {
        return new PersonalPostCommentResource($personalPostComment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\PersonalPostCommentRequest  $request
     * @param  \App\Models\PersonalPostComment  $personalPostComment
     * @return \Illuminate\Http\Response
     */
    public function update(PersonalPostCommentRequest $request,  $personalPostComment)
    {
        $personalPostComment = PersonalPostComment::find($personalPostComment);
        $personalPostComment->update($request->validated());

        return new PersonalPostCommentResource($personalPostComment);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param   $personalPostComment
     * @return \Illuminate\Http\Response
     */
    public function destroy($personalPostComments)
    {
        $personalPostComments = json_decode($personalPostComments);
        foreach ($personalPostComments as  $comment) {
            PersonalPostComment::where('id', $comment)->delete();
        }

        return response()->noContent();
    }
}

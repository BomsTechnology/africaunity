<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AnnouncementCommentRequest;
use App\Http\Resources\AnnouncementCommentResource;
use App\Models\AnnouncementComment;
use Illuminate\Http\Request;

class AnnouncementCommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AnnouncementCommentResource::collection(AnnouncementComment::all());
    }

    public function comment_announcement($id)
    {
        return AnnouncementCommentResource::collection(AnnouncementComment::where([
            ['status', 1],
            ['announcement_id', $id],
        ])->get());
    }

    public function comment_user($id)
    {
        return AnnouncementCommentResource::collection(AnnouncementComment::where([
            ['user_id', $id],
        ])->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AnnouncementCommentRequest $request)
    {
        $comment = AnnouncementComment::create($request->validated());
        return new AnnouncementCommentResource($comment);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AnnouncementComment  $announcementComment
     * @return \Illuminate\Http\Response
     */
    public function show(AnnouncementComment $announcementComment)
    {
        return new AnnouncementCommentResource($announcementComment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AnnouncementComment  $announcementComment
     * @return \Illuminate\Http\Response
     */
    public function update(AnnouncementCommentRequest $request, AnnouncementComment $announcementComment)
    {
        $announcementComment->update($request->validated());

        return new AnnouncementCommentResource($announcementComment);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AnnouncementComment  $announcementComment
     * @return \Illuminate\Http\Response
     */
    public function destroy($announcementComments)
    {
        $announcementComments = json_decode($announcementComments);
        foreach ($announcementComments as  $comment) {
            AnnouncementComment::where('id', $comment)->delete();
        }

        return response()->noContent();
    }
}

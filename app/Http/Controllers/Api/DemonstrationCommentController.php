<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DemonstrationCommentRequest;
use App\Http\Resources\DemonstrationCommentResource;
use App\Models\DemonstrationComment;
use Illuminate\Http\Request;

class DemonstrationCommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DemonstrationCommentResource::collection(DemonstrationComment::all());
    }

    public function comment_demonstration($id)
    {
        return DemonstrationCommentResource::collection(DemonstrationComment::where([
            ['status', 1],
            ['demonstration_id', $id],
        ])->get());
    }

    public function comment_user($id)
    {
        return DemonstrationCommentResource::collection(DemonstrationComment::where([
            ['user_id', $id],
        ])->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DemonstrationCommentRequest $request)
    {
        $comment = DemonstrationComment::create($request->validated());
        return new DemonstrationCommentResource($comment);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DemonstrationComment  $demonstrationComment
     * @return \Illuminate\Http\Response
     */
    public function show(DemonstrationComment $demonstrationComment)
    {
        return new DemonstrationCommentResource($demonstrationComment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DemonstrationComment  $demonstrationComment
     * @return \Illuminate\Http\Response
     */
    public function update(DemonstrationCommentRequest $request, DemonstrationComment $demonstrationComment)
    {
        $demonstrationComment->update($request->validated());

        return new DemonstrationCommentResource($demonstrationComment);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param   $demonstrationComment
     * @return \Illuminate\Http\Response
     */
    public function destroy($demonstrationComments)
    {
        $demonstrationComments = json_decode($demonstrationComments);
        foreach ($demonstrationComments as  $comment) {
            DemonstrationComment::where('id', $comment)->delete();
        }

        return response()->noContent();
    }
}

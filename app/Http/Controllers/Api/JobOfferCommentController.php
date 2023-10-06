<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobOfferCommentRequest;
use App\Http\Resources\JobOfferCommentResource;
use App\Models\JobOfferComment;
use Illuminate\Http\Request;

class JobOfferCommentController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return JobOfferCommentResource::collection(JobOfferComment::all());
    }

    public function comment_jobOffer($id)
    {
        return JobOfferCommentResource::collection(JobOfferComment::where([
            ['status', 1],
            ['job_offer_id', $id],
        ])->get());
    }

    public function comment_user($id)
    {
        return JobOfferCommentResource::collection(JobOfferComment::where([
            ['user_id', $id],
        ])->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(JobOfferCommentRequest $request)
    {
        $comment = JobOfferComment::create($request->validated());
        return new JobOfferCommentResource($comment);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\JobOfferComment  $jobOfferComment
     * @return \Illuminate\Http\Response
     */
    public function show(JobOfferComment $jobOfferComment)
    {
        return new JobOfferCommentResource($jobOfferComment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\JobOfferComment  $jobOfferComment
     * @return \Illuminate\Http\Response
     */
    public function update(JobOfferCommentRequest $request, $jobOfferComment)
    {
        $jobOfferComment = JobOfferComment::find($jobOfferComment);
        $jobOfferComment->update($request->validated());
        return new JobOfferCommentResource($jobOfferComment);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\JobOfferComment  $jobOfferComment
     * @return \Illuminate\Http\Response
     */
    public function destroy($jobOfferComments)
    {
        $jobOfferComments = json_decode($jobOfferComments);
        foreach ($jobOfferComments as  $comment) {
            JobOfferComment::where('id', $comment)->delete();
        }

        return response()->noContent();
    }
}

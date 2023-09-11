<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommentRequest;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use App\Notifications\NewCommentNotification;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CommentResource::collection(Comment::all());
    }


    public function comment_post($id)
    {
        return CommentResource::collection(Comment::where([
            ['status', 1],
            ['post_id', $id],
        ])->get());
    }

    public function comment_user($id)
    {
        return CommentResource::collection(Comment::where([
            ['user_id', $id],
        ])->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CommentRequest $request)
    {
        $comment = Comment::create($request->validated());

        $post = Post::find($request->post_id);
        $authorUser = User::find($post->user_id);
        $commentUser = User::find($request->user_id);

        $authorUser->notify(new NewCommentNotification($post, $commentUser, $request->content));

        return new CommentResource($comment);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        return new CommentResource($comment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(CommentRequest $request, Comment $comment)
    {
        $comment->update($request->validated());

        return new CommentResource($comment);
    }

    public function delete($comments)
    {
        dd($comments);
        $comments = json_decode($comments);
        foreach ($comments as  $comment) {
            Comment::where('id', $comment)->delete();
        }

        return response()->noContent();
    }


    public function destroy($comments)
    {

        $comments = json_decode($comments);
        foreach ($comments as  $comment) {
            Comment::where('id', $comment)->delete();
        }

        return response()->noContent();
    }
}

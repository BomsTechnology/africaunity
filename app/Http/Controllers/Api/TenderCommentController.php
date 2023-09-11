<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TenderCommentRequest;
use App\Http\Resources\TenderCommentResource;
use App\Models\TenderComment;
use Illuminate\Http\Request;

class TenderCommentController extends Controller
{
    /**
      * Display a listing of the resource.
      *
      * @return \Illuminate\Http\Response
      */
     public function index()
     {
         return TenderCommentResource::collection(TenderComment::all());
     }
 
     public function comment_tender($id)
     {
         return TenderCommentResource::collection(TenderComment::where([
             ['status', 1],
             ['tender_id', $id],
         ])->get());
     }
 
     public function comment_user($id)
     {
         return TenderCommentResource::collection(TenderComment::where([
             ['user_id', $id],
         ])->get());
     }
 
     /**
      * Store a newly created resource in storage.
      *
      * @param  \Illuminate\Http\Request  $request
      * @return \Illuminate\Http\Response
      */
     public function store(TenderCommentRequest $request)
     {
         $comment = TenderComment::create($request->validated());
         return new TenderCommentResource($comment);
     }
 
     /**
      * Display the specified resource.
      *
      * @param  \App\Models\TenderComment  $TenderComment
      * @return \Illuminate\Http\Response
      */
     public function show(TenderComment $TenderComment)
     {
         return new TenderCommentResource($TenderComment);
     }
 
     /**
      * Update the specified resource in storage.
      *
      * @param  \Illuminate\Http\Request  $request
      * @param  \App\Models\TenderComment  $TenderComment
      * @return \Illuminate\Http\Response
      */
     public function update(TenderCommentRequest $request, $TenderComment)
     {
         $TenderComment = TenderComment::find($TenderComment);
         $TenderComment->update($request->validated());
         return new TenderCommentResource($TenderComment);
     }
 
     /**
      * Remove the specified resource from storage.
      *
      * @param  \App\Models\TenderComment  $TenderComment
      * @return \Illuminate\Http\Response
      */
     public function destroy($TenderComments)
     {
         $TenderComments = json_decode($TenderComments);
         foreach ($TenderComments as  $comment) {
             TenderComment::where('id', $comment)->delete();
         }
 
         return response()->noContent();
     }
 }

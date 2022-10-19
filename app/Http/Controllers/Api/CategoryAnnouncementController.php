<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryAnnouncementRequest;
use App\Http\Resources\CategoryAnnouncementResource;
use App\Models\CategoryAnnouncement;
use Illuminate\Http\Request;

class CategoryAnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CategoryAnnouncementResource::collection(CategoryAnnouncement::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryAnnouncementRequest $request)
    {
        $categoryAnnouncement = CategoryAnnouncement::create($request->validated());

        return new CategoryAnnouncementResource($categoryAnnouncement);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CategoryAnnouncement  $categoryAnnouncement
     * @return \Illuminate\Http\Response
     */
    public function show(CategoryAnnouncement $categoryAnnouncement)
    {
        return new CategoryAnnouncementResource($categoryAnnouncement);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CategoryAnnouncement  $categoryAnnouncement
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryAnnouncementRequest $request, CategoryAnnouncement $categoryAnnouncement)
    {
        $categoryAnnouncement->update($request->validated());

        return new CategoryAnnouncementResource($categoryAnnouncement);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoryAnnouncement  $categoryAnnouncement
     * @return \Illuminate\Http\Response
     */
    public function destroy($categoryAnnouncements)
    {
        $categoryAnnouncements = json_decode($categoryAnnouncements);
        foreach ($categoryAnnouncements as  $categoryAnnouncement) {
            CategoryAnnouncement::where('id', $categoryAnnouncement)->delete();
        }

        return response()->noContent();
    }
}

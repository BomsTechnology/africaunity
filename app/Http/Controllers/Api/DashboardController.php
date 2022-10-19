<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Http\Resources\UserResource2;
use App\Models\Announcement;
use App\Models\JobOffer;
use App\Models\Post;
use App\Models\University;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{

    public function index()
    {
        $users = User::query()->count();
        $ads = Announcement::query()->count();
        $universities = University::query()->count();
        $jobs = JobOffer::query()->count();
        $articles = Post::where('type', 'article')->count();
        $propau = Post::where('type', 'propau')->count();

        $recents_posts = Post::orderBy('id', 'desc')->limit(5)->get();
        $recents_users = User::orderBy('id', 'desc')->offset(10)->limit(5)->get();

        $response = [
            'status' => true,
            'message' => 'All Good',
            'data' => [
                'users' => $users,
                'ads' => $ads,
                'universities' => $universities,
                'jobs' => $jobs,
                'articles' => $articles,
                'propau' => $propau,
                'recents_users' => UserResource2::collection($recents_users),
                'recents_posts' => PostResource::collection($recents_posts),
            ]
        ];
        return response($response, 201);
    }
}

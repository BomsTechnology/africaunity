<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ReportingResource;
use App\Models\Announcement;
use App\Models\Demonstration;
use App\Models\JobOffer;
use App\Models\PersonalPost;
use App\Models\Post;
use App\Models\Reporting;
use App\Models\University;
use App\Models\User;
use App\Notifications\ReportNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ReportController extends Controller
{

    public function index(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'required',
            'type' => 'required',
            'reported_id' => 'required',
            'content' => 'required|string',
        ]);

        switch (strtolower($data['type'])) {
            case 'post':
                $post = Post::find($data['reported_id']);
                $reported = "Post($post->title)";
                $url = "/post/$post->id/". Str::slug($post->title);
                break;
            case 'account':
                $user = User::find($data['reported_id']);
                $reported = "User($user->firstname ". $user->lastname && $user->lastname  != 'null'  ? $user->lastname : '' ." | $user->email )";
                $url = "/account/$user->id/". $user->lastname && $user->lastname  != 'null'  ? Str::slug("$user->firstname  $user->lastname") : Str::slug("$user->firstname");
                break;
            case 'ads':
                $ads = Announcement::find($data['reported_id']);
                $reported = "Announcement($ads->title)";
                $url = "/ads/$ads->id/". Str::slug($ads->title);
                break;
            case 'blogpost':
                $personalPost = PersonalPost::find($data['reported_id']);
                $author = User::find($personalPost->user_id);
                $reported = "BLog Post($personalPost->title)";
                $url = "/account/$author->id/". $author->lastname && $author->lastname  != 'null'  ? Str::slug("$author->firstname  $author->lastname") : Str::slug("$author->firstname") . "/?personal_post=$personalPost->id#personal_post";
                break;
            case 'job':
                $job = JobOffer::find($data['reported_id']);
                $reported = "Job Offer($job->title)";
                $url = "/job/$job->id/". Str::slug($job->title);
                break;
            case 'event':
                $event = Demonstration::find($data['reported_id']);
                $reported = "Event ($event->title)";
                $url = "/events/$event->id/". Str::slug($event->title);
                break;
            case 'university':
                $university = University::find($data['reported_id']);
                $reported = "University ($university->name)";
                $url = "/university/$university->id/". Str::slug($university->name);
                break;
        }

        $data['reported'] = $reported;
        $data['url'] = $url;
        Reporting::create($data);

        dispatch(function () use ($data, $reported, $url){
            $admins = User::where('type', 'admin')->get();
            $userReport = User::find($data['user_id']);

            foreach ($admins as $admin) {
                $admin->notify(new ReportNotification($data['type'], $reported, $url, $userReport, $data['content']));
            }
        })->afterResponse();

        $response = [
            'status' => true,
            'message' => 'Report Send successfully!',
        ];
        return response($response, 201);
    }

    public function all(){
        return ReportingResource::collection(Reporting::latest()->get());
    }

    public function delete($reports)
    {
        $reports = json_decode($reports);
        foreach ($reports as  $report) {
            Reporting::find($report)->delete();
        }
        return response()->noContent();
    }

}

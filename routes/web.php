<?php

use App\Mail\TestMail;
use App\Models\Post;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use App\Http\Controllers\HomeController;



/*if (env('APP_ENV') === 'production') {
    Illuminate\Routing\UrlGenerator::forceSchema('https');
}*/

Route::get('/storage-link', function () {
    $targetFolder = base_path() . '/storage/app/public/public/uploads';
    $linkFolder = $_SERVER['DOCUMENT_ROOT'] . '/uploads';
    if (symlink($targetFolder, $linkFolder)) {
        echo 'Symlink process successfully completed';
    }
});

Route::get('/sync-ministries', function () {
  $posts = Post::all();
  foreach ($posts as  $post) {
    $post->ministries()->sync([$post->ministry_id]);
  }
  echo 'Posts Sync successfully';
});

Route::get('/', function () {
    return view('welcome');
})->name('home');


Route::get('/{any}', [HomeController::class, 'index'])->where('any', '.*');
//Route::view('{any}', 'welcome')->where('any', '.*');

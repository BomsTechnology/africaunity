<?php

use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;



/*if (env('APP_ENV') === 'production') {
    Illuminate\Routing\UrlGenerator::forceSchema('https');
}*/

/*Route::get('/storage-link', function () {
    $targetFolder = base_path() . '/storage/app/public/uploads';
    $linkFolder = $_SERVER['DOCUMENT_ROOT'] . '/uploads';
    if (symlink($targetFolder, $linkFolder)) {
        echo 'Symlink process successfully completed';
    }
});*/

Route::get('/', function () {
    return view('welcome');
})->name('home');


Route::view('{any}', 'welcome')->where('any', '.*');

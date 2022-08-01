<?php

use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

// if (env('APP_ENV') === 'production') {
//     URL::forceSchema('https');
// }

Route::get('/storage-link', function () {
    $targetFolder = base_path() . '/storage/app/public/uploads';
    $linkFolder = $_SERVER['DOCUMENT_ROOT'] . '/uploads';
    if (symlink($targetFolder, $linkFolder)) {
        echo 'Symlink process successfully completed';
    }
});

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('admin', function () {
    return view('administration');
});


Route::view('admin/{any}', 'administration')->where('any', '.*');
Route::view('{any}', 'welcome')->where('any', '.*');

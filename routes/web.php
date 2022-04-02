<?php

use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function(){
//     $details = [
//         "title" => "Test Mail Laravel Gmail",
//         "body" => "This is a test Mail Laravel Gmail"
//     ];

//     Mail::to("marcsigha@gmail.com")->send(new TestMail($details));

//     return "email send";
// });

Route::get('/', function () {
    return view('welcome');
});

Route::get('admin', function () {
    return view('administration');
});

Route::view('admin/{any}', 'administration')->where('any', '.*');
Route::view('{any}', 'welcome')->where('any', '.*');


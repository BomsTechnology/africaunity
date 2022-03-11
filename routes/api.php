<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

Route::post("/register",[AuthController::class,'register']);
Route::post("/login",[AuthController::class,'login']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::post("/logout",[AuthController::class,'logout']);
});

Route::middleware(['auth:sanctum'])->group(function () {
    
});
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ContinentController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\MinistryController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\ZoneController;

Route::post("/register",[AuthController::class,'register']);
Route::post("/login",[AuthController::class,'login']);
Route::post("/login-admin",[AuthController::class,'login_admin']);
Route::post("/verif-admin",[AuthController::class,'verif_admin']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::apiResource('posts', PostController::class);
    Route::apiResource('continents', ContinentController::class);
    Route::apiResource('zones', ZoneController::class);
    Route::apiResource('country', CountryController::class);
    Route::apiResource('ministry', MinistryController::class);
    Route::post("/logout",[AuthController::class,'logout']);
});

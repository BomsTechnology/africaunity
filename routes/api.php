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
Route::get("/posts-caroussel/{lang}",[PostController::class,'post_caroussel']);
Route::get("/continents", [ContinentController::class,'index']);
Route::get("/zones", [ZoneController::class,'index']);
Route::get("/countries", [CountryController::class,'index']);
Route::get("/ministries", [MinistryController::class,'index']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::get("/posts-all/{type}", [PostController::class,'index']);
    Route::get("/posts-type/{type}/{lang}",[PostController::class,'post_type']);
    Route::get("/posts-user/{user}",[PostController::class,'post_user']);
    
    Route::apiResource('posts', PostController::class);
    Route::get("/posts2/{post}", [PostController::class,'show2']);

    Route::post("/continents", [ContinentController::class,'store']);
    Route::get("/continents/{continent}", [ContinentController::class,'show']);
    Route::put("/continents/{continent}", [ContinentController::class,'update']);
    Route::delete("/continents/{continent}", [ContinentController::class,'destroy']);

    Route::post("/zones", [ZoneController::class,'store']);
    Route::get("/zones/{zone}", [ZoneController::class,'show']);
    Route::put("/zones/{zone}", [ZoneController::class,'update']);
    Route::delete("/zones/{zone}", [ZoneController::class,'destroy']);

    Route::post("/countries", [CountryController::class,'store']);
    Route::get("/countries/{country}", [CountryController::class,'show']);
    Route::put("/countries/{country}", [CountryController::class,'update']);
    Route::delete("/countries/{country}", [CountryController::class,'destroy']);

    Route::post("/ministries", [MinistryController::class,'store']);
    Route::get("/ministries/{ministry}", [MinistryController::class,'show']);
    Route::put("/ministries/{ministry}", [MinistryController::class,'update']);
    Route::delete("/ministries/{ministry}", [MinistryController::class,'destroy']);

    Route::post("/logout",[AuthController::class,'logout']);
});

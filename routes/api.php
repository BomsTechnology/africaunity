<?php

use App\Http\Controllers\Api\ActivityAreaController;
use App\Http\Controllers\Api\AnnouncementController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BusinessSizeController;
use App\Http\Controllers\Api\BusinessTypeController;
use App\Http\Controllers\Api\CategoryAnnouncementController;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\ContinentController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\CurrencyController;
use App\Http\Controllers\Api\DetailController;
use App\Http\Controllers\Api\EmailVerificationController;
use App\Http\Controllers\Api\JobOfferController;
use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\LegalStatusController;
use App\Http\Controllers\Api\LevelStudyController;
use App\Http\Controllers\Api\MinistryController;
use App\Http\Controllers\Api\OfferTypeController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\SizeCompanyController;
use App\Http\Controllers\Api\UniversityController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\WorkDepartmentController;
use App\Http\Controllers\Api\WorkModeController;
use App\Http\Controllers\Api\YearExperienceController;
use App\Http\Controllers\Api\ZoneController;

Route::post("/register",[AuthController::class,'register']);
Route::post("/login",[AuthController::class,'login']);
Route::post("/login-admin",[AuthController::class,'login_admin']);

Route::get("/posts-caroussel/{lang}",[PostController::class,'post_caroussel']);
Route::get("/posts-home/{lang}/{ministry}",[PostController::class,'post_home']);
Route::get("/continents", [ContinentController::class,'index']);
Route::get("/zones", [ZoneController::class,'index']);
Route::get("/countries", [CountryController::class,'index']);
Route::get("/ministries", [MinistryController::class,'index']);
Route::get("/ministries-home", [MinistryController::class,'ministry_home']);


Route::get('verify-email/{id}/{hash}', [EmailVerificationController::class, 'verify'])->name('verification.verify');
Route::post('email/verification-notification', [EmailVerificationController::class, 'sendVerificationEmail']);

Route::group(['middleware' => ['auth:sanctum', 'verified']], function(){
    
    Route::get("/posts-all/{type}", [PostController::class,'index']);
    Route::get("/posts-type/{type}/{lang}",[PostController::class,'post_type']);
    Route::get("/posts-user/{user}",[PostController::class,'post_user']);
    
    Route::apiResource('posts', PostController::class);
    Route::get("/posts2/{post}", [PostController::class,'show2']);

    Route::apiResource('users', UserController::class);

    Route::apiResource('cities', CityController::class);

    Route::apiResource('universities', UniversityController::class);
    Route::get("/universities2/{university}", [UniversityController::class,'show2']);

    Route::apiResource('currencies', CurrencyController::class);

    Route::apiResource('languages', LanguageController::class);

    Route::apiResource('businessSizes', BusinessSizeController::class);

    Route::apiResource('offerTypes', OfferTypeController::class);

    Route::apiResource('yearExperiences', YearExperienceController::class);

    Route::apiResource('workDepartments', WorkDepartmentController::class);

    Route::apiResource('workModes', WorkModeController::class);

    Route::apiResource('businessTypes', BusinessTypeController::class);

    Route::apiResource('legalStatuses', LegalStatusController::class);

    Route::apiResource('activityAreas', ActivityAreaController::class);

    Route::apiResource("levelStudies", LevelStudyController::class);

    Route::apiResource("sizeCompanies", SizeCompanyController::class);

    Route::apiResource('details', DetailController::class);

    Route::apiResource('categoryAnnouncements', CategoryAnnouncementController::class);

    Route::apiResource('comments', CommentController::class);
    Route::get('comments-post/{id}', [CommentController::class, 'comment_post']);
    Route::get('comments-user/{id}', [CommentController::class, 'comment_user']);

    Route::apiResource('jobOffers', JobOfferController::class);
    Route::get('jobOffers-user/{id}', [JobOfferController::class, 'jobOffers_user']);
    Route::get("/jobOffers2/{jobOffer}", [JobOfferController::class,'show2']);

    Route::apiResource('announcements', AnnouncementController::class);
    Route::get('announcements-university/{id}', [AnnouncementController::class, 'announcements_university']);
    Route::get('announcements-user/{id}', [AnnouncementController::class, 'announcements_user']);
    Route::get("/announcements2/{announcement}", [AnnouncementController::class,'show2']);

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
    Route::post("/verif-admin",[AuthController::class,'verif_admin']);
});

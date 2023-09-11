<?php

use App\Http\Controllers\Api\ActivityAreaController;
use App\Http\Controllers\Api\AnnouncementCommentController;
use App\Http\Controllers\Api\AnnouncementController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BusinessSizeController;
use App\Http\Controllers\Api\BusinessTypeController;
use App\Http\Controllers\Api\CategoryAnnouncementController;
use App\Http\Controllers\Api\CategoryPersonalPostController;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ContinentController;
use App\Http\Controllers\Api\ContractTypeController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\CurrencyController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\DemonstrationCommentController;
use App\Http\Controllers\Api\DemonstrationController;
use App\Http\Controllers\Api\DemonstrationModeController;
use App\Http\Controllers\Api\DemonstrationNicheController;
use App\Http\Controllers\Api\DemonstrationTypeController;
use App\Http\Controllers\Api\DetailController;
use App\Http\Controllers\Api\EmailVerificationController;
use App\Http\Controllers\Api\FollowerController;
use App\Http\Controllers\Api\ForgotPasswordController;
use App\Http\Controllers\Api\JobOfferCommentController;
use App\Http\Controllers\Api\JobOfferController;
use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\LegalStatusController;
use App\Http\Controllers\Api\LevelStudyController;
use App\Http\Controllers\Api\MinistryController;
use App\Http\Controllers\Api\OfferTypeController;
use App\Http\Controllers\Api\PersonalPostCommentController;
use App\Http\Controllers\Api\PersonalPostController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\ReportController;
use App\Http\Controllers\Api\SizeCompanyController;
use App\Http\Controllers\Api\StatusController;
use App\Http\Controllers\Api\TenderCommentController;
use App\Http\Controllers\Api\UniversityController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\WorkDepartmentController;
use App\Http\Controllers\Api\WorkModeController;
use App\Http\Controllers\Api\YearExperienceController;
use App\Http\Controllers\Api\ZoneController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\Api\TenderController;

Route::get('/getSession', [StripeController::class, 'getSession']);
Route::post("/register", [AuthController::class, 'register']);
Route::post("/login", [AuthController::class, 'login']);
Route::post("/login-admin", [AuthController::class, 'login_admin']);

Route::get("/posts-caroussel/{lang}", [PostController::class, 'post_caroussel']);

Route::get("/posts-home/{lang}/{ministry}", [PostController::class, 'post_home']);

Route::get("/continents/language/{lang}", [ContinentController::class, 'index']);

Route::post('/forgot-password', [ForgotPasswordController::class, 'index'])->middleware('guest')->name('password.request');
Route::get("/reset-password", [ForgotPasswordController::class, 'verif']);
Route::post("/reset-password", [ForgotPasswordController::class, 'reset'])->middleware('guest')->name('password.reset');

Route::get("/zones/language/{lang}", [ZoneController::class, 'index']);

Route::get("/countries/language/{lang}", [CountryController::class, 'index']);

Route::get("/cities/language/{lang}", [CityController::class, 'index']);

Route::get("/ministries", [MinistryController::class, 'index']);
Route::get("/ministries-home", [MinistryController::class, 'ministry_home']);

Route::get('jobOffers-home', [JobOfferController::class, 'jobOffers_home']);

Route::get('verify-email/{id}/{hash}', [EmailVerificationController::class, 'verify'])->name('verification.verify');
Route::post('email/verification-notification', [EmailVerificationController::class, 'sendVerificationEmail']);

Route::post('send-contact', [ContactController::class, 'store'])->name('contact');

Route::get("/posts-all/{type}", [PostController::class, 'index']);

Route::get("/post-shared/{post}", [PostController::class, 'post_shared']);

Route::group(['middleware' => ['auth:sanctum', 'verified']], function () {

    Route::get("/dash-data", [DashboardController::class, 'index']);

    Route::post("/report", [ReportController::class, 'index']);
    Route::get("/reports", [ReportController::class, 'all']);
    Route::delete("/reports/{reports}", [ReportController::class, 'delete']);

    Route::get("/posts-type/{type}/{lang}", [PostController::class, 'post_type']);
    Route::get("/posts-user/{user}", [PostController::class, 'post_user']);
    Route::get("/posts-date/{date}/{lang}", [PostController::class, 'post_date']);
    Route::post("/posts-filter", [PostController::class, 'filter']);
    Route::apiResource('posts', PostController::class);
    Route::get("/posts2/{post}", [PostController::class, 'show2']);
    Route::post("/post-report", [PostController::class, 'post_report']);

    Route::post("/demonstrations-filter", [DemonstrationController::class, 'filter']);
    Route::get("/demonstrations-user/{user}", [DemonstrationController::class, 'demonstration_user']);
    Route::get("/demonstrations-mark/{demonstration}", [DemonstrationController::class, 'demonstration_mark']);
    Route::apiResource('demonstrations', DemonstrationController::class);
    Route::post("/demonstration-send-contact", [DemonstrationController::class, 'contact']);

    Route::apiResource('personalPosts', PersonalPostController::class);
    Route::get("/personalPosts-user/{user}", [PersonalPostController::class, 'post_user']);
    Route::get("/personalPosts-lang/{lang}", [PersonalPostController::class, 'post_lang']);
    Route::get("/personalPosts-all", [PersonalPostController::class, 'all']);

    Route::apiResource('users', UserController::class);
    Route::put("/users-change-password/{user}", [UserController::class, 'changePassword']);
    Route::put("/users-update/{user}", [UserController::class, 'update2']);
    Route::get("/users-type/{type}", [UserController::class, 'usersType']);
    Route::put("/users-change-status/{user}", [UserController::class, 'changeStatus']);
    Route::post("/users-delete-data", [UserController::class, 'deleteData']);
    Route::post("/users-delete-user", [UserController::class, 'deleteUser']);
    Route::post("/users-filter", [UserController::class, 'filter']);
    Route::post("/users-report", [UserController::class, 'user_report']);

    Route::apiResource('universities', UniversityController::class);
    Route::get('/university/all', [UniversityController::class, 'all']);
    Route::get("/universities2/{university}", [UniversityController::class, 'show2']);
    Route::post("/universities-filter", [UniversityController::class, 'filter']);

    Route::apiResource('currencies', CurrencyController::class);

    Route::apiResource('languages', LanguageController::class);

    Route::apiResource('status', StatusController::class);

    Route::apiResource('businessSizes', BusinessSizeController::class);

    Route::apiResource('offerTypes', OfferTypeController::class);

    Route::apiResource('contractTypes', ContractTypeController::class);

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

    Route::apiResource('categoryPersonalPosts', CategoryPersonalPostController::class);

    Route::apiResource('demonstrationTypes', DemonstrationTypeController::class);

    Route::apiResource('demonstrationNiches', DemonstrationNicheController::class);

    Route::apiResource('demonstrationModes', DemonstrationModeController::class);

    Route::apiResource('comments', CommentController::class);
    Route::delete("/comments/{comments}", [CommentController::class, 'delete']);
    Route::get('comments-post/{id}', [CommentController::class, 'comment_post']);
    Route::get('comments-user/{id}', [CommentController::class, 'comment_user']);

    Route::apiResource('announcement-comments', AnnouncementCommentController::class);
    Route::get('announcement-comments-post/{id}', [AnnouncementCommentController::class, 'comment_announcement']);
    Route::get('announcement-comments-user/{id}', [AnnouncementCommentController::class, 'comment_user']);

    Route::apiResource('jobOffer-comments', JobOfferCommentController::class);
    Route::get('jobOffer-comments-post/{id}', [JobOfferCommentController::class, 'comment_jobOffer']);
    Route::get('jobOffer-comments-user/{id}', [JobOfferCommentController::class, 'comment_user']);

    Route::apiResource('tenders-comments', TenderCommentController::class);
    Route::get('tenders-comments-post/{id}', [TenderCommentController::class, 'comment_tender']);
    Route::get('tenders-comments-user/{id}', [TenderCommentController::class, 'comment_user']);

    Route::apiResource('demonstration-comments', DemonstrationCommentController::class);
    Route::get('demonstration-comments-post/{id}', [DemonstrationCommentController::class, 'comment_demonstration']);
    Route::get('demonstration-comments-user/{id}', [DemonstrationCommentController::class, 'comment_user']);

    Route::apiResource('personalPost-comments', PersonalPostCommentController::class);
    Route::get('personalPost-comments-post/{id}', [PersonalPostCommentController::class, 'comment_personalPost']);
    Route::get('personalPost-comments-user/{id}', [PersonalPostCommentController::class, 'comment_user']);

    Route::apiResource('jobOffers', JobOfferController::class);
    Route::get('jobOffers-user/{id}', [JobOfferController::class, 'jobOffers_user']);
    Route::get('jobOffers-front', [JobOfferController::class, 'jobOffers_front']);
    Route::get('jobOffers-mark-filled/{jobOffer}', [JobOfferController::class, 'jobOffers_mark']);
    Route::get("/jobOffers2/{jobOffer}", [JobOfferController::class, 'show2']);
    Route::post("/jobOffers-apply", [JobOfferController::class, 'jobOffers_apply']);
    Route::post("/jobOffers-filter", [JobOfferController::class, 'filter']);

    Route::apiResource('tenders', TenderController::class);
    Route::get('tenders-user/{id}', [TenderController::class, 'tenders_user']);
    Route::get('tenders-mark-filled/{tender}', [TenderController::class, 'tenders_mark']);
    Route::get('tenders-front', [TenderController::class, 'tenders_front']);
    Route::post("/tenders-apply", [TenderController::class, 'tenders_apply']);
    Route::post("/tenders-filter", [TenderController::class, 'filter']);

    Route::apiResource('announcements', AnnouncementController::class);
    Route::get('announcements-university/{id}', [AnnouncementController::class, 'announcements_university']);
    Route::get('announcements-user/{id}', [AnnouncementController::class, 'announcements_user']);
    Route::get("/announcements2/{announcement}", [AnnouncementController::class, 'show2']);
    Route::get("/announcements2/{announcement}", [AnnouncementController::class, 'show2']);
    Route::post("/announcement-send-contact", [AnnouncementController::class, 'contact']);
    Route::post("/announcements-filter", [AnnouncementController::class, 'filter']);

    Route::post("/continents", [ContinentController::class, 'store']);
    Route::get("/continents/{continent}", [ContinentController::class, 'show']);
    Route::put("/continents/{continent}", [ContinentController::class, 'update']);
    Route::delete("/continents/{continent}", [ContinentController::class, 'destroy']);

    Route::post("/zones", [ZoneController::class, 'store']);
    Route::get("/zones/{zone}", [ZoneController::class, 'show']);
    Route::put("/zones/{zone}", [ZoneController::class, 'update']);
    Route::delete("/zones/{zone}", [ZoneController::class, 'destroy']);

    Route::post("/countries", [CountryController::class, 'store']);
    Route::get("/countries/{country}", [CountryController::class, 'show']);
    Route::put("/countries/{country}", [CountryController::class, 'update']);
    Route::delete("/countries/{country}", [CountryController::class, 'destroy']);

    Route::post("/cities", [CityController::class, 'store']);
    Route::get("/cities/{city}", [CityController::class, 'show']);
    Route::put("/cities/{city}", [CityController::class, 'update']);
    Route::delete("/cities/{city}", [CityController::class, 'destroy']);

    Route::post("/ministries", [MinistryController::class, 'store']);
    Route::get("/ministries/{ministry}", [MinistryController::class, 'show']);
    Route::put("/ministries/{ministry}", [MinistryController::class, 'update']);
    Route::delete("/ministries/{ministry}", [MinistryController::class, 'destroy']);

    Route::post("/logout", [AuthController::class, 'logout']);
    Route::post("/verif-admin", [AuthController::class, 'verif_admin']);


    Route::post("/followers", [FollowerController::class, 'store']);
    Route::delete("/followers/{follower}", [FollowerController::class, 'destroy']);
});

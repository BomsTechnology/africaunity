<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\WelcomeNotification;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

class EmailVerificationController extends Controller
{

    public function sendVerificationEmail(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return [
                'message' => 'Already Verified'
            ];
        }

        $request->user()->sendEmailVerificationNotification();

        return ['status' => 'verification-link-sent'];
    }

    public function verify(Request $request)
    {
        $user = User::findOrFail($request->id);

        if ($user->email_verified_at) {
            return redirect('?verif-ok');
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        $user->notify(new WelcomeNotification());

        return redirect('/login/verif-ok');
    }
}

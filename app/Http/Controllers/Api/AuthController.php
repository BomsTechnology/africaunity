<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource2;
use App\Models\Detail;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Status;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'nullable|string',
            'type' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|min:8|confirmed'
        ]);

        $user = User::create([
            'firstname' => $fields['firstname'],
            'lastname' => $fields['lastname'],
            'type' => $fields['type'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password']),
        ]);
        
        $status = Status::query()->orderBy('id', 'asc')->first();

        Detail::create([
            'user_id' => $user->id,
            'status_id' => $status->id
        ]);

        event(new Registered($user));

        //create token
        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'status' => true,
            'message' => 'registered successfully!',
            'data' => [
                'user' => new UserResource2($user),
                'token' => $token
            ]
        ];
        return response($response, 201);
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required'
        ]);
        //check email
        $user = User::where('email', $fields['email'])->first();
        //check password
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response(['status' => false, 'message' => 'invalid email or password'], 401);
        }
        //verify activation email
        if (!$user->email_verified_at) {
            return response(['status' => false, 'message' => 'Your email address is not verified.'], 403);
        }
        //verify activation account
        if ($user->status == 3) {
            return response(['status' => false, 'message' => 'Your account is deactivated please contact our administrators.'], 403);
        }

        //create token
        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'status' => true,
            'message' => 'Login successful!',
            'data' => [
                'user' => new UserResource2($user),
                'token' => $token
            ]
        ];
        return response($response, 201);
    }

    public function login_admin(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required'
        ]);
        //check email
        $admin = User::where([['email', '=', $fields['email']], ['type', '=', 'admin']])->first();
        //check password
        if (!$admin || !Hash::check($fields['password'], $admin->password)) {
            return response(['status' => false, 'message' => 'invalid email or password'], 401);
        }

        //create token
        $token = $admin->createToken('myapptoken')->plainTextToken;

        $response = [
            'status' => true,
            'message' => 'Login successful!',
            'data' => [
                'user' => new UserResource2($admin),
                'token' => $token
            ]
        ];
        return response($response, 201);
    }

    public function verif_admin(Request $request)
    {
        $fields = $request->validate([
            'id' => 'required'
        ]);
        //check id
        $admin = User::where('id', $fields['id'])->first();
        //check type
        if (!$admin || $admin->type != 'admin') {
            return response(['status' => false, 'message' => 'is not a admin'], 401);
        }


        $response = [
            'status' => true,
            'message' => 'Is Admin!',
            'data' => [
                'user' => new UserResource2($admin),
            ]
        ];
        return response($response, 201);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        $response = [
            'status' => true,
            'message' => 'Logout successfully',
        ];
        return response($response, 201);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ApiTokenController extends Controller
{
    public function createToken(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if ($validator->fails()) {
            return response()->json(['Error!' => $validator->errors()], 401);
        }

        $user = User::where('email', '=', $request->email)->first();

        if (!$user || !Hash::check($request['password'], $user->password)) {
            return response()->json(['Error!' => 'The provided credentials are incorrect', 401]);
        }

        $token = $user->createToken($request['email']);
        return response()->json(['token' => $token->plainTextToken]);
    }
}

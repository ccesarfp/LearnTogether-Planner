<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Services\AuthService;
use \Illuminate\Http\Response;

class AuthController
{
    public function register(RegisterRequest $request, AuthService $authService): Response
    {
        $validated = $request->validated();
        $user = $authService->register($validated);

        $token = $authService->createToken($user);

        return response('User Created', 200)
            ->header('Content-Type', 'text/plain')
            ->setContent([
                'token' => $token->plainTextToken
            ]);
    }

    public function login(LoginRequest $request, AuthService $authService): Response
    {
        $validated = $request->validated();
        $user = $authService->login($validated);

        if(!$user->password && !$authService->checkPassword($request["password"], $user->password)) {
            return response('User Not Found', 204)
                ->header('Content-Type', 'text/plain');
        }

        $token = $authService->createToken($user);

        return response('User Can Access', 200)
            ->header('Content-Type', 'text/plain')
            ->setContent([
                'token' => $token->plainTextToken
            ]);
    }

}

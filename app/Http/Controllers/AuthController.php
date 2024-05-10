<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Services\AuthService;

class AuthController
{
    public function register(RegisterRequest $request, AuthService $authService): void
    {
        $authService->register($request->validated());
    }

}

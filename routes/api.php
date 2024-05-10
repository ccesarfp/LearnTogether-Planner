<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);

Route::prefix('/api')->group(function () {
    Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);
});

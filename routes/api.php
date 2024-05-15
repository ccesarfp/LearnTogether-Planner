<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);

Route::prefix('/task')->middleware(['auth:sanctum'])->group(function() {
    Route::get('/', [\App\Http\Controllers\TaskController::class, 'index']);
    Route::post('/store', [\App\Http\Controllers\TaskController::class, 'store']);
    Route::post('/delete', [\App\Http\Controllers\TaskController::class, 'delete']);
});

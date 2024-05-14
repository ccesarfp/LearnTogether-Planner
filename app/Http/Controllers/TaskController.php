<?php

namespace App\Http\Controllers;
use App\Http\Requests\AccessRequest;
use App\Http\Requests\CreateTaskRequest;
use App\Services\TaskService;

class TaskController
{
    public function index(AccessRequest $request, TaskService $taskService) {
        dd($request);
    }

    public function store(CreateTaskRequest $request, TaskService $taskService) {
        dd($request);
    }

    public function delete(CreateTaskRequest $request, TaskService $taskService) {
        dd($request);
    }
}

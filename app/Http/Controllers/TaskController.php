<?php

namespace App\Http\Controllers;
use App\Http\Requests\CreateTaskRequest;
use App\Models\User;
use App\Services\TaskService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class TaskController
{
    public function index(Request $request, TaskService $taskService): Response {
        $user = (new User)->find(Auth::user()['id']);
        $tasks = $taskService->all($user);

        return response('All tasks', 200)
            ->header('Content-Type', 'application/json')
            ->setContent([
                'message' => 'All tasks found',
                'tasks' => $tasks
            ]);
    }

    public function store(CreateTaskRequest $request, TaskService $taskService) {
        dd($request);
    }

    public function delete(CreateTaskRequest $request, TaskService $taskService) {
        dd($request);
    }
}

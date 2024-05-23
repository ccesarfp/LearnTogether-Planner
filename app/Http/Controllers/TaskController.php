<?php

namespace App\Http\Controllers;
use App\Http\Requests\CreateTaskRequest;
use App\Http\Requests\DeleteTask;
use App\Models\Task;
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

    public function store(CreateTaskRequest $request, TaskService $taskService): Response {
        $taskService->store(['user_id' => Auth::user()->id] + $request->validated());
        return response('Task created', 200)
            ->header('Content-Type', 'application/json')
            ->setContent([
                'message' => 'Created successfully'
            ]);
    }

    public function delete(DeleteTask $request, TaskService $taskService): Response {
        $haveDeleted = $taskService->delete($request->validated()['id']);
        if (!$haveDeleted) {
            return response('Task created', 400)
                ->header('Content-Type', 'application/json')
                ->setContent([
                    'message' => 'Created successfully'
                ]);
        }

        return response('Task deleted', 200)
            ->header('Content-Type', 'application/json')
            ->setContent([
                'message' => 'Task deleted'
            ]);
    }
}

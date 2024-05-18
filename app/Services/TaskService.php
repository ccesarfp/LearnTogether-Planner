<?php
namespace App\Services;

use App\Models\Task;
use App\Models\User;
use App\StatusEnum;
use Illuminate\Database\Eloquent\Collection;

class TaskService {

    public function all(User $user): Collection {
        return (new Task)
                    ->select('id', 'title', 'description', 'due_date', 'status')
                    ->where('user_id', $user->id)
                    ->get();
    }

    public function store(array $taskData): Task {
        return (new Task)
            ->updateOrCreate(
                [
                    'id' => $taskData['id'] ?: null
                ],
                [
                    'user_id' => $taskData['user_id'],
                    'title' => $taskData['title'],
                    'description' => $taskData['description'],
                    'status' => $taskData['status'],
                    'due_date' => $taskData['dueDate']
                ]
            );
    }

}

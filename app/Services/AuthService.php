<?php
namespace App\Services;

use App\Models\User;

class AuthService {
    public function register(array $user): void
    {
        dd($user);

        (new \App\Models\User)->create([
            "name" => $user["name"],
            "email" => $user["email"],
            "password" => $user["password"],
        ]);
    }
}

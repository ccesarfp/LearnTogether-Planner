<?php
namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\NewAccessToken;

class AuthService {
    public function register(array $userData): User
    {
        return (new User)->create([
            "name" => $userData["name"],
            "email" => $userData["email"],
            "password" => Hash::make($userData["password"]),
        ]);
    }

    public function login(array $userData): User
    {
        return (new User)->where([
            ['email', $userData["email"]],
        ])              ->firstOrFail();
    }

        public function checkPassword($password, $hashedPassword): bool
    {
        return Hash::check($password, $hashedPassword);
    }

    public function createToken(User $user): NewAccessToken {
        return $user->createToken('t');
    }
}

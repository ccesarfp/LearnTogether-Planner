<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * Index
 *
 * @mixin Builder
 */
class Task extends Model
{
    use HasFactory, HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'due_date',
    ];
}

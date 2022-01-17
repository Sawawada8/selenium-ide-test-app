<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Label extends Model
{
    protected $fillable = ['title'];

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
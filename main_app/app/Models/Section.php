<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $fillable = ['project_id', 'script_url'];

    public function results()
    {
        return $this->hasMany(Result::class);
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}

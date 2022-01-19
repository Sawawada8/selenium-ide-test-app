<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['user_id', 'name'];

    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function labels()
    {
        return $this->belongsToMany(Label::class, 'label_project');
    }
}

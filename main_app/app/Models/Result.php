<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $fillable = ['section_id', 'exected_at'];

    public function section()
    {
        return $this->belongsTo(Section::class);
    }
}

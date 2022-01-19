<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function aaa($name, $project)
    {
        return ['a' => $name, 'b' => $project];
        $a = 3;
        // return
    }
}

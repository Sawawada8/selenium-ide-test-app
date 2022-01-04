<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Servicies\Sample;
use App\UseCase\Sample as UseC;

class HomeController extends Controller
{
    public function index(Sample $obj, UseC $o)
    {
        $obj->callHello();
        echo "------<br>";
        $o->invoke();
    }
}

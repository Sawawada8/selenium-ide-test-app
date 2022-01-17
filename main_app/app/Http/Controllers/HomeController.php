<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Servicies\Sample;
use App\UseCase\Sample as UseC;

class HomeController extends Controller
{
    public function index(Sample $obj, UseC $o)
    {
        // $obj->callHello();
        // echo '------<br>';
        // $o->invoke();
        return response()->json(['hello' => 'world']);
    }
    public function indexa(Request $req)
    {
        // $obj->callHello();
        // echo '------<br>';
        // $o->invoke();
        return response()->json($req);
    }

    public function home()
    {
        return view('aaa');
        return response()->json(['res' => 'succesed user login ']);
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:admin');
    // }
    public function __construct()
    {
        $this->middleware('auth:admin');
        // $this->middleware('guest:admin')->except('logout');
    }

    public function index() {
        return view('admin.home');
    }
}

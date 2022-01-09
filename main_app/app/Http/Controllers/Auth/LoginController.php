<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest:web')->except('logout');
        $this->middleware('guest:user')->except('logout');
    }
    protected function guard()
    {
        // return Auth::guard('web');
        return Auth::guard('user');
    }

    public function showLoginForm()
    {
        return view('auth.login');
    }

    public function logout(Request $request)
    {
        // Auth::guard('web')->logout();
        Auth::guard('user')->logout();

        return $this->loggedOut($request);
    }

    public function loggedOut(Request $request)
    {
        return redirect(route('login'));
    }

    public function login(Request $request)
    {
        // : JsonResponse
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json(['name' => Auth::user()->email], 200);
        }

        throw new Exception('ログインに失敗しました。再度お試しください');
    }
}

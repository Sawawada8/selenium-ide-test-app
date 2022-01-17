<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', function () {
    return view('welcome');
});
Route::get('/a', function () {
    $users = \App\Models\User::all();
    return view('demo', ['users' => $users]);
});

Route::get('/aa', 'HomeController@index');
Route::post('/aa', 'HomeController@indexp');

Route::middleware('auth:user')
    // Route::middleware('auth:web')
    ->group(function () {
        Route::get('/home', 'HomeController@home');
    });

Route::namespace('Admin')
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Auth::routes();

        Route::middleware('auth:admin')->group(function () {
            Route::get('home', 'HomeController@index');
        });
    });

// Route::get('/admin/home', 'Admin\HomeController@index');

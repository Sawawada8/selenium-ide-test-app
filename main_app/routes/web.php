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
Route::get('/home', function () {
    return view('welcome');
});
Route::get('/a', function () {
    $users = \App\Models\User::all();
    return view('demo', ['users' => $users]);
});

Route::middleware('auth:web')->get('/aa', 'HomeController@index');

/* admin */
Route::prefix('admin')
    ->namespace('Admin')
    ->name('admin.')
    // ->middleware('auth:admin')
    ->group(function() {
        Auth::routes(['register' => false]);
        Route::get('/home', 'HomeController@index')->name('admin_home');
        Route::middleware('auth:admin')->get('/f', function() {
            return ['a' => 34];
        });
});

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

// user auth
// Route::middleware('auth:user')
//     // Route::middleware('auth:web')
//     ->group(function () {
Route::get('/home', 'HomeController@home');

Route::prefix('{user}')
    ->name('user.')
    ->group(function () {
        Route::get('/', 'HomeController@home')->name('root');
        Route::prefix('{project}')
            ->name('project.')
            ->group(function () {
                Route::get('/', 'ProjectController@show')->name('root');
                Route::get('/edit', 'ProjectController@edit')->name('root');
            });
    });
// });

// admin auth
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

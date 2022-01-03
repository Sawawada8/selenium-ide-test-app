<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class SampleServideProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind(App\Servicies\Sample::class, function ($app) {
            return new App\Servicies\Sample();
        });
        $this->app->bind(App\UseCase\Sample::class, function ($app) {
            return new App\UseCase\Sample();
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}

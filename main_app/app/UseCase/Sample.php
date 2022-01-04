<?php

namespace App\UseCase;

class Sample
{
    public $sample;
    public function __construct(\App\Servicies\Sample $ob)
    {
        $this->sample = $ob;
    }

    public function invoke()
    {
        $this->sample->callHello();
        $this->sample->callHello();
        $this->sample->callHello();
        $this->sample->callHello();
        $this->sample->callHello();
    }
}

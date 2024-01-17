<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Closure;

class Language extends Middleware
{
    public function handle($request, Closure $next, ...$guards)
    {
        if(isset($_COOKIE["lang"]) && $_COOKIE["lang"] == "ru")
            App::setLocale("ru");
        else
            App::setLocale("en");
        return $next($request);
    }
}

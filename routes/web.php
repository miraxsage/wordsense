<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render("Home/Main", ["name" => "Miraxsage from routes"]);
});


Route::get('/profile', function () {
    return Inertia::render("Profile/Profile", ["name" => "Profile from routes"]);
})->name("profile");

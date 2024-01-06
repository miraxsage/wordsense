<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the 'web' middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home/Main', ['name' => 'Miraxsage from routes']);
});

//login
Route::middleware('guest')->group(function(){
    Route::get('login', [LoginController::class, 'show'])->name('login');
    Route::post('login', [LoginController::class, 'login']);
});
Route::get('logout', [LoginController::class, 'logout'])->middleware('auth')->name('logout');

//register
Route::middleware('guest')->group(function(){
    Route::get('register', [RegisterController::class, 'show'])->name('register');
    Route::post('register', [RegisterController::class, 'register']);
});

//reset password
Route::middleware("guest")->group(function(){
    Route::get('forgot-password', [PasswordController::class, 'requestPage'])->name('password.forgot');
    Route::post('forgot-password', [PasswordController::class, 'request']);
    Route::get('reset-password/{token}', [PasswordController::class, 'resetPage'])->name('password.reset');
    Route::post('reset-password/{token}', [PasswordController::class, 'reset']);
});



Route::get('/profile', function () {
    return Inertia::render('Profile/Profile', ['name' => 'Profile from routes']);
})->name('profile');

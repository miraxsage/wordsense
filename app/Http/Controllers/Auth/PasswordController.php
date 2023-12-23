<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class PasswordController extends Controller
{
    public function requestPage(): Response {
        return Inertia::render('Auth/Password', [
            'success' => session('success'),
        ]);
    }

    public function request(Request $request): RedirectResponse {
        $request->validate(['email' => 'required|email']);
        $status = Password::sendResetLink($request->only('email'));
        if ($status == Password::RESET_LINK_SENT) 
            return back()->with('success', __($status));
        throw ValidationException::withMessages(['email' => [trans($status)]]);
    }

    public function resetPage(Request $request, $token): Response {
        return Inertia::render('Auth/Password', [
            'mode' => 'reset', 
            'email' => $request->email, 
            'token' => $token, 
            'success' => session('success')
        ]);
    }

    public function reset(Request $request, $token): RedirectResponse {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);
        $status = Password::reset(
            [...$request->only('email', 'password', 'password_confirmation'), 'token' => $token],
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));
                $user->save();
                event(new PasswordReset($user));
            }
        );
        return $status === Password::PASSWORD_RESET
                    ? redirect()->route('password.reset', $token)->with('success', __($status))
                    : back()->withErrors(['email' => [__($status)]]);
    }
}

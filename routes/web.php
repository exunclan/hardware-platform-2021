<?php

use App\Http\Controllers\AssignmentsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PartsController;
use App\Http\Controllers\SocialAuthController;
use App\Http\Controllers\UserPartController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

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

Route::get('/', function () {
  return Inertia::render('index');
})->name('home');

// ----- Authentication -----
Route::prefix('/auth')
  ->middleware(['guest'])
  ->name('auth.')
  ->group(function () {
    Route::get('/register', [AuthController::class, 'registerShow'])
      ->name('register');
    Route::get('/login', [AuthController::class, 'loginShow'])
      ->name('login');
    Route::post('/register', [AuthController::class, 'register'])
      ->name('handleRegister');
    Route::post('/login', [AuthController::class, 'login'])
      ->name('handleLogin');

    // ----- Social Authentication -----
    Route::prefix('/social')
      ->name('social.')
      ->group(function () {
        Route::prefix('/github')
          ->name('github.')
          ->group(function () {
            Route::get('/', [SocialAuthController::class, 'githubRedirect'])
              ->name('redirect');
            Route::get('/callback', [SocialAuthController::class, 'githubCallback'])
              ->name('callback');
          });
        Route::prefix('/google')
          ->name('google.')
          ->group(function () {
            Route::get('/', [SocialAuthController::class, 'googleRedirect'])
              ->name('redirect');
            Route::get('/callback', [SocialAuthController::class, 'googleCallback'])
              ->name('callback');
          });
      });
  });
Route::get('/auth/logout', [AuthController::class, 'destroy'])
  ->middleware(['auth'])
  ->name('auth.logout');

// ----- Admin -----
Route::prefix('/admin')
  ->middleware(['auth', 'can:admin'])
  ->name('admin.')
  ->group(function () {
    Route::get('/', function () {
      return Inertia::render('admin/index');
    })->name('index');
  });

// ----- Platform -----
Route::prefix('/platform')
  ->middleware(['auth'])
  ->name('platform.')
  ->group(function () {
    Route::get('/', [PartsController::class, 'index'])->name('index');

    // UserPart Operations
    Route::prefix('/')->name("userpart.")->group(function () {
      Route::post('/buy/{id}', [UserPartController::class, 'buy'])->name('buy');
      Route::post('/sell/{id}', [UserPartController::class, 'sell'])->name('sell');
    });
  });

// ----- Assignments -----
Route::prefix('/assignments')
  ->middleware(['auth'])
  ->name('assignments.')
  ->group(function () {
    Route::get('/', [AssignmentsController::class, 'index'])->name('index');
  });




if (App::environment('local')) {
  Route::get('/authn', function () {
    return dd(Auth::user());
  })->middleware(['auth']);
}

<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\CompanyController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/companies', [CompanyController::class, 'index'])->name('companies');
    Route::delete('/companies/destroy/{id}', [CompanyController::class, 'destroy'])->name('companies.destroy');
    Route::get('/companies/edit/{id}', [CompanyController::class, 'edit'])->name('companies.edit');
    Route::patch('/companies/update/{id}', [CompanyController::class, 'update'])->name('companies.update');
});

// companies fields

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/employee/list', [App\Http\Controllers\EmployeesController::class, 'getEmployeeList'])->name('employeeList');
Route::post('/get/employee/', [App\Http\Controllers\EmployeesController::class, 'getEmployee'])->name('individualEmployee');
Route::put('/update/employee/', [App\Http\Controllers\EmployeesController::class, 'updateEmployee'])->name('updateEmployee');
Route::delete('/delete/employee/{employee}', [App\Http\Controllers\EmployeesController::class, 'destroy'])->name('deleteEmployee');
Route::post('/add/employee/', [App\Http\Controllers\EmployeesController::class, 'store'])->name('addEmployee');

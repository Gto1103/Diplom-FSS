<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/tokens/create', [\App\Http\Controllers\ApiTokenController::class, 'createToken']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::apiResource('/hall', \App\Http\Controllers\HallController::class);
    Route::apiResource('/film', \App\Http\Controllers\FilmController::class);
    Route::put('/seats/update', [\App\Http\Controllers\SeatController::class, 'updateMany']);
    Route::apiResource('/seats', \App\Http\Controllers\SeatController::class);
    Route::apiResource('/session', \App\Http\Controllers\SessionController::class);
});

Route::get('/client/calendar/{date}', [\App\Http\Controllers\CommonController::class, 'calendar']);
Route::get('/client/seats/{session}', [\App\Http\Controllers\CommonController::class, 'seatSelect']);
Route::apiResource('/ticket', \App\Http\Controllers\TicketController::class);

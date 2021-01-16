<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\LangsController;
use App\Http\Controllers\Main_categoriesController;
// use Illuminate\Support\Facades\Route as RouterRoute;P
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('products', [ProductsController::class, 'index']);
Route::get('langs', [LangsController::class, 'index']);
Route::get('main_categories', [Main_categoriesController::class, 'index']);
// RouterRoute::view('/{any}', 'app')->where('any', '.*');
// Route::get('/{path?}', function () {
//     return view('app');
// })->where('path', '.*');
// Route::get('product/{id}', 'ProductsController@show');
// Route::post('product', 'ProductsController@store');
// Route::put('product', 'ProductsController@store');
// Route::delete('product/{id}', 'ProductsController@destroy');



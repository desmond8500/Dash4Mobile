<?php

use Illuminate\Routing\RouteGroup;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('index-page');
});

Route::livewire('/index-page', 'pages::⚡index-page')->name('index-page');
Route::livewire('search-page', 'pages::search-page')->name('search-page');
// ERP
// Route::prefix('erp')->group(function () {
    Route::livewire('/erp/clients-page', 'pages::clients-page')->name('clients-page');
    Route::livewire('/erp/projets-page', 'pages::projets-page')->name('projets-page');
    Route::livewire('erp/taches-page', 'pages::taches-page')->name('taches-page');
    Route::livewire('/erp/devis-page', 'pages::devis-page')->name('devis-page');
// });
// Stock
Route::prefix('stock')->group( function () {
    Route::livewire('achats-page', 'pages::achats-page')->name('achats-page');
    Route::livewire('articles-page', 'pages::articles-page')->name('articles-page');
    Route::livewire('marques-page', 'pages::marques-page')->name('marques-page');
    Route::livewire('fournisseurs-page', 'pages::fournisseurs-page')->name('fournisseurs-page');
});

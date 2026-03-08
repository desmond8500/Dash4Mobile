<?php

use Illuminate\Routing\RouteGroup;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('index-page');
});

// Auth
Route::livewire('/login', 'pages::auth.⚡login-page')->name('login');
Route::livewire('/register', 'pages::auth.⚡register-page')->name('register');
Route::livewire('/forgot-password', 'pages::auth.⚡forgot-password-page')->name('forgot-password');
Route::livewire('/reset-password/{token}', 'pages::auth.⚡reset-password-page')->name('reset-password');

// Index
Route::livewire('/index-page', 'pages::⚡index-page')->name('index-page');
Route::livewire('search-page', 'pages::search-page')->name('search-page');


Route::middleware(['auth'])->group(function () {
    // ERP
    Route::livewire('/erp/clients-page', 'pages::erp.⚡clients-page')->name('clients-page');
    Route::livewire('/erp/projets-page', 'pages::erp.⚡projets-page')->name('projets-page');
    Route::livewire('/erp/taches-page', 'pages::erp.⚡taches-page')->name('taches-page');
    Route::livewire('/erp/devis-page', 'pages::erp.⚡devis-page')->name('devis-page');
    // Stock
    Route::livewire('/stock/achat-page/{achat_id}', 'pages::stock.⚡achat-page')->name('achat-page');
    Route::livewire('/stock/achats-page', 'pages::stock.⚡achats-page')->name('achats-page');
    Route::livewire('/stock/articles-page', 'pages::stock.⚡articles-page')->name('articles-page');
    Route::livewire('/stock/article-page/{article_id}', 'pages::stock.⚡article-page')->name('article-page');
    Route::livewire('/stock/marque-page/{marque_id}', 'pages::stock.⚡marque-page')->name('marque-page');
    Route::livewire('/stock/marques-page', 'pages::stock.⚡marques-page')->name('marques-page');
    Route::livewire('/stock/fournisseur-page/{fournisseur_id}', 'pages::stock.⚡fournisseur-page')->name('fournisseur-page');
    Route::livewire('/stock/fournisseurs-page', 'pages::stock.⚡fournisseurs-page')->name('fournisseurs-page');
    // Settings
    Route::livewire('/settings/profile-page', 'pages::settings.⚡profile-page')->name('profile-page');

});

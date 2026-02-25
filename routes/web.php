<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('index-page');
});

Route::livewire('/index-page', 'pages::⚡index-page')->name('index-page');

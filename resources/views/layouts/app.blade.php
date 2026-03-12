<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>{{ $title ?? config('app.name') }}</title>
        <style>
            i { font-size: 1.25rem; }
        </style>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @livewireStyles
    </head>
    <body class="container-xl bg-secondary">
        <div class="sticky-top">
            @livewire('_main.navbar')
        </div>
        {{ $slot }}
        @livewireScripts
    </body>
    <div class="footer rounded mt-2 ">
        <div class="text-center text-muted py-1">
            &copy; {{ date('Y') }} {{ config('app.name') }}. Tous droits réservés.
        </div>
    </div>
</html>

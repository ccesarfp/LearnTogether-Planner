<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->

        <!-- Scripts -->
        @viteReactRefresh
        @viteReactRefresh
        @viteReactRefresh
        @vite(['resources/js/index.jsx'])
    </head>
    <body>
        <div id="root">
        </div>
    </body>
</html>

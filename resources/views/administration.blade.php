<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>AfricaUnity</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body class="">
        <div id="app2" class="bg-white w-full min-h-screen" style="background-image:url('/img/random-shapes2.svg')">
            <Admin></Admin>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>

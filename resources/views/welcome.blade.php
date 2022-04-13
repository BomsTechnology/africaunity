<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>AfricaUnity</title>

        <meta name="title" content="AfricaUnity">
        <meta name="description" content="AfricaUnity the profesional and social network">
        <meta name="keywords" content="africa, unity, blog, job, job offer, article, ads">

        {{-- Open Graph and Faceboo  --}}
        <meta property="og:url"           content="{{ url('') }}" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="AfricaUnity" />
        <meta property="og:description"   content="AfricaUnity the profesional and social network" />
        <meta property="og:image"         content="{{ asset('/img') }}/logo_au.png" />

        {{-- Twitter --}}
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{ url('') }}">
        <meta property="twitter:title" content="AfricaUnity">
        <meta property="twitter:description" content="AfricaUnity the profesional and social network">
        <meta property="twitter:image" content="{{ asset('/img')  }}/logo_au.png">

        
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body class="bg-white py-3" style="background-image:url('/img/random-shapes.svg')">
        <div id="app" class="bg-white  xl:w-[90%]  w-full mx-auto min-h-screen">
            <router-view></router-view>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>

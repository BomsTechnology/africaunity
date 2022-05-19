<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>AfricaUnity</title>

        @laravelPWA

        <meta name="title" content="AfricaUnity">
        <meta name="description" content="AfricaUnity the profesional and social network">
        <meta name="keywords" content="africa, unity, blog, job, job offer, article, ads">

        {{-- Open Graph and Facebook  --}}
        <meta property="og:url"           content="{{ url('') }}" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="AfricaUnity" />
        <meta property="og:description"   content="AfricaUnity the profesional and social network" />
        <meta property="og:image"         content="{{ asset('/img/logo_au.png') }}" />

        {{-- Twitter --}}
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{ url('') }}">
        <meta property="twitter:title" content="AfricaUnity">
        <meta property="twitter:description" content="AfricaUnity the profesional and social network">
        <meta property="twitter:image" content="{{ asset('/img/logo_au.png')  }}">

        <link rel="icon" type="image/x-icon" href="{{ asset('/img/ico.png')  }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/default.min.css" />
    </head>
    <body class="bg-white" style="background-image:url('/img/random-shapes.svg')">

        <div id="app" class="bg-white  xl:w-[90%]  w-full mx-auto min-h-screen">
            <App></App>
        </div>
        
        @include('cookie-consent::index')
        <div class="fixed md:hidden z-50 bottom-0 inset-x-0 pb-2">
            <div class=" flex justify-center">
                <button class="px-2 py-1 bg-primary-blue text-white shadow-xl rounded download-app">Télécharger AfricaUnity</button>
            </div> 
        </div>
        <script src="https://cdn.jsdelivr.net/npm/sceditor@3/minified/sceditor.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sceditor@3/minified/formats/bbcode.min.js"></script>
        <script src="{{ asset('js/app.js') }}"></script>
        <!--Start of Tawk.to Script-->
        <script type="text/javascript">
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/6141bd67d326717cb6818cb1/1ffkcnnr9';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        </script>
        <!--End of Tawk.to Script-->
    </body>
</html>

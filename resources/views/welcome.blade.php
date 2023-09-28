<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>AfricaUnity | The profesional and social network</title>

    @laravelPWA

    <meta name="title" content="{{ isset($meta_title) ? $meta_title : 'AfricaUnity' }}">
    <meta name="description" content="{{ isset($meta_description) ? $meta_description : 'AfricaUnity the professional and social network' }}">


    <meta name="keywords" content="africa, unity, blog, job, job offer, article, ads">

    {{-- Open Graph and Facebook --}}
    <meta property="og:url" content="{{ url('') }}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ isset($meta_title) ? $meta_title : 'AfricaUnity' }}" />
    <meta property="og:description" content="{{ isset($meta_description) ? $meta_description : 'AfricaUnity the professional and social network' }}" />
    <meta property="og:image" content="{{ isset($meta_image) ? asset($meta_image) : asset('/img/logo_au.png') }}" />


    {{-- Twitter --}}
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ url('') }}">
    <meta property="twitter:title" content="{{ isset($meta_title) ? $meta_title : 'AfricaUnity' }}">
    <meta property="twitter:description" content="{{ isset($meta_description) ? $meta_description : 'AfricaUnity the professional and social network' }}">

    <meta property="twitter:image" content="{{ isset($meta_image) ? asset($meta_image) : asset('/img/logo_au.png') }}">



    <link rel="icon" type="image/x-icon" href="{{ asset('/img/ico.png') }}">
    


</head>

<body class="bg-white" style="background-image:url('/img/random-shapes.svg')">

    <div id="app" class="">

    </div>

    @vite(['resources/js/app.js'])
    <script type="module" src="https://cdn.jsdelivr.net/npm/emoji-picker-element@^1/index.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sceditor@3/minified/sceditor.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sceditor@3/minified/formats/xhtml.min.js"></script>

    <!--Start of Tawk.to Script-->
    <script type="text/javascript">
        var Tawk_API = Tawk_API || {},
            Tawk_LoadStart = new Date();
        (function() {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/6141bd67d326717cb6818cb1/1ffkcnnr9';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    </script>
    <!--End of Tawk.to Script-->
</body>

</html>

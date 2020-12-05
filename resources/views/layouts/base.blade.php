<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel + Vue + Tailwind</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
</head>

<body class="antialiased">
    <div id="app" class="bg-blue-100 w-full min-h-screen flex items-center">
        <div class="max-w-screen-md mx-auto h-full">
            <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
                @yield('main')
            </div>
        </div>
    </div>

    <script defer src="{{ mix('js/app.js') }}"></script>
</body>

</html>

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- <meta name="csrf-token" content="{{ csrf_token() }}"> --}}
    <title></title>
  </head>
  <body>
    @section('header')

    @show

    <main>
      <div class="container">
        @yield('content')
      </div>
    </main>

    @section('footer')

    @show
  </body>
</html>

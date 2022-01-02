@extends('layouts.app')
@section('content')
<h1>hello login admin</h1>


  <form method="POST" action="{{ route('admin.login') }}">
    @csrf

    <div class="form-group">
      <input class="form-control" type="text" name="email" placeholder="ユーザー名">
    </div>
    {{-- <div class="form-group">
      <input class="form-control" type="text" name="name" placeholder="ユーザー名">
    </div> --}}
    <div class="form-group">
      <input class="form-control" type="password" name="password" placeholder="パスワード">
    </div>
    <input style="width:50%;" class="btn btn-lg btn-primary" type="submit" value="ログインする">

  </form>
@endsection

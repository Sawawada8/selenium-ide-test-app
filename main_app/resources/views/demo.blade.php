
@foreach ($users as $user)
<div>{{ $user->name }}</div>
<div>{{ $user->id }}</div>
<div>{{ $user->email }}</div>

@endforeach

<?php

namespace App\Http\Controllers;

use App\Models\Part;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class UsersController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return Inertia::render('admin/users', [
      'users' => User::where('admin', false)->get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\User $user
   * @return \Illuminate\Http\Response
   */
  public function show(User $user)
  {

    $u = User::with(['cart_parts', 'cart_parts.part'])->withCount('cart_parts')->where('id', $user->id)->first();
    $grouped_parts = $user->cart_parts->groupBy('part_id');
    return Inertia::render('admin/user', [
      'user' => $u,
      'grouped_parts' => $grouped_parts,
      'parts' => Part::all()
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }



  /**
   * Change password for specified resource.
   *
   * @param  \App\Models\User $user
   * @return \Illuminate\Http\Response
   */
  public function changePassword(User $user)
  {
    $body = request()->validate(['password' => 'required|min:8|max:24']);

    $user->password = Hash::make($body['password']);
    $user->save();

    return redirect()->back();
  }


  /**
   * Login as $user
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Http\Response
   */
  public function login(User $user)
  {
    Auth::login($user, true);
    return redirect('/');
  }
}

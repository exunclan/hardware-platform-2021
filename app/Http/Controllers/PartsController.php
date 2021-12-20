<?php

namespace App\Http\Controllers;

use App\Models\Part;
use App\Models\User;
use App\Models\UserPart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PartsController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    // ddd("success");'cart_parts', 'cart_parts.part'
    // return Inertia::render('platform/index', ["parts" => Part::where('id', '>', 49)->get()]);
    $user = User::with(['cart_parts', 'cart_parts.part'])->withCount('cart_parts')->where('id', Auth::id())->first();
    // $quantity = $user->part->where('id', $part_id)->whereNotNull('sold_at')->get();


    $grouped_parts = $user->cart_parts->groupBy('part_id');

    // ddd($grouped_parts->all());

    return Inertia::render('platform/index', [
      "parts" => Part::all(),
      "user" => $user,
      "grouped_parts" => $grouped_parts->all(),
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
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
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
}

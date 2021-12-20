<?php

namespace App\Http\Controllers;

use App\Events\BuyPart;
use App\Models\Part;
use App\Models\UserPart;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use function React\Promise\Stream\first;

class UserPartController extends Controller
{

  public function buy($id)
  {
    $part = Part::where('id', $id)->first();
    // $part = Part::where('id', $id)->first()->buy;
    $userPart = new UserPart([
      'user_id' => Auth::id(),
      'part_id' => $part->id,
      'bought_at' =>  Carbon::now(),
      'buy_price' => $part->price
    ]);
    $userPart->save();

    // listener code 
    $part->price = $part->price - 1;
    $part->save();

    // new partPrice

    broadcast(new BuyPart($part, Auth::user()));

    return redirect()->route('platform.index');
  }
  public function sell($id)
  {
    $part = Part::where('id', $id)->first();
    $user_part = UserPart::where('user_id', Auth::id())->where('part_id', $part->id)->where('sold_at', null)->first();
    if ($user_part === null) {
      return redirect()->route('platform.index');
    }
    $user_part->update(['sold_at' => Carbon::now(), "sell_price" => $part->price]);

    return redirect()->route('platform.index');
  }
}

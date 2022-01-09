<?php

namespace App\Http\Controllers;

use App\Events\BuyPart;
use App\Events\SellPart;
use App\Models\Part;
use App\Models\User;
use App\Models\UserPart;
use App\Rules\PartBuySellCheck;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

use function React\Promise\Stream\first;

class UserPartController extends Controller
{

  public function buy(Request $request)
  {
    $data = $request->validate([
      'partId' => [
        'required', new PartBuySellCheck
      ]
    ]);
    $user = User::where('id', Auth::id())->first();
    $part = Part::where('id', $request->partId)->first();

    $userPart = new UserPart([
      'user_id' => Auth::id(),
      'part_id' => $part->id,
      'bought_at' =>  Carbon::now(),
      'buy_price' => $part->price
    ]);

    $user->balance = $user->balance - $part->price;
    $user->save();

    $userPart->save();
    broadcast(new BuyPart($part, Auth::user()));

    // return redirect()->route('platform.index')->withFlash(['message' => "this is a flash message"]);
    // return Inertia::share("flash", ["message" => "THIS IS A FLASH MESSAGE"]);

    return redirect()->route('platform.index');
  }
  public function sell($id)
  {
    $user = User::where('id', Auth::id())->first();
    $part = Part::where('id', $id)->first();

    $user_part = UserPart::where('user_id', Auth::id())->where('part_id', $part->id)->where('sold_at', null)->first();
    if ($user_part === null) {
      return redirect()->route('platform.index');
    }
    $user_part->update(['sold_at' => Carbon::now(), "sell_price" => $part->price]);


    broadcast(new SellPart($part, Auth::user()));

    $user->balance = $user->balance + $part->price;
    $user->save();

    return redirect()->route('platform.index');
  }
}

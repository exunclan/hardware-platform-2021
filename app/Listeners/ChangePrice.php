<?php

namespace App\Listeners;

use App\Events\SellPart;
use Illuminate\Support\Facades\Event;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class ChangePrice
{
  /**
   * Create the event listener.
   *
   * @return void
   */
  public function __construct()
  {
    //
  }

  public function handleBuyPart($event)
  {
  }

  public function handleSellPart($event)
  {
  }

  public function subscribe($events)
  {
    $events->listen(
      'App\Events\BuyPart',
      'App\Models\Part@handleBuy',
    );

    $events->listen(
      'App\Events\SellPart',
      'App\Models\Part@handleSell',
    );
  }
}

<?php

namespace App\Events;

use App\Models\Part;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class SellPart implements ShouldBroadcast
{
  use Dispatchable, InteractsWithSockets, SerializesModels;

  public $part;
  public $user;


  /**
   * Create a new event instance.
   *
   * @return void
   */
  public function __construct($part, $user)
  {
    $this->part = $part;
    $this->user = $user;
  }

  public function broadcastWith()
  {
    return ['part' => $this->part, 'user' => $this->user];
  }


  /**
   * Get the channels the event should broadcast on.
   *
   * @return \Illuminate\Broadcasting\Channel|array
   */
  public function broadcastOn()
  {
    return new Channel('parts');
  }
}

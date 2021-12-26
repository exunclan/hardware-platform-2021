<?php

namespace App\Models;

use App\Events\PriceChanged;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Part extends Model
{
  protected $fillable = [
    'name',
    'company',
    'price',
    'type',
  ];

  public function handleBuy($event)
  {
    $event->part->price = round($event->part->price + (10 / 100 * $event->part->price), 1);
    $event->part->save();
    broadcast(new PriceChanged($event->part));
    // PartPrice code 
    $partPrice = new PartPrice(["part_id" => $event->part->id, "price" => $event->part->price]);
    $partPrice->save();
  }

  public function handleSell($event)
  {
    $event->part->price = round($event->part->price - (5 / 100 * $event->part->price), 1);
    $event->part->save();
    broadcast(new PriceChanged($event->part));
    // PartPrice code 
    $partPrice = new PartPrice(["part_id" => $event->part->id, "price" => $event->part->price]);
    $partPrice->save();
  }

  use HasFactory;
}

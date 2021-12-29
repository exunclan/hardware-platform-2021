<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPart extends Model
{
  protected $table = 'user_part';
  protected $fillable = [
    'user_id',
    'part_id',
    'buy_price',
    'bought_at',
    'sell_price',
    'sold_at',
  ];

  public function part()
  {
    return $this->belongsTo(Part::class, 'part_id');
  }
  // public function part_count()
  // {
  //   return $this->belongsTo(Part::class, 'part_id');
  // }

  use HasFactory;
}

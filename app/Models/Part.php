<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Part extends Model
{
  protected $fillable = [
    'name',
    'company',
    'price',
    'type',
  ];


  // public function setBuyAttribute()
  // {
  //   return $this->name;
  // }
  // public function sell()
  // {
  //   return $this;
  // }



  use HasFactory;
}

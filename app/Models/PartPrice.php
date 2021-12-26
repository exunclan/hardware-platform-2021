<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartPrice extends Model
{
  protected $fillable = [
    'price',
    'part_id'
  ];
  use HasFactory;
}

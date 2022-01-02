<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{

  protected $fillable = [
    'title',
    'description',
    'budget',
    'active',
  ];
  use HasFactory;
}

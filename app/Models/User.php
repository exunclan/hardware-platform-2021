<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name',
    'email',
    'password',
    // 'provider',
    // 'social_id',
    // 'social_username',
    // 'social_avatar'

    // add it to hidden during production
    // 'admin',
  ];


  public function cart_parts_all()
  {
    return $this->hasMany(UserPart::class, 'user_id')->orderBy('created_at', 'desc');
  }
  public function cart_parts()
  {
    return $this->cart_parts_all()->where('sold_at', '=', null);
  }



  // public function parts()
  // {
  //   return $this->hasManyThrough(Part::class, UserPart::class, 'part_id', 'id');
  // }

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
    'password',
    'remember_token',
  ];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];

  public function hashPassword()
  {
    $this->password = Hash::make($this->password);
  }

  public function verifyPassword($password)
  {
    return Hash::check($password, $this->password);
  }
}

<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class UsersSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    User::factory()->times(10)->create();
    User::factory()->times(10)->unverified()->create();
    (new User([
      'name' => 'Mukesh Kumar',
      'email' => 'admin@dpsrkp.net',
      'password' => Hash::make('adminadmin'),
      'admin' => true,
      'email_verified_at' => now(),
      'remember_token' => Str::random(10),
    ]))->save();

    (new User([
      'name' => 'Saksham Raheja',
      'email' => 'sakshamraheja11@gmail.com',
      'password' => Hash::make('sakshamsaksham'),
      'admin' => false,
      'email_verified_at' => now(),
      'remember_token' => Str::random(10),

    ]))->save();
  }
}

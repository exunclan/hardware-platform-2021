<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    // User::factory(100)->create();

    // (new \App\Models\User([
    //   'name' => 'Admin Admin',
    //   'email' => 'admin@example.com',
    //   'password' => Hash::make('adminadmin'),
    //   'admin' => true
    // ]))->save();
    $this->call(UsersSeeder::class);
    $this->call(AssignmentsSeeder::class);
    $this->call(PartsSeeder::class);
  }
}

<?php

namespace Database\Seeders;

use App\Models\Assignment;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AssignmentsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    Assignment::factory(1)->create();
  }
}

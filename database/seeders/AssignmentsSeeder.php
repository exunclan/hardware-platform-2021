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
    (new Assignment([
      'title' => "Hardware Platform Prompt",
      'description' => "Welcome to the Hardware event for Exun 2021-22. You are the Senior Developer of NuxE Corp.; a start-up that focuses on blockchain, ML and Data Science. Your company has provided you with 2022 nuxE to build your upgraded personalized setup to increase work efficiency. On this platform, you are required to build your pc with that assigned budget. Be careful, though; as the price of the parts on the platform changes dynamically due to the silicon and supply shortage taking place around the world. 

Your workload for this task is cryptocurrency mining, hashes, encryption along with virtualization and running the public blockchain node for your company.

2022 nuxE
",
      'budget' => "2010",
      'active' => true,
    ]))->save();
  }
}

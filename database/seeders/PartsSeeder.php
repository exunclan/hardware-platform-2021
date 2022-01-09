<?php

namespace Database\Seeders;

use App\Models\Part;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    Part::factory(50)->create();


    //     'name',
    // 'company',
    // 'price',
    // 'type',
    // $sheetURL = "";
    // $sheetContent = explode("\r\n", file_get_contents($sheetURL));
    // $lines = array_slice($sheetContent, 1);
    // $rows = collect();
    // $now = Carbon::now('Asia/Kolkata');
    // foreach ($lines as $line) {
    //   $row = str_getcsv($line, "\t");
    //   $rows->push([
    //     'id' => $row[0],
    //     'name' => $row[1],
    //     'company' => $row[2],
    //     'price' => $row[3],
    //     'type' => $row[4],
    //     'created_at' => $now,
    //     'updated_at' => $now,
    //   ]);
    // }

    // DB::table('parts')->upsert(
    //   $rows->toArray(),
    //   ['id'],
    //   ['circle_id', 'points', 'question', 'source_hint', 'answer']
    // );
  }
}

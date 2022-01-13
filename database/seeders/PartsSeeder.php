<?php

namespace Database\Seeders;

use App\Models\Part;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PartsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    // Part::factory(50)->create();


    //     'name',
    // 'company',
    // 'price',
    // 'type',
    // $sheetURL = "https://docs.google.com/spreadsheets/d/1zW1q16xYa84JTEysp9v1L9ypIJ_kWLfFHrMlSW1moJs/edit#gid=0";
    $sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQVFK2JToiYzKFW2G_FUCBHv3Px2KWSu9O6Ns7SobRP7khKgEy5nSZn7kIr3_J52DirCMNnVSsd__1D/pub?gid=0&single=true&output=csv";
    $sheetContent = explode("\r\n", file_get_contents($sheetURL));
    $lines = array_slice($sheetContent, 1);
    $rows = collect();
    $now = Carbon::now('Asia/Kolkata');

    foreach ($lines as $line) {
      $row = str_getcsv($line, ",");
      $rows->push([
        'id' => $row[0],
        'name' => $row[1],
        'company' => $row[2],
        'price' => $row[3],
        'type' => $row[4],
        'created_at' => $now,
        'updated_at' => $now,
      ]);
    }

    // return dd($rows);

    DB::table('parts')->upsert(
      $rows->toArray(),
      ['id'],
      ['name', 'company', 'price', 'type']
    );
  }
}

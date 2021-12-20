<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserPartTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('user_part', function (Blueprint $table) {
      $table->id();
      // user_id, part_id, bought_at, sold_at?, buy_price, sell_price?
      $table->foreignId("user_id")->constrained("users");
      $table->foreignId("part_id")->constrained("parts");
      $table->string('buy_price');
      $table->timestamp('bought_at', $precision = 0);
      $table->string('sell_price')->nullable();
      $table->timestamp('sold_at', $precision = 0)->nullable();


      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('user_part');
  }
}

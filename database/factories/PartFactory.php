<?php

namespace Database\Factories;

use App\Models\Part;
use Illuminate\Database\Eloquent\Factories\Factory;

class PartFactory extends Factory
{
  protected $model = Part::class;
  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'name' => $this->faker->name(),
      'company' => $this->faker->name(),
      // 'price' => $this->faker->numberBetween(1000, 40000),
      'price' => "100",
      'type' => $this->faker->name(),
    ];
  }
}

<?php

namespace Database\Factories;

use App\Models\Assignment;
use Illuminate\Database\Eloquent\Factories\Factory;

class AssignmentFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Assignment::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    // return [
    //   'title' => $this->faker->name(),
    //   'description' => $this->faker->text(200),
    //   'budget' => "1000",
    //   'active' => true
    // ];
  }
}

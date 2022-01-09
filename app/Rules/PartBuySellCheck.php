<?php

namespace App\Rules;

use App\Models\Level;
use App\Models\Part;
use App\Models\UserAttempt;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Log;

class PartBuySellCheck implements Rule
{
  /**
   * Create a new rule instance.
   *
   * @return void
   */
  public function __construct()
  {
    //
  }

  /**
   * Determine if the validation rule passes.
   *
   * @param  string  $attribute
   * @param  mixed  $value
   * @return bool
   */
  public function passes($attribute, $value)
  {
    $balance = request()->user()->balance;
    $part = Part::where('id', $value)->first();
    Log::info($part);

    return $balance >= $part->price;
  }

  /**
   * Get the validation error message.
   *
   * @return string
   */
  public function message()
  {
    return "You have insufficient balance to buy the product";
  }
}

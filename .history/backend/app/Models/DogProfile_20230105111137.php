<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DogProfile extends Model
{
    use HasFactory;
   
    protected $fillable = ['name','vaccination','vaccine_date','spot_on_date','spot_on','neuter','gender','dog_character','appearance','location_name','color','image','note'];
    $vaccine_

    
}

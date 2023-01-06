<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DogProfile extends Model
{
    use HasFactory;
   
    protected $fillable = ['name','vaccination','spot_on','neuter','gender','dog_character','appearance','location_name','color','image','note'];
    protected $casts = ['vaccine_date' => 'date:d/m/Y','spot_on_date' => 'date:d/m/Y',]
    // protected $dateFormat = 'd/m/Y';
}

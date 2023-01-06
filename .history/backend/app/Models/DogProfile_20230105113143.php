<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use SebastianBergmann\Environment\Console;

class DogProfile extends Model
{
    use HasFactory;
   
    protected $fillable = ['name','vaccination','vaccine_date','spot_on_date','spot_on','neuter','gender','dog_character','appearance','location_name','color','image','note'];
    
    public function setVaccineDateAttribute($value){
        $this->attributes['vaccine_date'] = Carbon::createFromFormat(format:'Y-m-d H:i:s',$value)->format(format:'d/')
    }
    
}

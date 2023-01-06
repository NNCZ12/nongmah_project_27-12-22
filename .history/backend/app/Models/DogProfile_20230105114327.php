<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DogProfile extends Model
{
    use HasFactory;
   
    protected $fillable = ['name','vaccination','vaccine_date','spot_on_date','spot_on','neuter','gender','dog_character','appearance','location_name','color','image','note'];
    

    public function toArray($request)
{
    return [
        'created_at' => $this->created_at->format('Y-m-d H:i:s')
    ];
}
}

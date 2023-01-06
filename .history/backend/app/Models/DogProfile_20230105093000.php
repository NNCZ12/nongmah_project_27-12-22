<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DogProfile extends Model
{
    use HasFactory;

    protected $fillable = ['name','vaccination',,'spot_on','neuter','gender','dog_character','appearance','location','color','image','note','location_id'];
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dog_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->text('image');
            $table->string('vaccination');
            $table->date('vaccine_date')->nullable();
            $table->string('spot_on');
            $table->date('spot_on_date')->nullable();
            $table->string('neuter');
            $table->string('gender');
            $table->string('dog_character');
            $table->string('appearance');
            $table->string('color');
            $table->string('location_name');
            $table->string('latitude');
            $table->string('longi');

            $table->text('note')->nullable();

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
        Schema::dropIfExists('dog_profiles');
    }
};

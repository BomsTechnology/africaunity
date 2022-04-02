<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivityAreaDetail extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activity_area_detail', function (Blueprint $table) {
            $table->id();
            $table->foreignId('detail_id')->constrained()->onDelete('cascade')->nullable();
            $table->foreignId('activity_area_id')->constrained()->onDelete('cascade')->nullable();
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
        Schema::dropIfExists('activity_area_detail');
    }
}

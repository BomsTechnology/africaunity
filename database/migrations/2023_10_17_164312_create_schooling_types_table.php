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
        Schema::create('schooling_types', function (Blueprint $table) {
            $table->id();
            $table->string('name_fr');
            $table->string('name_en')->nullable();
            $table->string('name_es')->nullable();
            $table->string('name_pt')->nullable();
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
        Schema::dropIfExists('schooling_types');
    }
};

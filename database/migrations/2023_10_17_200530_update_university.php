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
        Schema::table('universities', function (Blueprint $table) {
            $table->unsignedBigInteger('legal_status_id')->nullable();
            $table->unsignedBigInteger('level_study_id')->nullable();
            $table->unsignedBigInteger('university_sector_id')->nullable();
            $table->unsignedBigInteger('schooling_type_id')->nullable();
            $table->string('registration_period')->nullable();
            $table->string('firstday_university')->nullable();
            $table->unsignedBigInteger('required_level')->nullable();
            
            $table->foreign('legal_status_id')->references('id')->on('legal_statuses');
            $table->foreign('level_study_id')->references('id')->on('level_studies');
            $table->foreign('university_sector_id')->references('id')->on('university_sectors');
            $table->foreign('schooling_type_id')->references('id')->on('schooling_types');
            $table->foreign('required_level')->references('id')->on('level_studies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobOffersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_offers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('description');
            $table->integer('status')->default(1);
            $table->string('location');
            $table->string('company_name');
            $table->string('company_email');
            $table->string('company_website');
            $table->string('company_logo')->nullable();
            $table->string('min_price');
            $table->string('max_price');
            $table->foreignId('user_id')->constrained();
            $table->foreignId('currency_id')->constrained();
            $table->foreignId('year_experience_id')->constrained();
            $table->foreignId('work_department_id')->constrained();
            $table->foreignId('work_mode_id')->constrained();
            $table->foreignId('size_company_id')->constrained();
            $table->foreignId('offer_type_id')->constrained();
            $table->foreignId('level_study_id')->constrained();
            $table->foreignId('city_id')->constrained();
            $table->foreignId('zone_id')->constrained();
            $table->foreignId('continent_id')->constrained();
            $table->foreignId('country_id')->constrained();
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
        Schema::dropIfExists('job_offers');
    }
}

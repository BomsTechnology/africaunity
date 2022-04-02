<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('details', function (Blueprint $table) {
            $table->id();
            $table->string('status')->nullable();
            $table->longText('social_object')->nullable();
            $table->longText('goal_attribution')->nullable();
            $table->longText('presentation')->nullable();
            $table->integer('sex')->nullable();
            $table->string('name_responsible')->nullable();
            $table->string('adress')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('phone_number_2')->nullable();
            $table->date('navite_date')->nullable();
            $table->string('website')->nullable();
            $table->string('youtube')->nullable();
            $table->longText('other_activity')->nullable();
            $table->longText('search_partner')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->nullable();
            $table->foreignId('native_country')->constrained('countries')->nullable();
            $table->foreignId('residence_country')->constrained('countries')->nullable();
            $table->foreignId('business_type_id')->constrained()->nullable();
            $table->foreignId('business_size_id')->constrained()->nullable();
            $table->foreignId('legal_status_id')->constrained()->nullable();
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
        Schema::dropIfExists('details');
    }
}

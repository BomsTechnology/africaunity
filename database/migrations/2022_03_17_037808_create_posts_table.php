<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('content');
            $table->string('image')->nullable();
            $table->integer('status')->default(1);
            $table->enum('type', ['article', 'propau']);
            $table->enum('language', ['fr', 'en', 'es', 'pt']);
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('continent_id')->constrained();
            $table->foreignId('zone_id')->constrained();
            $table->foreignId('country_id')->constrained();
            $table->foreignId('ministry_id')->constrained();
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
        Schema::dropIfExists('posts');
    }
}

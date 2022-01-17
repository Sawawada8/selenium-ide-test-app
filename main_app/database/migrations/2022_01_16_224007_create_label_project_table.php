<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLabelProjectTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('label_project', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('label_id')->unsigned();
            $table->bigInteger('project_id')->unsigned();
            // $table->foreignId('project_id')->constrained();
            $table->timestamps();

            $table
                ->foreign('label_id')
                ->references('id')
                ->on('labels');
            $table
                ->foreign('project_id')
                ->references('id')
                ->on('projects');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('label_project');
    }
}

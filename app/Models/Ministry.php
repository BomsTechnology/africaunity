<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ministry extends Model
{
    use HasFactory;

    protected $fillable = [
        'color',
        'name_fr',
        'name_en',
        'name_es',
        'name_pt',
    ];

    public function posts(){
        return $this->hasMany(Post::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zone extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_fr',
        'name_en',
        'name_es',
        'name_pt',
        'continent_id'
    ];

    public function posts(){
        return $this->hasMany(Post::class);
    }
}

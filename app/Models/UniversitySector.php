<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UniversitySector extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_fr',
        'name_en',
        'name_es',
        'name_pt',
    ];

    public function universities(){
        return $this->hasMany(University::class);
    }
}

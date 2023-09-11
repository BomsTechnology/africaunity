<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Continent extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_fr',
        'name_en',
        'name_es',
        'name_pt',
    ];

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function demonstrations()
    {
        return $this->hasMany(Demonstration::class);
    }

    public function jobOffers()
    {
        return $this->hasMany(JobOffer::class);
    }

    public function universities()
    {
        return $this->hasMany(University::class);
    }
}

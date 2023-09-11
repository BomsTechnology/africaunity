<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $fillable = [
        'code_iso',
        'name_fr',
        'name_en',
        'name_es',
        'name_pt',
        'zone_id'
    ];

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function universities()
    {
        return $this->hasMany(University::class);
    }

    public function demonstrations()
    {
        return $this->hasMany(Demonstration::class);
    }

    public function jobOffers()
    {
        return $this->hasMany(JobOffer::class);
    }

    public function details()
    {
        return $this->hasMany(Detail::class);
    }
}

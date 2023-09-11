<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'symbol',
    ];

    public function announcements()
    {
        return $this->hasMany(Announcement::class);
    }

    public function jobOffers()
    {
        return $this->hasMany(JobOffer::class);
    }
}

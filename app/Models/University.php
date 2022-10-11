<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image',
        'continent_id',
        'country_id',
        'city_id',
        'zone_id'
    ];
    public function zone()
    {
        return $this->belongsTo(Zone::class);
    }
    public function continent()
    {
        return $this->belongsTo(Continent::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function city()
    {
        return $this->belongsTo(Ministry::class);
    }

    public function announcements()
    {
        return $this->hasMany(Announcement::class);
    }
}

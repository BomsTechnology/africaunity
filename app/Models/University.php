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
        'zone_id',
        'legal_status_id',
        'level_study_id',
        'university_sector_id',
        'schooling_type_id',
        'required_level',
        'registration_period',
        "firstday_university",
        'type',
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

    public function legalStatus()
    {
        return $this->belongsTo(LegalStatus::class);
    }

    public function levelStudy()
    {
        return $this->belongsTo(LevelStudy::class);
    }

    public function requiredLevel()
    {
        return $this->belongsTo(LevelStudy::class);
    }

    public function universitySector()
    {
        return $this->belongsTo(UniversitySector::class);
    }

    public function schoolingType()
    {
        return $this->belongsTo(SchoolingType::class);
    }
    
}

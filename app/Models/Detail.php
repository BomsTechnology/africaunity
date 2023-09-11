<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    use HasFactory;

    protected $fillable = [
        'status_id',
        'social_object',
        'goal_attribution',
        'presentation',
        'sex',
        'cv_path',
        'name_responsible',
        'adress',
        'phone_number',
        'phone_number_2',
        'navite_date',
        'website',
        'youtube',
        'other_activity',
        'search_partner',
        'user_id',
        'business_type_id',
        'business_size_id',
        'legal_status_id',
        'native_country',
        'residence_country'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function navtive_country()
    {
        return $this->belongsTo(Country::class, "native_country");
    }

    public function residence_country()
    {
        return $this->belongsTo(Country::class, "residence_country");
    }

    public function legalStatus()
    {
        return $this->belongsTo(LegalStatus::class);
    }

    public function businessSize()
    {
        return $this->belongsTo(BusinessSize::class);
    }

    public function businessType()
    {
        return $this->belongsTo(BusinessType::class);
    }

    public function activity_areas()
    {
        return $this->belongsToMany(ActivityArea::class);
    }

    public function languages()
    {
        return $this->belongsToMany(Language::class);
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }
}

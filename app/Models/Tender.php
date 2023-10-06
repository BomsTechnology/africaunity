<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tender extends Model
{
    use HasFactory;


    protected $fillable = [
        'status',
        'title',
        'description',
        'reference',
        'location',
        'company_name',
        'company_email',
        'company_website',
        'company_logo',
        'min_price',
        'max_price',
        'user_id',
        'currency_id',
        'work_department_id',
        'work_mode_id',
        'size_company_id',
        'zone_id',
        'continent_id',
        'end_date',
        'country_id',
        'city_id',
        'attachement'
    ];

    protected $casts = [
        'end_date' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function continent()
    {
        return $this->belongsTo(Continent::class);
    }

    public function zone()
    {
        return $this->belongsTo(Zone::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function size_company()
    {
        return $this->belongsTo(SizeCompany::class);
    }

    public function work_mode()
    {
        return $this->belongsTo(WorkMode::class);
    }

    public function work_department()
    {
        return $this->belongsTo(WorkDepartment::class);
    }


    public function currency()
    {
        return $this->belongsTo(Currency::class);
    }

    public function activity_areas()
    {
        return $this->belongsToMany(ActivityArea::class);
    }

    public function languages()
    {
        return $this->belongsToMany(Language::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demonstration extends Model
{
    use HasFactory;


    protected $fillable = [
        'status',
        'title',
        'description',
        'image',
        'hourly',
        'place_link',
        'enter_type',
        'price',
        'phone',
        'email',
        'start_date',
        'end_date',
        'user_id',
        'demonstration_type_id',
        'demonstration_mode_id',
        'demonstration_niche_id',
        'city_id',
        'zone_id',
        'continent_id',
        'country_id',
        'currency_id',
        'ministry_id',
        'activity_area_id',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function demonstrationMode()
    {
        return $this->belongsTo(DemonstrationMode::class);
    }

    public function demonstrationType()
    {
        return $this->belongsTo(DemonstrationType::class);
    }

    public function demonstrationNiche()
    {
        return $this->belongsTo(DemonstrationNiche::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function ministry()
    {
        return $this->belongsTo(Ministry::class);
    }

    public function activityArea()
    {
        return $this->belongsTo(ActivityArea::class);
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
    
    // public function getImageAttribute($path) 
    // {
    //      if (!$path || Str::startsWith($path, 'http')) {
    //         return $path;
    //     }

    //     return url(Storage::url($path));
    // }
}

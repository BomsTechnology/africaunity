<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'image',
        'status',
        'type',
        'language',
        'user_id',
        'continent_id',
        'zone_id',
        'country_id',
        'ministry_id'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function continent(){
        return $this->belongsTo(Continent::class);
    }

    public function zone(){
        return $this->belongsTo(Zone::class);
    }

    public function country(){
        return $this->belongsTo(Country::class);
    }

    public function ministry(){
        return $this->belongsTo(Ministry::class);
    }
}

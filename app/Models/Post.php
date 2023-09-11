<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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
        'ministry_id',
        'city_id'
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

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

    public function comments(){
        return $this->hasMany(Comment::class);
    }

    public function ministries(): BelongsToMany
    {
        return $this->belongsToMany(Ministry::class);
    }

    public static function boot() {
        parent::boot();
        self::deleting(function($post) {
            $post->comments()->each(function($comment) {
                $comment->delete();
            });
        });
    }
    
    // public function getImageAttribute($path) 
    // {
    //      if (!$path || Str::startsWith($path, 'http')) {
    //         return $path;
    //     }

    //     return url(Storage::url($path));
    // }
}

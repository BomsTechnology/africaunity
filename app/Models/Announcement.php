<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'image',
        'status',
        'adress',
        'phone',
        'email',
        'website',
        'price',
        'user_id',
        'currency_id',
        'category_announcement_id',
        'university_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function announcementComments()
    {
        return $this->hasMany(AnnouncementComment::class);
    }

    public function university()
    {
        return $this->belongsTo(University::class);
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class);
    }

    public function CategoryAnnouncement()
    {
        return $this->belongsTo(CategoryAnnouncement::class);
    }
    
    // public function getImageAttribute($path) 
    // {
    //      if (!$path || Str::startsWith($path, 'http')) {
    //         return $path;
    //     }

    //     return url(Storage::url($path));
    // }
}

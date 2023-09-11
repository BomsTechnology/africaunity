<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'image',
        'status',
        'language',
        'subtheme',
        'user_id',
        'category_personal_post_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function categoryPersonalPost()
    {
        return $this->belongsTo(CategoryPersonalPost::class);
    }
    
    // public function getImageAttribute($path) 
    // {
    //      if (!$path || Str::startsWith($path, 'http')) {
    //         return $path;
    //     }

    //     return url(Storage::url($path));
    // }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalPostComment extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'status',
        'user_id',
        'personal_post_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function personalPost()
    {
        return $this->belongsTo(PersonalPost::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryAnnouncement extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'parent',
    ];

    public function announcements(){
        return $this->hasMany(Announcement::class);
    }
}

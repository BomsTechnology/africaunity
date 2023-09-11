<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reporting extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'type',
        'user_id',
        'url',
        'reported',
        'reported_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DemonstrationComment extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'status',
        'user_id',
        'demonstration_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function demonstration()
    {
        return $this->belongsTo(Demonstration::class);
    }
}

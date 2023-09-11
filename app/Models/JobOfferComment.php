<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobOfferComment extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'status',
        'user_id',
        'job_offer_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function jobOffer()
    {
        return $this->belongsTo(JobOffer::class);
    }
    
    
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TenderComment extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'status',
        'user_id',
        'tender_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tender()
    {
        return $this->belongsTo(Tender::class);
    }
}

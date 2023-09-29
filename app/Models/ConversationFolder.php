<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ConversationFolder extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'user_id'];

    public function conversations(): BelongsToMany
    {
        return $this->belongsToMany(Conversation::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

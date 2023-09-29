<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Conversation extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'type', 'image', 'deleted_users', 'description'];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }

    public function folders(): BelongsToMany
    {
        return $this->belongsToMany(ConversationFolder::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}

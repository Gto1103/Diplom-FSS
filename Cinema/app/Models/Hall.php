<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Hall extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'row', 'chair', 'price_standard', 'price_vip', 'free',
    ];

    protected $hidden = [
        'created_up', 'updated_at',
    ];

    public function sessions(): hasMany
    {
        return $this->hasMany(Session::class, 'hall_id');
    }

    public function seats(): hasMany
    {
        return $this->hasMany(Seat::class, 'hall_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Locality extends Model
{
    use HasFactory;

    public $fillable = ['name'];

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function companies()
    {
        return $this->hasMany(Company::class);
    }
}

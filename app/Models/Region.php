<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Locality;

class Region extends Model
{
    use HasFactory;

    public $fillable = ['name'];

    public function localities()
    {
        return $this->hasMany(Locality::class);
    }

    public function companies()
    {
        return $this->hasMany(Company::class);
    }
}

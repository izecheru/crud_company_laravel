<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'fiscal_code',
        'region_name',
        'locality_name',
        'description'
    ];

    public function locality()
    {
        return $this->belongsTo(Locality::class, 'locality_name', 'name');
    }
}

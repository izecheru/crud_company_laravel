<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Locality;
use App\Models\Region;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RegionSeeder::class,
            LocalitySeeder::class,
            CompanySeeder::class
        ]);
    }
}

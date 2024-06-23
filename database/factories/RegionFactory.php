<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Region;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Region>
 */
class RegionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $availableRegions = [
            "Bucureşti",
            "Alba",
            "Arad",
            "Arges",
            "Bacău",
            "Bihor",
            "Bistriţa-Năsăud",
            "Botoşani",
            "Braşov",
            "Brăila",
            "Buzău",
            "Caraş-Severin",
            "Călăraşi",
            "Cluj",
            "Constanţa",
            "Covasna",
            "Dâmboviţa",
            "Dolj",
            "Galaţi",
            "Giurgiu",
            "Gorj",
            "Harghita",
            "Hunedoara",
            "Ialomiţa",
            "Iaşi",
            "Ilfov",
            "Maramureş",
            "Mehedinţi",
            "Mureş",
            "Neamţ",
            "Olt",
            "Prahova",
            "Satu Mare",
            "Sălaj",
            "Sibiu",
            "Suceava",
            "Teleorman",
            "Timiş",
            "Tulcea",
            "Vâlcea",
            "Vaslui",
            "Vrancea",
        ];
        return [
            'name' => $availableRegions[array_rand($availableRegions)],
        ];
    }
}

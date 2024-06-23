<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Region;
use App\Models\Locality;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Locality>
 */
class LocalityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Ensure that there's at least one region
        if (Region::count() == 0) {
            Region::factory(2)->create();
        }

        $region = Region::inRandomOrder()->first(); // Get a random region

        $availableLocalities = [
            "Bucureşti" => ["Sector 1", "Sector 2"],
            "Alba" => ["Alba Iulia", "Aiud"],
            "Arad" => ["Arad", "Lipova"],
            "Arges" => ["Pitești", "Câmpulung"],
            "Bacău" => ["Bacău", "Onești"],
            "Bihor" => ["Oradea", "Salonta"],
            "Bistriţa-Năsăud" => ["Bistrița", "Năsăud"],
            "Botoşani" => ["Botoșani", "Dorohoi"],
            "Braşov" => ["Brașov", "Făgăraș"],
            "Brăila" => ["Brăila", "Ianca"],
            "Buzău" => ["Buzău", "Râmnicu Sărat"],
            "Caraş-Severin" => ["Reșița", "Caransebeș"],
            "Călăraşi" => ["Călărași", "Oltenița"],
            "Cluj" => ["Cluj-Napoca", "Turda"],
            "Constanţa" => ["Constanța", "Mangalia"],
            "Covasna" => ["Sfântu Gheorghe", "Târgu Secuiesc"],
            "Dâmboviţa" => ["Târgoviște", "Moreni"],
            "Dolj" => ["Craiova", "Băilești"],
            "Galaţi" => ["Galați", "Tecuci"],
            "Giurgiu" => ["Giurgiu", "Bolintin-Vale"],
            "Gorj" => ["Târgu Jiu", "Motru"],
            "Harghita" => ["Miercurea Ciuc", "Odorheiu Secuiesc"],
            "Hunedoara" => ["Deva", "Hunedoara"],
            "Ialomiţa" => ["Slobozia", "Fetești"],
            "Iaşi" => ["Iași", "Pașcani"],
            "Ilfov" => ["Voluntari", "Pantelimon"],
            "Maramureş" => ["Baia Mare", "Sighetu Marmației"],
            "Mehedinţi" => ["Drobeta-Turnu Severin", "Orșova"],
            "Mureş" => ["Târgu Mureș", "Reghin"],
            "Neamţ" => ["Piatra Neamț", "Roman"],
            "Olt" => ["Slatina", "Caracal"],
            "Prahova" => ["Ploiești", "Câmpina"],
            "Satu Mare" => ["Satu Mare", "Carei"],
            "Sălaj" => ["Zalău", "Șimleu Silvaniei"],
            "Sibiu" => ["Sibiu", "Mediaș"],
            "Suceava" => ["Suceava", "Fălticeni"],
            "Teleorman" => ["Alexandria", "Roșiorii de Vede"],
            "Timiş" => ["Timișoara", "Lugoj"],
            "Tulcea" => ["Tulcea", "Măcin"],
            "Vâlcea" => ["Râmnicu Vâlcea", "Drăgășani"],
            "Vaslui" => ["Vaslui", "Bârlad"],
            "Vrancea" => ["Focșani", "Adjud"],
        ];

        $localities = $availableLocalities[$region->name];
        $randomLocality = $localities[array_rand($localities)];

        return [
            'name' => $randomLocality,
            'region_id' => $region->id,
        ];
    }
}

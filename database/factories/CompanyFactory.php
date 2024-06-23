<?php

namespace Database\Factories;

use App\Models\Locality;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Region;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    public function generateCIF($len = 7): string
    {
        $result = '';
        for ($i = 0; $i < $len; $i++) {
            $result .= rand(0, 9);
        }
        return (string)$result;
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $localities = Locality::all();
        $randomLocality = $localities->random();

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

        return [
            'name' => fake()->unique()->name() . " SRL",
            'fiscal_code' => $this->generateCIF(),
            'locality_name' => $randomLocality->name,
            'region_name' => $randomLocality->region->name,
            'description' => fake()->text(),
        ];
    }
}

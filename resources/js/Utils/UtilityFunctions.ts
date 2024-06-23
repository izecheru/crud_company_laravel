export function getRegion(locality: string): string {
    const availableLocalities = [
        { region: "Bucureşti", localities: ["Sector 1", "Sector 2"] },
        { region: "Alba", localities: ["Alba Iulia", "Aiud"] },
        { region: "Arad", localities: ["Arad", "Lipova"] },
        { region: "Arges", localities: ["Pitești", "Câmpulung"] },
        { region: "Bacău", localities: ["Bacău", "Onești"] },
        { region: "Bihor", localities: ["Oradea", "Salonta"] },
        { region: "Bistriţa-Năsăud", localities: ["Bistrița", "Năsăud"] },
        { region: "Botoşani", localities: ["Botoșani", "Dorohoi"] },
        { region: "Braşov", localities: ["Brașov", "Făgăraș"] },
        { region: "Brăila", localities: ["Brăila", "Ianca"] },
        { region: "Buzău", localities: ["Buzău", "Râmnicu Sărat"] },
        { region: "Caraş-Severin", localities: ["Reșița", "Caransebeș"] },
        { region: "Călăraşi", localities: ["Călărași", "Oltenița"] },
        { region: "Cluj", localities: ["Cluj-Napoca", "Turda"] },
        { region: "Constanţa", localities: ["Constanța", "Mangalia"] },
        {
            region: "Covasna",
            localities: ["Sfântu Gheorghe", "Târgu Secuiesc"],
        },
        { region: "Dâmboviţa", localities: ["Târgoviște", "Moreni"] },
        { region: "Dolj", localities: ["Craiova", "Băilești"] },
        { region: "Galaţi", localities: ["Galați", "Tecuci"] },
        { region: "Giurgiu", localities: ["Giurgiu", "Bolintin-Vale"] },
        { region: "Gorj", localities: ["Târgu Jiu", "Motru"] },
        {
            region: "Harghita",
            localities: ["Miercurea Ciuc", "Odorheiu Secuiesc"],
        },
        { region: "Hunedoara", localities: ["Deva", "Hunedoara"] },
        { region: "Ialomiţa", localities: ["Slobozia", "Fetești"] },
        { region: "Iaşi", localities: ["Iași", "Pașcani"] },
        { region: "Ilfov", localities: ["Voluntari", "Pantelimon"] },
        { region: "Maramureş", localities: ["Baia Mare", "Sighetu Marmației"] },
        {
            region: "Mehedinţi",
            localities: ["Drobeta-Turnu Severin", "Orșova"],
        },
        { region: "Mureş", localities: ["Târgu Mureș", "Reghin"] },
        { region: "Neamţ", localities: ["Piatra Neamț", "Roman"] },
        { region: "Olt", localities: ["Slatina", "Caracal"] },
        { region: "Prahova", localities: ["Ploiești", "Câmpina"] },
        { region: "Satu Mare", localities: ["Satu Mare", "Carei"] },
        { region: "Sălaj", localities: ["Zalău", "Șimleu Silvaniei"] },
        { region: "Sibiu", localities: ["Sibiu", "Mediaș"] },
        { region: "Suceava", localities: ["Suceava", "Fălticeni"] },
        { region: "Teleorman", localities: ["Alexandria", "Roșiorii de Vede"] },
        { region: "Timiş", localities: ["Timișoara", "Lugoj"] },
        { region: "Tulcea", localities: ["Tulcea", "Măcin"] },
        { region: "Vâlcea", localities: ["Râmnicu Vâlcea", "Drăgășani"] },
        { region: "Vaslui", localities: ["Vaslui", "Bârlad"] },
        { region: "Vrancea", localities: ["Focșani", "Adjud"] },
    ];

    for (let i = 0; i < availableLocalities.length; i++) {
        const region = availableLocalities[i];
        if (region.localities.includes(locality)) {
            return region.region;
        }
    }

    return ""; // Return null if the locality is not found
}

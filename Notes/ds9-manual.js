
// DS9 technical manual

/*

DS9 includes 12 sectors
Bajoran & Cardassian star systems are 50 light years from core Federation worlds and separated by 5.25 light years

station in 2374

station security compromised via remote sensing by Cardassians & Dominion forces 
computer security systems breached by unknowns => access protocols: [user ID verification]

*/

let Bajoran_System = {
    number_of_planets: 14,
    central_planet_star: {
        'name': "B'hava'el",
        'terrestrial_worlds': {
            'number':8,
            'core_elements': ['nickel-iron','silicate','various metals']
        },
        'gas_giants': {
            'number':3,
            'chemistry': ['hydrogen-helium','methane','ammonia sulfides','metallic sodium','water']
        },
        'ice_rocks': 3
    },
    outposts: {
        stations: ['uninhabited planets', 'moons'],
        automated: true,
        subspace_monitoring: true,
        emergency_beacons: true,
        supply_caches: true,
        fueling_ops: {
            location: 'gas giants',
            type: ['Cardassian deuterium','Starfleet tankers'],
            status: ['Cardassian deuterium: deprecated','active']
        }
    },

    antimatter_production_facilities: false,
    federation_membership: 'ongoing',
    'uridium ore': 'Bajor'
    

}


console.log(Bajoran_System )














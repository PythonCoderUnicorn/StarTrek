
// info on TNG Enterprise

const key_locations = {
    // 1
    bridge_main: 'Deck 1',
    observation_lounge: 'Deck 1',
    ready_room: 'Deck 1',
    // 2, 3
    junior_officers_quarters: 'Deck 2 & 3',
    // 4, 38, 39
    cargo_bays: 'Decks 4, 38 & 39',
    shuttlebay : {
        main: 'Deck 4',
        two: 'Deck 13',
        three : 'Deck 13'
    },
    // 5, 15, 31
    science_labs: 'Decks 5, 15 & 31',
    // 6
    transporter: {
        rooms_1_4: 'Deck 6',
        rooms_5_6 : 'Deck 14'
    },
    // 7 , 8, 9, 13, 14
    residential_apartments: 'Decks 5, 7, 8, 9, 13 & 14',
    // 8 
    bridge_battle : 'Deck 8',
    // 10
    ten_forward: 'Deck 10',
    // 11
    holodecks: 'Deck 11',
    gymnasium: 'Deck 11',
    // 12 
    sickbay: 'Deck 12',
    // 15 , 16
    maintenance: 'Deck 15 & 16',
    // 16
    captains_yacht: 'Deck 16',
    // 17, 18 , 19, 20, 32, 33
    living_quarters: 'Decks 17, 18, 19, 20, 32 & 33',
    // 21
    power_distribution: 'Deck 21',
    // 22 , 26
    engineering_support: 'Deck 22 & 26',
    // 23
    main_impulse_engines: 'Deck 23',
    // 24
    life_support: 'Deck 24',
    // 25
    photon_torpedo_launcher: 'Deck 25',
    docking_port_dorsal: 'Deck 25',
    // 27
    deuterium_pumps_ports: 'Deck 27',
    // 28, 29
    deuterium_fuel_storage: 'Decks 28 & 29',
    // 30
    deuterium_injection_reactors: 'Deck 30',
    // 34
    environmental_support: 'Deck 34',
    // 35
    aft_photon_torpedo_launcher: 'Deck 35',
    // 36
    engineering_main: 'Deck 36',
    // 37
    waste_management: 'Deck 37',
    // 38
    brig: 'Deck 38',
    // 40
    antimatter_injection_reactor: 'Deck 40',
    // 41, 42
    antimatter_fuel_storage : 'Decks 41 & 42',


    personal_quarters : {
        Crusher_Beverly : 'Deck 7',
        Crusher_Wesley : 'Deck 5',
        LaForge_Geordi : 'Deck 4',
        Picard_Jean_Luc : 'Deck 8',
        Riker_Will : 'Deck 8',
        Troi_Deanna : 'Deck 8',
        Worf : 'Deck 5'
    }


}









function location(loc) {

    console.log('\n')

    if (loc == "bridge") {
        console.log(`Battle Bridge is on ${key_locations.bridge_battle},\nMain Bridge is on ${key_locations.bridge_main} `)
    }
    
    console.log('\n')
}

// console.log( key_locations.personal_quarters.LaForge_Geordi )

location('bridge' )
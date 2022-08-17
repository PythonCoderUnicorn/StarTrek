
// info on TNG Enterprise

const key_locations = {
    bridge_battle : 'Deck 8',
    bridge_main: 'Deck 1',
    brig: 'Deck 38',
    cargo_bays: 'Decks 4, 38 & 39',
    docking_port_dorsal: 'Deck 25',
    engineering_main: 'Deck 36',
    gymnasium: 'Deck 11',
    observation_lounge : 'Deck 1',
    ready_room: 'Deck 1',
    shuttlebay : {
        main: 'Deck 4',
        two: 'Deck 13',
        three : 'Deck 13'
    },
    sickbay: 'Deck 12',
    ten_forward: 'Deck 10',
    transporter: {
        rooms_1_4: 'Deck 6',
        rooms_5_6 : 'Deck 14'
    },

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
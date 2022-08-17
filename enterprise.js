
// info on TNG Enterprise

const key_locations = {
    bridge_battle : 'Deck 8',
    bridge_main: 'Deck 1',
    brig: 'Deck 38',
    
}





function location(loc) {

    console.log('\n')

    if (loc == "bridge") {
        console.log(`Battle Bridge is on ${key_locations.bridge_battle},\nMain Bridge is on ${key_locations.bridge_main} `)
    }
    
    console.log('\n')
}

// console.log( key_locations.bridge_battle )

location('bridge' )
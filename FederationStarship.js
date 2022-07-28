
// known Federation Starship Classes
// as of SD10301

const federation_ships = {
    A: {
        'Abbe': 'PT Destroyer',
        'Adamant': 'Multi Response Cruiser',
        'Advance': 'Cruiser',
        'Agilis': 'Perimeter Action Ship',
        'Akira': 'Battlecruiser',
        'Akyazi': ['Arbitor', 'Akula'],
        'Alaric': 'Destroyer',
        'Alaska': 'Battlecruiser',
        'Almeida': 'Cruiser/Freighter',
        'Ambassador':'Cruiser',
        'Amchitka': 'Cruiser',
        'Amerind': 'Scout',
        'Anaxagoras': 'Transport/Tug',
        'Andernach': 'Battlecruiser',
        'Anderson': 'Scout',
        'Angueira': 'Hospital Ship',
        'Anubis': 'Scout',
        'Apache': 'Cruiser (Single-Vessel Class)',
        'Arcadia': 'Exploratory Cruiser',
        'Archangel': 'Shuttlecarrier',
        'Archon': 'Cruiser',
        'Ariel': 'Shuttlecarrier',
        'Ark Royal': 'Frigate',
        'Artemis': 'Cruiser',
        'Ascension': 'Dreadnought',
        'Asmodeus': 'Corvette',
        'Athabaska': 'Cruiser',
        'Austin': 'Superscout',
        'Australia': 'Battlecruiser',
        'Avenger': {
            type: 'Frigate',
            subclass: ['Avenger','Endurance']
        },


    },

    B: {
        'Bader': 'Scout',
        'Baker': 'Destroyer',
        'Balclutha': 'Corvette',
        'Balson': 'Command',
        'Banting': 'Cruiser',
        'Belisarius':'Tactical Cruiser',
        'Belknap': 'Strike Cruiser',
        'Bering':'Automated Fuel Transport',
        'Benning':'Frigate',
        'Bradbury': 'Diplomatic Courier',
        'Burke': 'Frigate',
        'Byrd': 'Cruiser'
    },

    C: {
        'Cahuya': 'Science Survey Cruiser',
        'Capital': 'Space Control Ship',
        'Caracal': 'Command Cruiser',
        'Catchon': 'Interceptor',
        'Cautious': 'Minesweeper',
        'Centaur': 'Frigate',
        'Chandley': 'Frigate',
        'Chang-Ho': 'Tactical Cruiser',
        'Charger': 'Destroyer',
        'Cheetah': 'Cruiser',
        'Cheyenne': 'Cruiser',
        'Chosin': 'Attack Carrier',
        'Clarke': 'Clipper',
        'Clausewitz': 'Command Cruiser',
        'Clemenceau': 'Cruiser',
        'Comanche': 'Assault Frigate',
        'Conquest': 'Dreadnought',
        'Constellation': 'Cruiser',
        'Constitution': {
            type: 'Cruiser',
            subclass: [
                'Constitution (I)',
                'Bonhomme Richard',
                'Achernar',
                'Endeavor',
                'Constitution (II)',
                'Enterprise',
                'Tiko-pai',
                'Enterprise (II)'
            ]
        },
        'Coronado': 'Cruiser',
        'Coventry': 'Frigate',
        'Crusader': 'Patrol Cruiser',
        'Curnow': 'Tactical Cruiser',
        'Cyane':'Frigate'
    },

    D: {
        'Daedelus': 'Cruiser',
        'Dahlgren': 'Strike Cruiser',
        'Dakota': 'Shuttlecarrier',
        'Danube': 'Runabout',
        'Daran': 'Frigate',
        'Daring': 'Corvette',
        'Darwin': 'Scout',
        'Davenport': 'Corvette (Prototype)',
        'Defender': 'Destroyer',
        'Defiant': 'Escort',
        'Deliverer': 'Container Tug',
        'Delphis': {
            type: 'Exploration Cruiser',
            subclass: ['Delphis','Delphis (II)']
        },
        'Deneva': 'Freighter',
        'Deoradh': 'Frigate',
        'Detroyat': 'Destroyer',
        'Discovery': 'Scout',
        'Dupleix': 'Perimeter Action Ship (Prototype)',
        'Durance': 'Cargo/Tug',
        'Durrett': 'Light Cruiser'
    },

    E: {
        'Edinburgh': 'Space Control Ship',
        'Einstein': 'Timeslip Cruiser',
        'Engage': 'Perimeter Action Ship',
        'Entente': 'Dreadnought',
        'Etna': 'Command Ship',
        'Excel': 'Strike Cruiser',
        'Excelsior': 'Cruiser',
        'Explorer':'Reconnaissance Cruiser'
    },

    F: {
        'Faranarton': 'Heavy Tug',
        'Federation (I,II)': 'Dreadnought',
        'Firestone': 'Battlecruiser',
        'Fisher': 'Light Transport/Tug',
        'Fredrikstad': 'Shuttlecarrier',
        'Freedom': 'Scout',
        'Fury': 'Frigate'
    }
}
  


// console.log(federation_ships['A'])
// console.log(federation_ships.A.Akyazi[0])
// console.log(federation_ships.C.Constitution.subclass )
console.log(federation_ships.D)

let size = Object.keys(federation_ships).length
// console.log(size)















// class FederationShips {
//     constructor(name, type) {
//         this.name = name
//         this.type = type
//     }

    
// }


// let ship1 = new FederationShips('Adjudicator', 'Cruisor')

// console.log(ship1.name, ship1.type)


// console.log(ship1.type)
// console.log(ship1.shipType)

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
    },

    G: {
        'Gabriel': 'Shuttlecarrier',
        'Gagarin': 'Science Scout',
        'Galaxy': {
            type: 'Exploratory Cruiser',
            subclass: ['Galaxy','Galaxy (II)']
        },
        'Garibaldi': 'Light Carrier',
        'Gasparilla': 'Combat Support Ship',
        'Gemini': 'Exploratory-Cruiser',
        'Greer': 'Corsair',
        'Gregory': 'Exploratory Cruiser',
        'Griffin': 'Supply Tender',
        'Griffon': 'Battleship',
        'Guardian Angel':'Rapid Response Cruiser'
    },

    H: {
        'Halsey': 'Destroyer Escort',
        'Hansen': 'Battleship',
        'Hatfield': 'Command Cruiser',
        'Hellion': 'Destroyer',
        'Hensley': 'Heavy Transport/Tug',
        'Hermes': {
            type: 'Scout',
            subclass: ['Hermes','Monoceros', 'Cygnus', 'Hermes (II)']
        },
        'Hillery': 'Scout',
        'Hippocrates (I,II)': 'Medical Frigate',
        'Hollingsworth': 'Penetration Cruiser',
        'Hopi': 'Survey Vessel',
        'Horizon': 'Cruiser',
        'Hubble': 'Research Cruiser',
        'Huntington':'Deuterium Tanker'
    },

    I: {
        'Ianar': 'Frigate',
        'Ianetos': 'Superscout',
        'Impervious': 'Strike Cruiser',
        'Independence': 'Armed Freighter',
        'Indomitable':'Battleship',
        'Ingram': 'Space Control Ship',
        'Intrepid': 'Cruiser',
        'Irreverence':'Cruiser'
    },

    J: {
        'Jeannette Maddox': 'Scout',
        'Jenshahn': 'Carrier',
        'Jester': 'Corvette',
        'Joshua': 'Command Cruiser',
        'Joshua Paul': 'Frigate',
        'Juliet': 'Corvette',
        'Jurassic':'Exploratory Cruiser'
    },

    K: {
        'Kaga': 'Carrier',
        'Karekh': 'Scout',
        'Kearsarge': 'Cruiser',
        'Kentwood': 'Bulk Cargo Carrier',
        'Kestral': 'Superscout',
        'Kiaga': 'Perimeter Action Ship',
        'Kirov': 'Dreadnought',
        'Kirsanov': 'Perimeter Action Ship',
        'Knox': 'Frigate',
        'Kobayashi Maru': 'Neutronic Fuel Carrier',
        'Kodiak': 'Battleship',
        'Komsomolsk': ' Dreadnought',
        'Kresta':'Frigate'
    },

    L: {
        'Laffey': 'Cruiser',
        'Larson': {
            type: 'Destroyer',
            subclass: ['Larson','Balaklava', 'Kohlar','Sheridan']
        },
        'Lautaro': 'Corvette',
        'Leavenworth': 'Frigate',
        "Lng'we Chi": "Exploratory Cruiser",
        'Lobo': 'Carrier',
        'Loki': ' Destroyer',
        'Loknar': {
            type: 'Frigate',
            subclass: ['Loknar', 'Lactra','Cairo','Jezar']
        }
    },

    M: {
        'MacPherson': 'Transport',
        'Maguellanes': 'Escort Cruiser',
        'Majestic': 'Cruiser',
        'Mare Nubium': 'Escort Carrier',
        'Maxwell': 'Strike Cruiser',
        'Mediterranean': 'Freighter',
        'Menahga': 'Destroyer',
        'Michael Adam': 'Scout',
        'Miranda': 'Cruiser',
        'Mitannic':'Battlecruiser',
    },

    N: {
        'Nebula': 'Cruiser',
        'Nelson': 'Scout',
        'New Jersey': 'Battleship',
        'New Orleans': 'Frigate',
        'Niagara': 'Cruiser',
        'Nichter': 'Dreadnought',
        'Niffen': 'Buoy Tender',
        'Nimitz': 'Strike Carrier',
        'Nineveh': 'Exploratory Cruiser',
        'Niven': 'Attack Cruiser',
        'Nomad': 'Exploratory Cruiser',
        'Normandy': 'Supercarrier',
        'Northampton': 'Frigate',
        'Norway': 'Frigate',
        'Nova': 'Research Vessel',
        'NX':'Cruiser'
    },

    O: {
        'Oberth': 'Scout',
        'Olympic': 'Medical Ship',
        'Olympus': 'Dreadnought',
        'Oriskany': 'Cruiser',
        'Osiris': 'Command Cruiser',
        'Osler': 'Hospital Transport',
        'Ostoris':'Freighter'
    },

    P: {
        'Paladin': 'Destroyer/Scout',
        'Palomar': 'Command Cruiser',
        'Peacekeeper': 'Exploratory Cruiser',
        'Phantom': 'Superscout (Prototype)',
        'Pharris': 'Strategic Frigate (Prototype)',
        'Pleiades': 'Survey Cruiser',
        'Podesti': 'Cruiser',
        'Poseidon': 'Cruiser',
        'Prometheus': 'Tactical Cruiser',
        'Prowler': 'Interceptor',
        'Ptolemy': {
            type: 'Transport/Tug',
            subclass: ['Ptolemy','Keppler', 'Doppler', 'Dollond', 'Ptolemy (II)','Moncrief','Lagrange']
        }
    },

    Q: {
        "Qapla":'Cruiser'
    },

    R: {
        
    }



}
  


















// console.log(federation_ships['A'])
// console.log(federation_ships.A.Akyazi[0])
// console.log(federation_ships.C.Constitution.subclass )
console.log(federation_ships)

let size = Object.keys(federation_ships).length
console.log(size)















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
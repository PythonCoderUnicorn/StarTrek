
// data for Starfleet Fleet vessels

// source: Federation Fleet Manual

// Designation == type



/* -------------- VESSEL CLASSIFICATIONS

CUTTER = small ship, smaller than a destroyer, primarily used for patrols against criminal
    activity such as pirates

FIGHTER = small (2 person size), highly armed and fast spacecraft used for rapid response 
    and strike operations. Normally docked on a base or a carrier vessel


SHUTTLECRAFT = auxillary vessels used by capitol ships or bases. 
    Used for transporting small amounts of cargo or personnel from point to point

RUNABOUT = a larger version of shuttlecraft, capable of longer duration flights carrying more passengers
    and cargo, with modest defense capabilities

TRANSPORT = function similar to Tenders as they ferry supplies, equipment and personnel between points, very large in size

ASSAULT = large transport ships with armed soldiers and their equipment, geavily shielded. 
    These ships are slow and not capble of offensive fire. Used to take on an objective, not destroy it

DESTROYER = small capitol ship lighter than a frigate, carries weaponry, fast and maneuverable. Most common vessel

SCOUT = destroyer size vessel but is equipped with iproved and advacned scanning equipment
    and scientific research equipment. Lightly armed and cannot take on much damage

ESCORT = size of a destroyer, designed to protect larger vessels (battleships or carriers) in case of attack.
    Light and fast, with high level defenses.

FRIGATE = medium capitol ship, (larger than destroyers, smaller than cruisers). Main Fleet defensive power and routine patrol operations

CRUISER = larger than frigates, perform various missions. Most common 'large' Fleet vessel

BATTLECRUISER = a cruiser built for battle, mission specific design for combat. Weaponry and defenses are primary concern, less speed and maneuverability

BATTLESHIP = larger than cruisers, heavy weapons and defenses, slow ships. Military specific missions

DREADNOUGHT = 'ultimate battleship' in terms of combat capabilities, most powerful ship in service

CARRIER = largest ship in Fleet, is the launching pad for smaller spacecraft (fighters). 
    Used for sceen defence or launching strikes against target. Lacks speed and maneuverability



NCC = Naval Construction Code, the prefix for all active duty ships under Starfleet command
NAR = Naval Auxillary Reserve, ships under civilian control

*/



let starfleet_ships = {
    'Saladin': {
        'Designation': 'Destroyer',
        'number_of_missions': 20,
        'NCC Ranges': '500-519'
    },
    'Hermes': {
        'Designation': 'Scout',
        'number_of_missions': 15,
        'NCC Ranges': '585-599'
    },
    'Ptolemy': {
        'Designation': 'Transport',
        'number_of_missions': 14,
        'NCC Ranges': '801-815'
    },
    'Hellespont': {
        'Designation': 'Destroyer',
        'number_of_missions': 20,
        'NCC Ranges': '880-899'
    },
    'Sherman': {
        'Designation': 'Tender (Auto)',
        'number_of_missions': 5,
        'NCC Ranges': ['935-939','NAR 1200-1203','NGL 1460-1467']
    },
    'Independence': {
        'Designation': 'Tender',
        'number_of_missions': 6,
        'NCC Ranges': ['940-945','NAR 1204-1209','NFT 1910-1917']
    },
    'Nelson': {
        'Designation': 'Intel Scout',
        'number_of_missions': 10,
        'NCC Ranges': '950-959'
    },
    'Bonaventure': {
        'Designation': 'Surveyor (EX)',
        'number_of_missions': 2,
        'NCC Ranges': 'NX 1028-1029'
    },
    'Derf': {
        'Designation': 'Surveyor',
        'number_of_missions': 14,
        'NCC Ranges': ['NCC 1270-1283','NAR 1219-1225']
    },
    'Larson': {
        'Designation': 'Destroyer',
        'number_of_missions': 25,
        'NCC Ranges': '1400-1424'
    },
    'Burke': {
        'Designation': 'Destroyer',
        'number_of_missions': 27,
        'NCC Ranges': '1448-1474'
    },
    'Izmail': {
        'Designation': 'Cruiser',
        'number_of_missions': 4,
        'NCC Ranges': '1636-1639'
    },
    'Loknar': {
        'Designation': 'Frigate',
        'number_of_missions': 20,
        'NCC Ranges': '1640-1659'
    },
    'Constitution': {
        'Designation': 'Cruiser',
        'number_of_missions': 21,
        'NCC Ranges': ['1017','1305-A','1701-1719','1760-1764']
    },
    'Longbow': {
        'Designation': 'Battlecruiser',
        'number_of_missions': 10,
        'NCC Ranges': '1725-1734'
    },
    'Decatur': {
        'Designation': 'Cruiser',
        'number_of_missions': 20,
        'NCC Ranges': '1780-1799'
    },
    'Surya': {
        'Designation': 'Frigate',
        'number_of_missions': 33,
        'NCC Ranges': '1850-1883'
    },
    'Federation': {
        'Designation': 'Deadnought',
        'number_of_missions': 11,
        'NCC Ranges': ['2100-2104','2116-2120']
    },
    'Washington': {
        'Designation': 'Carrier',
        'number_of_missions': 4,
        'NCC Ranges': '2126-2129'
    }
}



let batonRouge_class = [
    {
        vessel: 'USS',
        name: 'Baton Rouge',
        registry: 'NCC-1300',
        note: 'Retired to Memory Alpha'
    },
    {
        vessel: 'USS',
        name: 'Moscow',
        registry: 'NCC-1301',
        note:'First ship with transporter as standard equipment'
    },
    {
        vessel: 'USS',
        name: 'Peking',
        registry: 'NCC-1302',
        note: 'Retired & refit as SS General Tso, NAR 952'
    },
    {
        vessel: 'USS',
        name: 'Britannia',
        registry: 'NCC-1303',
        note: 'Lost in Axanar Conflict'
    },
    {
        vessel: 'USS',
        name: 'Los Angeles',
        registry:'NCC-1304'
    },
    {
        vessel: 'USS',
        name: 'Yamato',
        registry: 'NCC-1305',
        note:'Lost defending Earth colonies during Klingon raid'
    },
    {
        vessel: 'USS',
        name: 'Hokkaido',
        registry:'NCC-1306'
    },
    {
        vessel: 'USS',
        name: 'Savannah',
        registry:'NCC-1307'
    },
    {
        vessel: 'USS',
        name: 'Tehran',
        registry: 'NCC-1308',
        note: 'Second ship with transporter as standard equipment'
    },
    {
        vessel: 'USS',
        name: 'Petersburg',
        registry: 'NCC-1309',
        note: 'Retired and refit as SS Lady of Adventure. NAR 953'
    },
    {
        vessel: 'USS',
        name: 'Marseilles',
        registry:'NCC-1360'
    },
    {
        vessel: 'USS',
        name: 'Devonshire',
        registry: 'NCC-1361',
        note: 'Retired and refit as SS Basil Fawlty, NAR 954'
    },
    {
        vessel: 'USS',
        name: 'Sydney',
        registry: 'NCC-1362',
        note: 'Lost in Axanar Conflict'
    },
    {
        vessel: 'USS',
        name: 'Vladivostok',
        registry:'NCC-1363'
    },
    {
        vessel: 'USS',
        name: 'Cairo',
        registry: 'NCC-1364',
        note: 'Lost mysteriously near Romulan space'
    },
    {
        vessel: 'USS',
        name: 'Tipton',
        registry: 'NCC-1365',
        note: 'Retired and refit as SS Campton Champion. NAR 955'
    },
    {
        vessel: 'USS',
        name: 'Arcadia',
        registry:'NCC-1366'
    },
    {
        vessel: 'USS',
        name: 'Tripoli',
        registry:'NCC-1367'
    },
    {
        vessel: 'USS',
        name: 'Union',
        registry:'NCC-1368'
    },
    {
        vessel: 'USS',
        name: 'Lafayette',
        registry:'NCC-1369'
    },
    {
        vessel: 'USS',
        name: 'Commonwealth',
        registry:'NCC-1370'
    },
    {
        vessel: 'USS',
        name: 'Republic',
        registry: 'NCC-1371',
        note: 'Previous assignment of James Kirk'
    },
    {
        vessel: 'USS',
        name: 'Democracy',
        registry:'NCC-1372'
    },
    {
        vessel: 'USS',
        name: 'Liberty',
        registry:'NCC-1373'
    },
    {
        vessel: 'USS',
        name: 'Chauncey',
        registry:'NCC-1374'
    }
    
]

// console.log(batonRouge_class[3].name)


let nordenskJold_class = [
    {
        vessel: 'USS',
        name: 'Nordenskjold',
        registry: 'NCC-1425',
        note: 'First Earth ship to reach Trill system'
    },
    {
        vessel: 'USS',
        name: 'Cartier',
        registry: 'NCC-1426',
        note: 'Retired & refit as SS Lane Victory, NAR 950'
    },
    {
        vessel: 'USS',
        name: 'Bartentis',
        registry: 'NCC-1427'
    },
    {
        vessel: 'USS',
        name: 'Amundson',
        registry: 'NCC-1428',
        note: 'Lost while studying quasar phenomenon'
    },
    {
        vessel: 'USS',
        name: 'Baffin',
        registry: 'NCC-1429',
        note: 'Retired & refit as SS Spanish Queen, NAR 951'
    },
]


const saladin_class = [
    {
        type: 'Destroyer',
        design_chief: 'Franz Joseph',
        class_commission: 2251,
        complement: {
            officers: 20,
            crew: 180
        }
    },

    {
        hull_structure: 25,
        hull_size: { class: 5, decks: 13 },
        hull_length: {
            length_m: 242,
            beam_m: 127,
            height_m: 60
        },
        hull_mass_MT: 95000
    },

    {
        drive_system_impulse: 'SBE (.75c)',
        drive_system_warp: ['PB-32-Mk 3', 'Tandem', 'WF 6/8'],
        drive_system_maneuver_modifiers: ['+1C','+2H','+2T']
    },

    {
        tactical_phasers: {
            class: 9,
            banks: 3,
            note: '2 each, (f,f/p, f/s)'
        },
        tactical_torpedoes: 'MK-IV Twin Launcher (f)',
        tactical_deflector_shield: 'PPF 2a'
    },

    {
        class_traits: {
            hardened_system: 'Life Support',
            design_flaw: 'Warp engine'
        }
    },

    {
        operational_data: {
            atmosphere_capable: false,
            cargo_units: 50,
            life_support: 'Class 4',
            operational_systems: 'Class 4',
            sensor_system: 'Class 3',
            separation_system: false,
            shuttlebay: { size: 'small', id: '1a' },
            shuttlecraft: 1,
            tractor_beams: ['1 fv', '1a'],
            transporters: {
                STD: 2,
                emergency: 2,
                cargo: 2
            },
            supplemental_craft: {class: 'H', travel_pod: 2}
        }
    },


]

// console.log(saladin_class[3].tactical_phasers.banks )


let saladin_class_ships = [
    {
        vessel: 'USS',
        name: 'Saladin',
        registry: 'NCC-500',
        note: 'Retired'
    },
    {
        vessel: 'USS',
        name: 'Jenghiz',
        registry: 'NCC-501'
    },
    {
        vessel: 'USS',
        name: 'Darius',
        registry: 'NCC-502'
    },
    {
        vessel: 'USS',
        name: 'Alaric',
        registry: 'NCC-503'
    },
    {
        vessel: 'USS',
        name: 'Sargon',
        registry: 'NCC-504'
    },

    {
        vessel: 'USS',
        name: 'Xerxes',
        registry: 'NCC-505'
    },
    {
        vessel: 'USS',
        name: 'Pompey',
        registry: 'NCC-506',
        note: 'Destroyed by cosmic string phenomenon'
    },
    {
        vessel: 'USS',
        name: 'Kublai',
        registry: 'NCC-507'
    },
    {
        vessel: 'USS',
        name: 'Suleiman',
        registry: 'NCC-508'
    },
    {
        vessel: 'USS',
        name: 'Etzel',
        registry: 'NCC-509'
    },
    {
        vessel: 'USS',
        name: 'Tamerlane',
        registry: 'NCC-510'
    },
    {
        vessel: 'USS',
        name: 'Alexander',
        registry: 'NCC-511'
    },
    {
        vessel: 'USS',
        name: 'Hannibal',
        registry: 'NCC-512',
        note:'Retired after victorious battle with Orion pirates'
    },
    {
        vessel: 'USS',
        name: 'Ahriman',
        registry: 'NCC-513'
    },
    {
        vessel: 'USS',
        name: 'Rahman',
        registry: 'NCC-514'
    },
    {
        vessel: 'USS',
        name: 'Adad',
        registry: 'NCC-515',
        note: 'Lost to Klingon raid'
    },
    {
        vessel: 'USS',
        name: 'Hashishyun',
        registry: 'NCC-516'
    },
    {
        vessel: 'USS',
        name: 'Azrael',
        registry: 'NCC-517'
    },
    {
        vessel: 'USS',
        name: 'Hamilcar',
        registry: 'NCC-518'
    },
    {
        vessel: 'USS',
        name: 'Shaitman',
        registry: 'NCC-519'
    },
]



let hermes_class = [
    {
        type: 'Scout',
        design_chief: 'Franz Joseph',
        class_commission: 2251,
        complement: {
            officers: 20,
            crew: 175
        }
    },

    {
        hull_structure: 25,
        hull_size: { class: 5, decks: 13 },
        hull_length: {
            length_m: 242,
            beam_m: 127,
            height_m: 60
        },
        hull_mass_MT: 95000
    },

    {
        drive_system_impulse: 'SBE (.75c)',
        drive_system_warp: ['PB-32-Mk 3', 'Single', 'WF 6/8'],
        drive_system_maneuver_modifiers: ['0C','+3H','-1T']
    },

    {
        tactical_phasers: {
            class: 9,
            banks: 1,
            note: '2 each, (f)'
        },
        tactical_deflector_shield: 'PPF 2a'
    },

    {
        class_traits: {
            hardened_system: 'Life Support',
            design_flaw: 'Warp engine',
            enhanced_sensors: true
        }
    },

    {
        operational_data: {
            atmosphere_capable: false,
            cargo_units: 50,
            life_support: 'Class 4',
            operational_systems: 'Class 4',
            sensor_system: 'Class 3',
            separation_system: false,
            shuttlebay: { size: 'small', id: '1a' },
            shuttlecraft: 1,
            tractor_beams: ['1 fv', '1a'],
            transporters: {
                STD: 2,
                emergency: 2,
                cargo: 2
            },
            supplemental_craft: {class: 'H', travel_pod: 2}
        }
    }
]



let hermes_class_ships = [
    {
        vessel: 'USS',
        name: 'Hermes',
        registry: 'NCC-585'
    },
    {
        vessel: 'USS',
        name: 'Anubis',
        registry: 'NCC-586'
    },
    {
        vessel: 'USS',
        name: 'Echo',
        registry: 'NCC-587'
    },
    {
        vessel: 'USS',
        name: 'Aeolus',
        registry: 'NCC-588',
        note: 'Lost mysteriously exploring near Tholian space'
    },
    {
        vessel: 'USS',
        name: 'Diana',
        registry: 'NCC-589'
    },
    {
        vessel: 'USS',
        name: 'Quinillus',
        registry: 'NCC-590'
    },
    {
        vessel: 'USS',
        name: 'Bridger',
        registry: 'NCC-591',
        note: 'Lost to ion storm within Mutara Nebula'
    },
    {
        vessel: 'USS',
        name: 'Carson',
        registry: 'NCC-592'
    },
    {
        vessel: 'USS',
        name: 'Batidor',
        registry: 'NCC-593'
    },
    {
        vessel: 'USS',
        name: 'Cody',
        registry: 'NCC-594',
        note: 'Lost to anti-matter containment breech'
    },
    {
        vessel: 'USS',
        name: 'Revere',
        registry: 'NCC-595'
    },
    {
        vessel: 'USS',
        name: 'Spaker',
        registry: 'NCC-596'
    },
    {
        vessel: 'USS',
        name: 'Bowie',
        registry: 'NCC-597',
        note: 'Abandoned & destroyed due to plague'
    },
    {
        vessel: 'USS',
        name: 'Sacajawea',
        registry: 'NCC-598'
    },
    {
        vessel: 'USS',
        name: 'Tonti',
        registry: 'NCC-599'
    },
]



let capella_class_ships = [
    {
        vessel: 'USS',
        name: 'Capella',
        registry: 'NCC-700'
    },
    {
        vessel: 'USS',
        name: 'Argonne',
        registry: 'NCC-701'
    },
    {
        vessel: 'USS',
        name: 'Beagle',
        registry: 'NCC-702',
        note: 'Lost near 892 to magnetic storm'
    },
    {
        vessel: 'USS',
        name: 'LLoyds',
        registry: 'NCC-703',
        note: 'First ship to completely map Romulan Neutral Zone'
    },
    {
        vessel: 'USS',
        name: 'Oregon',
        registry: 'NCC-704'
    },
    {
        vessel: 'USS',
        name: 'Roebuck',
        registry: 'NCC-705'
    },
    {
        vessel: 'USS',
        name: 'Gleaner',
        registry: 'NCC-706'
    },
    {
        vessel: 'USS',
        name: 'Darshak',
        registry: 'NCC-707',
        note: 'Abandoned while mapping inter-space region'
    },

    {
        vessel: 'USS',
        name: 'Dowditch',
        registry: 'NCC-708'
    },
    {
        vessel: 'USS',
        name: 'Dals',
        registry: 'NCC-709',
        note: 'Mysteriously lost near Gorn space.'
    },
    {
        vessel: 'USS',
        name: 'Parizeau',
        registry: 'NCC-710',
        note: 'Duotronic (Forth Generation) Computer Test Vessel'
    },
    {
        vessel: 'USS',
        name: 'Fiberga',
        registry: 'NCC-711'
    },

    {
        vessel: 'USS',
        name: 'Ability',
        registry: 'NCC-712'
    },
    {
        vessel: 'USS',
        name: 'Mercury',
        registry: 'NCC-713'
    },
    {
        vessel: 'USS',
        name: 'Gratia',
        registry: 'NCC-714'
    },
    {
        vessel: 'USS',
        name: 'Castor',
        registry: 'NCC-715'
    },
    {
        vessel: 'USS',
        name: 'Bellatrix',
        registry: 'NCC-716'
    },
    {
        vessel: 'USS',
        name: 'Antares',
        registry: 'NCC-717',
        note: 'Destroyed by Charlie Evan psychkinetic powers'
    },
    {
        vessel: 'USS',
        name: 'Saturn',
        registry: 'NCC-718'
    },
    {
        vessel: 'USS',
        name: 'Beaufort',
        registry: 'NCC-719'
    },
    {
        vessel: 'USS',
        name: 'Haskins',
        registry: 'NAR-1324'
    },
    {
        vessel: 'USS',
        name: 'Lormer',
        registry: 'NAR-1325'
    },
    {
        vessel: 'USS',
        name: 'Marianas',
        registry: 'NAR-1326'
    },
    {
        vessel: 'USS',
        name: 'Typhon',
        registry: 'NAR-1327',
        note: 'Destroyed by Klingon raid'
    },
    {
        vessel: 'USS',
        name: 'Leilei',
        registry: 'NAR-1328'
    },
    {
        vessel: 'USS',
        name: 'Purdue',
        registry: 'NAR-1329'
    },
]



const ptolemy_class = [
    {
        type: 'Transport Tug',
        design_chief: 'Franz Joseph',
        class_commission: 2252,
        complement: {
            officers: 20,
            crew: 175
        }
    },

    {
        hull_structure: 25,
        hull_size: { class: 5, decks: 13 },
        hull_length: {
            length_m: 221,
            beam_m: 127,
            height_m: 67
        },
        hull_mass_MT: 127000
    },

    {
        drive_system_impulse: 'SBE (.75c)',
        drive_system_warp: ['PB-32-Mk 3', 'Tandem', 'WF 6/8'],
        drive_system_maneuver_modifiers: ['-1C','+3H','+0T']
    },

    {
        tactical_phasers: {
            class: 9,
            banks: 1,
            note: '2 each, (f)'
        },
        tactical_torpedoes: 'MK-IV Twin Launcher (f)',
        tactical_deflector_shield: 'PPF 2a'
    },

    {
        class_traits: {
            hardened_system: 'Life Support',
            container_transport: true
        }
    },

    {
        operational_data: {
            atmosphere_capable: false,
            cargo_units: 60,
            life_support: 'Class 4',
            operational_systems: 'Class 4',
            sensor_system: 'Class 3',
            separation_system: true,
            shuttlebay: { size: 'small', id: '1a' },
            shuttlecraft: 1,
            tractor_beams: ['1 fv', '1a'],
            transporters: {
                STD: 2,
                emergency: 2,
                cargo: 2
            },
            supplemental_craft: {class: 'H', travel_pod: 2}
        }
    },
]


let ptolemy_class_ships = [
    {
        vessel: 'USS',
        name: 'Ptolemy',
        registry: 'NCC-800',
        note: 'Retired as training vessel in 2271'
    },
    {
        vessel: 'USS',
        name: 'Jennings',
        registry: 'NCC-801',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ah Rashid',
        registry: 'NCC-802',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Anaxagoras',
        registry: 'NCC-803',
        note: 'Destroyed by Orion Pirates'
    },
    {
        vessel: 'USS',
        name: 'Anaximander',
        registry: 'NCC-804',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Aristarchus',
        registry: 'NCC-805',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ibn Daud',
        registry: 'NCC-806',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Eratosthenes',
        registry: 'NCC-807',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Galilei',
        registry: 'NCC-808',
        note: 'Destroyed in cargo accident during supply mission'
    },
    {
        vessel: 'USS',
        name: 'Hipparchus',
        registry: 'NCC-809',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ulugh Beg',
        registry: 'NCC-810',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Philolaus',
        registry: 'NCC-811',
        note: 'Destroyed in cargo accident during supply mission'
    },
    {
        vessel: 'USS',
        name: 'Thales',
        registry: 'NCC-812',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hevelius',
        registry: 'NCC-813',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Tonti',
        registry: 'NCC-814',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Shichang',
        registry: 'NAR-1214',
        note: 'Retired; sold to private use in 2285'
    },
    {
        vessel: 'USS',
        name: 'Nanchang',
        registry: 'NAR-1215',
        note: 'Retired; sold to private use in 2285'
    },
    {
        vessel: 'USS',
        name: 'Taikang',
        registry: 'NAR-1216',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Fanchang',
        registry: 'NAR-1217',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Dayun',
        registry: 'NAR-1218',
        note: 'Retired; sold to private use in 2285'
    },
    {
        vessel: 'SS',
        name: 'Zubrinski',
        registry: 'NDT-986',
        note: ''
    },
    {
        vessel: 'SS',
        name: 'Pulkownik',
        registry: 'NDT-987',
        note: ''
    },
    {
        vessel: 'SS',
        name: 'Boleslaw',
        registry: 'NDT-988',
        note: ''
    },
    {
        vessel: 'SS',
        name: 'Zdroj',
        registry: 'NDT-989',
        note: ''
    },
    {
        vessel: 'SS',
        name: 'Wieliczka',
        registry: 'NDT-990',
        note: ''
    },
    {
        vessel: 'SS',
        name: 'Bialostocka',
        registry: 'NDT-991',
        note: ''
    },
]


let somnulus_class_ships = [
    {
        vessel: 'USS',
        name: 'Somnulus',
        registry: 'NCC-865',
        note: 'Retired as training vessel in 2274'
    },
    {
        vessel: 'USS',
        name: 'Lakshadweep',
        registry: 'NCC-866',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Morona',
        registry: 'NCC-867',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Paolucci',
        registry: 'NCC-868',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Julian Apaza',
        registry: 'NAR-1219',
        note: 'Retired, sold to private use in 2275'
    },
    {
        vessel: 'USS',
        name: 'Oswaldo Cruz',
        registry: 'NAR-1220',
        note: 'Retired, sold to private use in 2275'
    },
    {
        vessel: 'USS',
        name: 'Carlos Chagas',
        registry: 'NAR-1221',
        note: 'Retired, sold to private use in 2277'
    },
    {
        vessel: 'USS',
        name: 'Donna Margarita',
        registry: 'NAR-1222',
        note: 'Retired, sold to private use in 2277'
    },
    {
        vessel: 'USS',
        name: 'San Gieusto',
        registry: 'NAR-1223',
        note: 'Retired, sold to private use in 2277'
    },

]


let hellespont_class = [
    {
        type: 'Destroyer',
        class_designation: 1,
        class_commission: 2263,
        complement: {
            officers: 22,
            crew: 45
        },
        dimensions: {
            length_m: 195,
            breadth_m: 95,
            height_m: 68,
            mass_KMT: 85
        }
    },


    {
        drive_system_impulse: 'FID-2 (.75c)',
        drive_system_warp: ['FWF-1s', 'Triple', 'WF 6/8']
    },

    {
        phasers: 4,
        note: '2 each type FH-3',
        torpedoes: {banks: 1, type: 'FP-1'}
    },



    {
        class_traits: {
            hardened_system: 'Life Support',
            container_transport: true
        }
    },

    {
        operational_data: {
            atmosphere_capable: false,
            cargo_units: 60,
            life_support: 'Class 4',
            operational_systems: 'Class 4',
            sensor_system: 'Class 3',
            separation_system: true,
            shuttlebay: { size: 'small', id: '1a' },
            shuttlecraft: 1,
            tractor_beams: ['1 fv', '1a'],
            transporters: {
                STD: 2,
                emergency: 2,
                cargo: 2
            },
            supplemental_craft: {class: 'H', travel_pod: 2}
        }
    },
]


let hellespont_class_ships = [
    {
        vessel: 'USS',
        name: 'Hellespont',
        registry: 'NCC-880'
    },
    {
        vessel: 'USS',
        name: 'Perseus',
        registry: 'NCC-881'
    },
    {
        vessel: 'USS',
        name: 'Circe',
        registry: 'NCC-882'
    },
    {
        vessel: 'USS',
        name: 'Aegeus',
        registry: 'NCC-883'
    },
    {
        vessel: 'USS',
        name: 'Nereus',
        registry: 'NCC-884',
        note:'Destroyed by Klingon raid'
    },
    {
        vessel: 'USS',
        name: 'Atalanta',
        registry: 'NCC-885'
    },
    {
        vessel: 'USS',
        name: 'Europa',
        registry: 'NCC-886'
    },
    {
        vessel: 'USS',
        name: 'Achania',
        registry: 'NCC-887'
    },
    {
        vessel: 'USS',
        name: 'Tyrnis',
        registry: 'NCC-888',
        note:'Liberated colony of Peronius III from Klingon forces'
    },
    {
        vessel: 'USS',
        name: 'Troezen',
        registry: 'NCC-889',
        note: 'Myseriously lost near Tholian space'
    },
    {
        vessel: 'USS',
        name: 'Athena',
        registry: 'NCC-890'
    },
    {
        vessel: 'USS',
        name: 'Amphitrite',
        registry: 'NCC-891'
    },
    {
        vessel: 'USS',
        name: 'Antietam',
        registry: 'NCC-892'
    },
    {
        vessel: 'USS',
        name: 'Caenis',
        registry: 'NCC-893',
        note:'Lost in wormhole effect'
    },
    {
        vessel: 'USS',
        name: 'Artemis',
        registry: 'NCC-894'
    },
    {
        vessel: 'USS',
        name: 'Aeetus',
        registry: 'NCC-895'
    },
    {
        vessel: 'USS',
        name: 'Acheron',
        registry: 'NCC-896'
    },
    {
        vessel: 'USS',
        name: 'Medea',
        registry: 'NCC-897'
    },
    {
        vessel: 'USS',
        name: 'Scylla',
        registry: 'NCC-898'
    },
    {
        vessel: 'USS',
        name: 'Charybdis',
        registry: 'NCC-899'
    },

]


/*
General information
A RELATIVELY NEW DESIGN, THE HELLESPONT HAS BEEN
SERVING ADMIRABLY AS A DEFENSE-ORIENTED SHIP ALONG
BOTH THE KLINGON AND ROMULAN NEUTRAL ZONES. MARKED
BY HER TRIPLE-FWF1S CONFIGURATION, THE HELLESPONT
HAS A DISTINCTIVE PROFILE, AND IS EARNING A REPUTATION
IN STARFLEET AS A STRONG AND FAST 'FIGHTING SHIP'.
IN THEORY, THE HELLESPONT WAS SUPPOSED TO BE MORE
OF A VARIABLE MISSION CRAFT, BUT HER OBVIOUS FIGHTING
SKILLS AND OTHERWISE SPARTAN ACCOMMODATIONS HAVE
HAMPERED HER ABILITY TO DO MUCH MORE THAN PATROL
DUTY AND QUICK DEFENSE. INDEED, THIS SEEMS TO BE TAKEN
TO HEART, AS THE HELLESPONT IS, MORE AND MORE, BEING
ASSIGNED INTO PURELY MILITARY ROLES RATHER THAN
ëVARIABLE MISSIONSí. THE DESIGN OF THE SHIP, MAKING USE OF A THIRD FWF-1S
ENGINE, DOES HAVE SOME OF THE STABILITY PROBLEMS
FOUND ON SINGLE-FWF DESIGNS, THOUGH NOT QUITE AS
PROBLEMATIC. THE EXTRA ENGINE LARGELY SERVES TO
PROVIDE POWER FOR HER WEAPONS SYSTEMS, WHILE 
PROVIDING A MARGINAL BOOST TO HER WARP CAPABILITY, 
BRINGING HER UP TO A SAFE SPEED OF WARP 6.


*/




const sherman_class = [
    {
        type: 'Transport',
        design_chief: 'Don Christianson',
        class_commission: 2247,
        complement: {
            officers: 5,
            crew: 25,
            automation: true
        }
    },

    {
        hull_structure: 28,
        hull_size: { class: 5, decks: 13 },
        hull_length: {
            length_m: 227,
            beam_m: 95,
            height_m: 120
        },
        hull_mass_MT: 160000
    },

    {
        drive_system_impulse: 'SBE (.75c)',
        drive_system_warp: ['PB-32-S-Mk 3', 'Tandem', 'WF 6/8'],
        drive_system_maneuver_modifiers: ['0C','-1H','-1T']
    },

    {
        tactical_phasers: {
            class: 9,
            banks: 1,
            note: '2 each, (f)'
        },
        tactical_torpedoes: 'MK-IV Twin Launcher (f)',
        tactical_deflector_shield: 'PPF 2a'
    },

    {
        class_traits: {
            hardened_system: 'Life Support',
            automation: true
        }
    },

    {
        operational_data: {
            atmosphere_capable: false,
            cargo_units: 120,
            life_support: 'Class 4',
            operational_systems: 'Class 4',
            sensor_system: 'Class 3',
            separation_system: false,
            shuttlebay: { size: 'medium', id: '2a' },
            shuttlecraft: 6,
            tractor_beams: ['1 fv', '1a'],
            transporters: {
                STD: 2,
                emergency: 2,
                cargo: 4
            },
            supplemental_craft: {class: 'F', travel_pod: 2, shuttlecraft: 2}
        }
    },

]


let sherman_class_ships = [
    {
        vessel: 'USS',
        name: 'Sherman',
        registry: 'NCC-935'
    },
    {
        vessel: 'USS',
        name: 'Von Drake',
        registry: 'NCC-936'
    },
    {
        vessel: 'USS',
        name: 'Peabody',
        registry: 'NCC-937'
    },
    {
        vessel: 'USS',
        name: 'Neil',
        registry: 'NCC-938',
        note: 'Mysteriously lost, causes unknown'
    },
    {
        vessel: 'USS',
        name: 'Dudley',
        registry: 'NCC-939'
    },
    {
        vessel: 'USS',
        name: 'Yamhill',
        registry: 'NAR-1200'
    },
    {
        vessel: 'USS',
        name: 'Sandra',
        registry: 'NAR-1201'
    },
    {
        vessel: 'USS',
        name: 'Mayagues',
        registry: 'NAR-1202'
    },
    {
        vessel: 'USS',
        name: 'Sulphur Queen',
        registry: 'NCC-1203'
    },
    {
        vessel: 'SS',
        name: 'Gamesa',
        registry: 'NGL-1460'
    },
    {
        vessel: 'SS',
        name: 'Kron',
        registry: 'NGL-1461',
        note: 'Self destructed to avoid capture by Orion pirates'
    },
    {
        vessel: 'SS',
        name: 'Puente Canario',
        registry: 'NGL-1462'
    },
    {
        vessel: 'SS',
        name: 'Camponalon',
        registry: 'NGL-1463',
        note:'Destroyed by Klingon raid near Sherman planet'
    },
    {
        vessel: 'SS',
        name: 'Alecia',
        registry: 'NGL-1464',
        note:'Destroyed by Klingon raid near Sherman planet'
    },
    {
        vessel: 'SS',
        name: 'Victoria Elena',
        registry: 'NGL-1465'
    },
    {
        vessel: 'SS',
        name: 'Villa De Orio',
        registry: 'NGL-1466'
    },
    {
        vessel: 'SS',
        name: 'Urlea',
        registry: 'NGL-1467'
    },

]

// console.log(sherman_class_ships[6].name)



let independence_class_ships = [
    {
        vessel: 'USS',
        name: 'Independence',
        registry: 'NCC-940'
    },
    {
        vessel: 'USS',
        name: 'Blue City',
        registry: 'NCC-941'
    },
    {
        vessel: 'USS',
        name: 'Branson',
        registry: 'NCC-942'
    },
    {
        vessel: 'USS',
        name: 'Kansas City',
        registry: 'NCC-943'
    },
    {
        vessel: 'USS',
        name: 'Saint Peters',
        registry: 'NCC-944'
    },
    {
        vessel: 'USS',
        name: 'Belton',
        registry: 'NCC-945'
    },

    {
        vessel: 'USS',
        name: 'Westralia',
        registry: 'NAR-1204'
    },
    {
        vessel: 'USS',
        name: 'Durance',
        registry: 'NAR-1205'
    },
    {
        vessel: 'USS',
        name: 'Success',
        registry: 'NAR-1206'
    },
    {
        vessel: 'USS',
        name: 'Heron Bay',
        registry: 'NAR-1207'
    },
    {
        vessel: 'USS',
        name: 'Somme',
        registry: 'NAR-1208'
    },
    {
        vessel: 'USS',
        name: 'Marne',
        registry: 'NAR-1209'
    },
    {
        vessel: 'SS',
        name: 'Astral Queen',
        registry: 'NFT-1910'
    },
    {
        vessel: 'SS',
        name: 'Bonne Girl',
        registry: 'NFT-1911'
    },
    {
        vessel: 'USS',
        name: 'Norkova',
        registry: 'NFT-1912'
    },
    {
        vessel: 'SS',
        name: 'Huron',
        registry: 'NFT-1913',
        note:'Raided by Orion pirates, triggering Orion conflict'
    },
    {
        vessel: 'SS',
        name: 'Oregon Trail',
        registry: 'NFT-1914'
    },
    {
        vessel: 'SS',
        name: 'Deidre',
        registry: 'NFT-1915'
    },
    {
        vessel: 'SS',
        name: 'Kitty Hawk',
        registry: 'NFT-1916'
    },
    {
        vessel: 'SS',
        name: 'Northern Star',
        registry: 'NFT-1917'
    },

]



const nelson_class = [
    {
        type: 'Reconnaissance Scout',
        design_chief: 'Dana Knutson',
        class_commission: 2262,
        complement: {
            officers: 20,
            crew: 145
        }
    },

    {
        hull_structure: 28,
        hull_size: { class: 5, decks: 13 },
        hull_length: {
            length_m: 248,
            beam_m: 127,
            height_m: 60
        },
        hull_mass_MT: 100000
    },

    {
        drive_system_impulse: 'SBE (.75c)',
        drive_system_warp: ['PB-32-Mk 3', 'Single', 'WF 6/8'],
        drive_system_maneuver_modifiers: ['0C','+3H','-1T']
    },

    {
        tactical_phasers: {
            class: 9,
            banks: 2,
            note: '2 each, (f/p, f/s)'
        },
        tactical_torpedoes: 'MK-IV Twin Launcher (f)',
        tactical_deflector_shield: 'PPF 2a'
    },

    {
        class_traits: {
            hardened_system: 'Life Support',
            design_flaw: 'warp engine',
            enhanced_sensors: {quantity: 2, range: 'short'}
        }
    },

    {
        operational_data: {
            atmosphere_capable: false,
            cargo_units: 50,
            life_support: 'Class 4',
            operational_systems: 'Class 4',
            sensor_system: 'Class 3',
            separation_system: false,
            shuttlebay: { size: 'small', id: '1a' },
            shuttlecraft: 1,
            tractor_beams: ['1 fv', '1a'],
            transporters: {
                STD: 2,
                emergency: 2,
                cargo: 2
            },
            supplemental_craft: {class: 'H', travel_pod: 2}
        }
    },
]


let nelson_class_ships = [
    {
        vessel: 'USS',
        name: 'Nelson',
        registry: 'NCC-880'
    },
    {
        vessel: 'USS',
        name: 'Sager',
        registry: 'NCC-881'
    },
    {
        vessel: 'USS',
        name: 'Moisanen',
        registry: 'NCC-882'
    },
    {
        vessel: 'USS',
        name: 'Manzer',
        registry: 'NCC-883'
    },
    {
        vessel: 'USS',
        name: 'Weblo',
        registry: 'NCC-884'
    },
    {
        vessel: 'USS',
        name: 'Nostromo',
        registry: 'NCC-885'
    },
    {
        vessel: 'USS',
        name: 'Eagle',
        registry: 'NCC-886'
    },
    {
        vessel: 'USS',
        name: 'Hawk',
        registry: 'NCC-887'
    },
    {
        vessel: 'USS',
        name: 'Scavenger',
        registry: 'NCC-888'
    },
    {
        vessel: 'USS',
        name: 'Falcon',
        registry: 'NCC-889'
    },
    {
        vessel: 'USS',
        name: 'Raven',
        registry: 'NCC-890',
        note:'Destroyed by Orion pirates'
    },
]




const bonaventure_class = [
    {
        type: 'Test Vessel',
        design_chief: 'Don Christianson',
        class_commission: 2235,
        complement: {
            officers: 35,
            crew: 155
        }
    },

    {
        hull_structure: 28,
        hull_size: { class: 5, decks: 19 },
        hull_length: {
            length_m: 198,
            beam_m: 95,
            height_m: 77
        },
        hull_mass_MT: 115000
    },

    {
        drive_system_impulse: 'SBE (.75c)',
        drive_system_warp: ['PB-32-Prototype', 'Tandem', 'WF 6/8'],
        drive_system_maneuver_modifiers: ['+1C','+1H','+1T']
    },

    {
        tactical_lasers: {
            class: 7,
            banks: 1,
            note: '2 each, (f)'
        },
        // tactical_torpedoes: 'MK-IV Twin Launcher (f)',
        tactical_deflector_shield: 'PPF 2a'
    },

    {
        class_traits: {
            hardened_system: 'Life Support',
            // design_flaw: 'warp engine',
            // enhanced_sensors: {quantity: 2, range: 'short'}
            prototype: 'Warp engine'
        }
    },

    {
        operational_data: {
            atmosphere_capable: false,
            cargo_units: 50,
            life_support: 'Class 4',
            operational_systems: 'Class 3',
            sensor_system: 'Class 3',
            separation_system: false,
            shuttlebay: { size: 'medium', id: '1a' },
            shuttlecraft: 8,
            tractor_beams: ['1 fv', '1a'],
            transporters: {
                STD: 2,
                emergency: 2,
                cargo: 2
            },
            supplemental_craft: {class: 'H', travel_pod: 2, class:'F', shuttlecraft: 2}
        }
    },
]

let bonaventure_class_ships = [
    {
        vessel: 'USS',
        name: 'Bonaventure',
        registry: 'NX-1028',
        note:'First ship with dilithium drive. Lost in temporal anomaly'
    },
    {
        vessel: 'USS',
        name: 'Bonaventure Chance',
        registry: 'NX-1029',
        note:'First ship to reach warp 8. Retired to Memory Alpha'
    }
]


let akula_class_ships = [
    {
        vessel: 'USS',
        name: 'Akula',
        registry:'NCC-1254'
    },
    {
        vessel: 'USS',
        name: 'Bars',
        registry:'NCC-1255'
    },
    {
        vessel: 'USS',
        name: 'Kit',
        registry:'NCC-1256'
    },
    {
        vessel: 'USS',
        name: 'Del Fin',
        registry:'NCC-1257'
    },
    {
        vessel: 'USS',
        name: 'Kashalot',
        registry: 'NCC-1258',
        note:'Lost in Orion conflict'
    },
    {
        vessel: 'USS',
        name: 'Narval',
        registry: 'NCC-1259',
        note:'Abandoned after radiation contamination'
    },
    {
        vessel: 'USS',
        name: 'Morzh',
        registry:'NCC-1260'
    },
    {
        vessel: 'USS',
        name: 'Pantera',
        registry:'NCC-1261'
    },
    {
        vessel: 'USS',
        name: 'Volk',
        registry: 'NCC-1262',
        note:'Retired as training vessel'
    },
    {
        vessel: 'USS',
        name: 'Leopard',
        registry:'NCC-1264'
    },
    {
        vessel: 'USS',
        name: 'Tigr',
        registry:'NCC-1264' // not a typo
    },
    {
        vessel: 'USS',
        name: 'Drakon',
        registry:'NCC-1265'
    },
    {
        vessel: 'USS',
        name: 'Vepr',
        registry:'NCC-1266'
    },
    {
        vessel: 'USS',
        name: 'Gepard',
        registry:'NCC-1267'
    },
    {
        vessel: 'USS',
        name: 'Sadat',
        registry:'NCC-1268'
    },
    {
        vessel: 'USS',
        name: 'Kuguar',
        registry:'NCC-1269'
    },
    {
        vessel: 'USS',
        name: 'Wilkerson',
        registry:'NCC-2224'
    },
    {
        vessel: 'USS',
        name: 'Carmichael',
        registry:'NCC-2225'
    },
    {
        vessel: 'USS',
        name: 'Henleyr',
        registry:'NCC-2226'
    },
    {
        vessel: 'USS',
        name: 'Bars',
        registry:'NCC-2227'
    },
    {
        vessel: 'USS',
        name: 'Kashalot',
        registry:'NCC-2228'
    },
    {
        vessel: 'USS',
        name: 'Gepard',
        registry:'NCC-2229'
    },

]


let derf_class_ships = [
    {
        vessel: 'USS',
        name: 'Derf',
        registry: 'NCC-1270',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Polynesian',
        registry: 'NCC-1271',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Beowulf',
        registry: 'NCC-1272',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Spear',
        registry: 'NCC-1273',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Acropolis',
        registry: 'NCC-1274',
        note: 'Plague ship, destroyed by Federation forces'
    },
    {
        vessel: 'USS',
        name: 'Emory Land',
        registry: 'NCC-1275',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Cable',
        registry: 'NCC-1276',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Supply',
        registry: 'NCC-1277',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Rainer',
        registry: 'NCC-1278',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Arctic',
        registry: 'NCC-1279',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Bridge',
        registry: 'NCC-1280',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Kilauea',
        registry: 'NCC-1281',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Santa Barbara',
        registry: 'NCC-1282',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Flint',
        registry: 'NCC-1283',
        note: 'Destroyed defending colony from unknown attacker'
    },
    {
        vessel: 'USS',
        name: 'Shasta',
        registry: 'NCC-1284',
        note: 'Destroyed defending colony from unknown attacker'
    },
    {
        vessel: 'USS',
        name: 'Mount Baker',
        registry: 'NCC-1285',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Kiska',
        registry: 'NCC-1286',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Niagrara',
        registry: 'NCC-1287',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Concorde',
        registry: 'NCC-1288',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'San Jose',
        registry: 'NCC-1289',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Kanawha',
        registry: 'NAR-1279',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Pecos',
        registry: 'NAR-1280',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Big Horn',
        registry: 'NAR-1281',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Patuxtent',
        registry: 'NAR-1282',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Laramie',
        registry: 'NAR-1283',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Gadualupe',
        registry: 'NAR-1284',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Rappahannock',
        registry: 'NAR-1285',
        note: ''
    },

]



const marcoPolo_class = [
    {
        type: 'Cruiser',
        design_chief: 'Mark Buckingham',
        class_commission: 2251,
        complement: {
            officers: 45,
            crew: 410
        }
    },

    {
        hull_structure: 40,
        hull_size: { class: 6, decks: 17 },
        hull_length: {
            length_m: 213,
            beam_m: 127,
            height_m: 65
        },
        hull_mass_MT: 205000
    },

    {
        drive_system_impulse: 'SBE (.75c) (redundant system)',
        drive_system_warp: ['PB-32-Mk 3', 'Single', 'WF 6/8'],
        drive_system_maneuver_modifiers: ['0C','0H','0T']
    },

    {
        tactical_phasers: {
            class: 9,
            banks: 3,
            note: '2 each, (f, f/p, f/s)'
        },
        tactical_torpedoes: 'MK-IV Twin Launcher (f)',
        tactical_deflector_shield: 'PFF 2a'
    },

    {
        class_traits: {
            hardened_system: 'Life Support',
            design_flaw: 'warp engine',
            enhanced_sensors: {quantity: 2, range: 'short'}
        }
    },

    {
        operational_data: {
            atmosphere_capable: false,
            cargo_units: 50,
            life_support: 'Class 4',
            operational_systems: 'Class 4',
            sensor_system: 'Class 3',
            separation_system: true,
            shuttlebay: { size: 'large', id: '1a' },
            shuttlecraft: 12,
            tractor_beams: ['1 fv', '1a'],
            transporters: {
                STD: 8,
                emergency: 4,
                cargo: 2
            },
            supplemental_craft: {
                class_H: { travel_pod: 2, shuttlecraft: 4},
                class_HF: { shuttlecraft: 2 },
                class_AF: { shuttlecraft: 2 }
            
            }
        }
    },
]

let marcoPolo_class_ships = [
    {
        vessel: 'USS',
        name: 'Marco Polo',
        registry: 'NCC-1290',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Bren',
        registry: 'NCC-1291',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Clute',
        registry: 'NCC-1292',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ozbourne',
        registry: 'NCC-1293',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Fithian',
        registry: 'NCC-1294',
        note: 'scrapped after warp engine accident'
    },
    {
        vessel: 'USS',
        name: 'Asaro',
        registry: 'NCC-1295',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Bakker',
        registry: 'NCC-1296',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Holding',
        registry: 'NCC-1297',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ciaschini',
        registry: 'NCC-1298',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Leeward',
        registry: 'NCC-1299',
        note: ''
    },

]





const larson_class = [
    {
        type: 'Destroyer',
        design_chief: 'Dana Knutson',
        class_commission: 2248,
        complement: {
            officers: 25,
            crew: 180
        }
    },

    {
        hull_structure: 30,
        hull_size: { class: 5, decks: 13 },
        hull_length: {
            length_m: 276,
            beam_m: 132,
            height_m: 84
        },
        hull_mass_MT: 115000
    },

    {
        drive_system_impulse: 'SBE (.75c)',
        drive_system_warp: ['PB-32-Mk 3', 'Single', 'WF 6/8'],
        drive_system_maneuver_modifiers: ['+1C','+2H','+2T']
    },

    {
        tactical_phasers: {
            class: 9,
            banks: 3,
            note: '2 each, (f, f/p, f/s)'
        },
        tactical_torpedoes: 'MK-IV Twin Launcher (f)',
        tactical_deflector_shield: 'PFF 2a'
    },

    {
        class_traits: {
            hardened_system: 'Life Support',
            design_flaw: 'warp engine',
            // enhanced_sensors: {quantity: 2, range: 'short'}
        }
    },

    {
        operational_data: {
            atmosphere_capable: false,
            cargo_units: 50,
            life_support: 'Class 4',
            operational_systems: 'Class 4',
            sensor_system: 'Class 3',
            separation_system: false,
            shuttlebay: { size: 'small', id: '2a' },
            shuttlecraft: 2,
            tractor_beams: ['1 fv', '1a'],
            transporters: {
                STD: 2,
                emergency: 2,
                cargo: 2
            },
            supplemental_craft: {class: 'H', travel_pod: 4}
        }
    },
]


let larson_class_ships = [
    {
        vessel: 'USS',
        name: 'Larson',
        registry: 'NCC-1400',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Midway',
        registry: 'NCC-1401',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Tannenburg',
        registry: 'NCC-1402',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Trafalgar',
        registry: 'NCC-1403',
        note: 'Lost in Orion conflict'
    },
    {
        vessel: 'USS',
        name: 'Thelenth',
        registry: 'NCC-1404',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Waterloo',
        registry: 'NCC-1405',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Borodino',
        registry: 'NCC-1406',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Austerlitz',
        registry: 'NCC-1407',
        note: 'Lost in Orion conflict'
    },
    {
        vessel: 'USS',
        name: 'Normandy',
        registry: 'NCC-1408',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Marathon',
        registry: 'NCC-1409',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Pharsalus',
        registry: 'NCC-1410',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Crecy',
        registry: 'NCC-1411',
        note: 'Myseriously lost near Romulan space'
    },
    {
        vessel: 'USS',
        name: 'Poitiers',
        registry: 'NCC-1412',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Agincourt',
        registry: 'NCC-1413',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Bienheim',
        registry: 'NCC-1414',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Torgau',
        registry: 'NCC-1415',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Eylau',
        registry: 'NCC-1416',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Leyte',
        registry: 'NCC-1417',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Leipzig',
        registry: 'NCC-1418',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Buena Vista',
        registry: 'NCC-1419',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Garbo',
        registry: 'NCC-1420',
        note: 'Lost during classified mission'
    },
    {
        vessel: 'USS',
        name: 'Catinian',
        registry: 'NCC-1421',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Gallipoli',
        registry: 'NCC-1422',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Jutland',
        registry: 'NCC-1423',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Anzio',
        registry: 'NCC-1424',
        note: ''
    },

]


let burke_class_ships = [
    {
        vessel: 'USS',
        name: 'Burke',
        registry: 'NCC-1448',
        note: 'retired to memory alpha'
    },
    {
        vessel: 'USS',
        name: 'Barry',
        registry: 'NCC-1449',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Jones',
        registry: 'NCC-1450',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Wilbur',
        registry: 'NCC-1451',
        note: 'Lost in Orion conflict'
    },
    {
        vessel: 'USS',
        name: 'Stout',
        registry: 'NCC-1452',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'McCain',
        registry: 'NCC-1453',
        note: 'scrapped after impulse engine malfunction'
    },
    {
        vessel: 'USS',
        name: 'Mitscher',
        registry: 'NCC-1454',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Laboon',
        registry: 'NCC-1455',
        note: 'Lost in Orion conflict'
    },
    {
        vessel: 'USS',
        name: 'Russell',
        registry: 'NCC-1456',
        note: 'Lost in Klingon raid'
    },
    {
        vessel: 'USS',
        name: 'Hamilton',
        registry: 'NCC-1457',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ramage',
        registry: 'NCC-1458',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Fitzgerald',
        registry: 'NCC-1459',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Sthethem',
        registry: 'NCC-1460',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Carney',
        registry: 'NCC-1461',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Benfold',
        registry: 'NCC-1462',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Gonzalez',
        registry: 'NCC-1463',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Cole',
        registry: 'NCC-1464',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'The Sullivans',
        registry: 'NCC-1465',
        note: 'retired as training vessel'
    },
    {
        vessel: 'USS',
        name: 'Milius',
        registry: 'NCC-1466',
        note: 'retired as training vessel'
    },
    {
        vessel: 'USS',
        name: 'Hopper',
        registry: 'NCC-1467',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ross',
        registry: 'NCC-1468',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Mahan',
        registry: 'NCC-1469',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'McFaul',
        registry: 'NCC-1470',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Cook',
        registry: 'NCC-1471',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Higgins',
        registry: 'NCC-1472',
        note: ''
    },
    {
        vessel: 'USS',
        name: "O'Kane",
        registry: 'NCC-1473',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Porter',
        registry: 'NCC-1474',
        note: ''
    },

]

let anton_class_ships = [
    {
        vessel: 'USS',
        name: 'Anton',
        registry: 'NCC-1500',
        note: 'retired to memory alpha'
    },
    {
        vessel: 'USS',
        name: 'Anderson',
        registry: 'NCC-1501',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hammann',
        registry: 'NCC-1502',
        note: 'Lost in Orion conflict, largest ship lost'
    },
    {
        vessel: 'USS',
        name: 'Hughes',
        registry: 'NCC-1503',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Simes',
        registry: 'NCC-1504',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Mustin',
        registry: 'NCC-1505',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Russell',
        registry: 'NCC-1506',
        note: ''
    },
    {
        vessel: 'USS',
        name: "O'Brien",
        registry: 'NCC-1507',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Walke',
        registry: 'NCC-1508',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hull',
        registry: 'NCC-1509',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hilbert',
        registry: 'NCC-1510',
        note: 'retired as training vessel'
    },
    {
        vessel: 'USS',
        name: 'Gunn',
        registry: 'NCC-1511',
        note: 'retired as training vessel'
    },
]

// console.log(anton_class_ships)

let wayfarer_class_ships = [
    {
        vessel: 'USS',
        name: 'Wayfarer',
        registry: 'NCC-1535',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Vavilov',
        registry: 'NCC-1536',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Shackleton',
        registry: 'NCC-1537',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'James Ross',
        registry: 'NCC-1538',
        note: ''
    },

    {
        vessel: 'USS',
        name: 'Onnuri',
        registry: 'NCC-1539',
        note: ''
    },
]


let taurus_class_ships = [
    {
        vessel: 'USS',
        name: 'Taurus',
        registry: 'NCC-1558',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Oblia',
        registry: 'NCC-1559',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Roma',
        registry: 'NCC-1560',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Tirrenia',
        registry: 'NCC-1561',
        note: 'scrapped after damage from warp accident'
    },
    {
        vessel: 'USS',
        name: 'Snelling',
        registry: 'NCC-1562',
        note: ''
    },

    {
        vessel: 'USS',
        name: 'Casa Grande',
        registry: 'NCC-1563',
        note: 'destroyed after collision with Klingon cruiser'
    },
    {
        vessel: 'USS',
        name: 'Taborfjell',
        registry: 'NCC-1564',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Tai Shen',
        registry: 'NCC-1565',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Brovig',
        registry: 'NCC-1566',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Gallia',
        registry: 'NCC-1567',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Strachan',
        registry: 'NCC-1568',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Wyvern',
        registry: 'NCC-1569',
        note: ''
    },
]


let montojo_class_ships = [
    {
        vessel: 'USS',
        name: 'Montojo',
        registry: 'NCC-1590',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Cavera',
        registry: 'NCC-1591',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Colon',
        registry: 'NCC-1592',
        note: ''
    },

    {
        vessel: 'USS',
        name: 'Oliva',
        registry: 'NCC-1593',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Pasaron',
        registry: 'NCC-1594',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Langara',
        registry: 'NCC-1595',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Topete',
        registry: 'NCC-1596',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Moriscos',
        registry: 'NCC-1597',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Aquinaldo',
        registry: 'NCC-1598',
        note: 'lost to ion storm'
    },
    {
        vessel: 'USS',
        name: 'Anthonio',
        registry: 'NCC-1599',
        note: ''
    },
]


let izmail_class_ships = [
    {
        vessel: 'USS',
        name: 'Izmail',
        registry: 'NCC-1636',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Kinburn',
        registry: 'NCC-1637',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Bogatir',
        registry: 'NCC-1638',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Butakov',
        registry: 'NCC-1639',
        note: ''
    },
]







const loknar_class = [
    {
        type: 'Frigate',
        class_designation: 1,
        // design_chief: 'Dana Knutson',
        class_commission: 2259,
        complement: {
            officers: 32,
            crew: 145
        }
    },

    {
        hull_structure: 28,
        hull_size: { class: 5, decks: 13 },
        hull_length: {
            length_m: 288,
            // beam_m: 127,
            breadth_m: 127,
            height_m: 76
        },
        hull_mass_KMT: 142
    },

    {
        drive_system_impulse: 'FID (.75c)',
        drive_system_warp: ['FWF-1', 'Tandem', 'WF 6/8'],
        // drive_system_maneuver_modifiers: ['0C','+3H','-1T']
    },

    {
        tactical_phasers: {
            // class: 9,
            banks: 3,
            note: '2 each, (FH-3)'
        },
        tactical_torpedoes: {bank: 1, type: 'FP-1'}, //'MK-IV Twin Launcher (f)',
        // tactical_deflector_shield: 'PPF 2a'
    },

    // {
    //     class_traits: {
    //         hardened_system: 'Life Support',
    //         design_flaw: 'warp engine',
    //         enhanced_sensors: {quantity: 2, range: 'short'}
    //     }
    // },

    // {
    //     operational_data: {
    //         atmosphere_capable: false,
    //         cargo_units: 50,
    //         life_support: 'Class 4',
    //         operational_systems: 'Class 4',
    //         sensor_system: 'Class 3',
    //         separation_system: false,
    //         shuttlebay: { size: 'small', id: '1a' },
    //         shuttlecraft: 1,
    //         tractor_beams: ['1 fv', '1a'],
    //         transporters: {
    //             STD: 2,
    //             emergency: 2,
    //             cargo: 2
    //         },
    //         supplemental_craft: {class: 'H', travel_pod: 2}
    //     }
    // },
]


let loknar_class_ships = [
    {
        vessel: 'USS',
        name: 'Loknar',
        registry: 'NCC-1640',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ankeil',
        registry: 'NCC-1641',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Vernol',
        registry: 'NCC-1642',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Tarntis',
        registry: 'NCC-1643',
        note: 'Lost in Orion conflict'
    },
    {
        vessel: 'USS',
        name: 'Alexandretta',
        registry: 'NCC-1644',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Morgan City',
        registry: 'NCC-1645',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Troy',
        registry: 'NCC-1646',
        note: 'Lost in Klingon raid'
    },
    {
        vessel: 'USS',
        name: 'Farside',
        registry: 'NCC-1647',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'New America',
        registry: 'NCC-1648',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Kosk',
        registry: 'NCC-1649',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Borga',
        registry: 'NCC-1650',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Peking',
        registry: 'NCC-1651',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Epcot',
        registry: 'NCC-1652',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Aldebaran',
        registry: 'NCC-1653',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Argus City',
        registry: 'NCC-1654',
        note: 'Lost mysteriously patrolling the Klingon neutral zone'
    },
    {
        vessel: 'USS',
        name: 'Yorkshire',
        registry: 'NCC-1655',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Boirdi',
        registry: 'NCC-1656',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'New Corinth',
        registry: 'NCC-1657',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Kyoto',
        registry: 'NCC-1658',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Petrograd',
        registry: 'NCC-1659',
        note: ''
    },
 
]

/*
Loknar General information

THOUGH TECHNICALLY 'EARTH-BORNE' IN DESIGN, THE
LOKNAR REPRESENTED THE FIRST MAJOR INTEGRATED FLEET
DESIGN WITH LARGE INPUT FROM ANDORIANS. THE ANDORIANS, NOT WANTING TO BE UNPREPARED AGAINST NEW
AGRESSORS, OR REPEATED KLINGON AGRESSION, WANTED A
WARHORSE SHIP WITHIN THE FEDERATION FLEET. IT WAS
ALSO NO SECRET THAT THE ANDORIAN DEFENSE FLEET SHIPS
WERE FALLING BEHIND THE TIMES AS WELL (THOUGH
ROUGHLY EQUIVALENT TO BATON ROUGE-STYLE SHIPS), AND
ANDOR THEREFORE WAS EVEN MORE EAGER TO GET AN UPDATED CLASS OF FRIGATE FOR THEIR OWN DEFENSE. 
THE ANDORIAN ARGUMENT WON OUT, AND THEIR INPUT BOTH
IN DESIGN AND PURPOSE CREATED ONE OF THE MOST
WIDELY-ACCEPTED DESIGNS IN STARFLEET. THE LOKNAR IS A
PROVEN SHIP, NOT ONLY IN HER ROLE AS A DEFENSE-ACTION
FRIGATE, BUT ALSO IN A VARIABLE MISSION CAPACITY. LIKE HER COUSIN, THE CONSTITUTION-CLASS, THE LOKNAR'S
PERFORMANCE PROVED SO GREAT THROUGH HER CAREER
THAT SHE HAS BEEN SCHEDULED FOR REFITS AND 'REFIT-SPECIFICATION BUILDS' STARTING 
*/















//================================= CONSITUTION CLASS 1700 =======================


const consitution_class = [
    {
        type: 'Cruiser',
        design_chief: 'Matthew Jefferies',
        class_commission: 2245,
        complement: {
            officers: 43,
            crew: 387
        }
    },

    {
        hull_structure: 40,
        hull_size: { class: 6, decks: 23 },
        hull_length: {
            length_m: 290,
            beam_m: 127,
            height_m: 72
        },
        hull_mass_MT: 192000
    },

    {
        drive_system_impulse: 'SBE (.75c)',
        drive_system_warp: ['PB-32-Mk 3', 'Tandem', 'WF 6/8'],
        drive_system_maneuver_modifiers: ['2C','+0H','+2T']
    },

    {
        tactical_phasers: {
            1:{class: 9, banks: 3, note: '2 each, (f, f/p, f/s)'},
            2:{class: 9, banks: 2, note: '1 each' }
        },
        tactical_torpedoes: 'MK-IV Twin Launcher (f)',
        tactical_deflector_shield: 'PFF 2a'
    },

    {
        class_traits: {
            hardened_system: 'Life Support',
            // design_flaw: 'warp engine',
            // enhanced_sensors: {quantity: 2, range: 'short'}
        }
    },

    {
        operational_data: {
            atmosphere_capable: false,
            cargo_units: 70,
            life_support: 'Class 4',
            operational_systems: 'Class 4',
            sensor_system: 'Class 3',
            separation_system: true,
            shuttlebay: { size: 'large', id: '1a' },
            shuttlecraft: 12,
            tractor_beams: ['1 fv', '1a'],
            transporters: {
                STD: 6,
                emergency: 4,
                cargo: 2
            },
            supplemental_craft: [
                { class: 'H', travel_pod: 2 },
                { class: 'F', shuttlecraft: 4 },
                { class: 'HF', shuttlecraft: 2 },
                { class: 'AF', shuttlecraft: 2 }
                
            ]
        }
    },
]


let consitution_class_ships = [
    {
        vessel: 'USS',
        name: 'Constitution',
        registry: 'NCC-1700',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Constellation',
        registry: 'NCC-1017',
        note: 'sacrificed to destroy Doomsday Weapon'
    },
    {
        vessel: 'USS',
        name: 'Yamato',
        registry: 'NCC-1305-A',
        note: ''
    },

    //===========================
    {
        vessel: 'USS',
        name: 'Enterprise',
        registry: 'NCC-1701',
        note: 'legendary starship'
    },
    //==========================

    {
        vessel: 'USS',
        name: 'Nimitz',
        registry: 'NCC-1702',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hood',
        registry: 'NCC-1703',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Bismark',
        registry: 'NCC-1704',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Excalibur',
        registry: 'NCC-1705',
        note: 'destroyed by M-5 computer attack'
    },
    {
        vessel: 'USS',
        name: 'Exeter',
        registry: 'NCC-1706',
        note: 'decontaminated plague ship'
    },
    {
        vessel: 'USS',
        name: 'Valiant',
        registry: 'NCC-1707',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Intrepid',
        registry: 'NCC-1708',
        note: 'All Vulcan crew, lost to alien life form'
    },
    {
        vessel: 'USS',
        name: 'Lexington',
        registry: 'NCC-1709',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Kongo',
        registry: 'NCC-1710',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Potemkin',
        registry: 'NCC-1711',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Bonhomme Richard',
        registry: 'NCC-1712',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Monitor',
        registry: 'NCC-1713',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hornet',
        registry: 'NCC-1714',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Merrimac',
        registry: 'NCC-1715',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Endeavor',
        registry: 'NCC-1716',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Yorktown',
        registry: 'NCC-1717',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Essex',
        registry: 'NCC-1718',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Akagi',
        registry: 'NCC-1719',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ti-Ho',
        registry: 'NCC-1760',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Soryu',
        registry: 'NCC-1761',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hiryu',
        registry: 'NCC-1762',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Excelsior',
        registry: 'NCC-1763',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Defiant',
        registry: 'NCC-1764',
        note: 'lost tointerphase anomaly near Tholian space'
    },

]


//================================







let longbow_class_ships = [
    {
        vessel: 'USS',
        name: 'Longbow',
        registry: 'NCC-1725',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Crossbow',
        registry: 'NCC-1726',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Fencer',
        registry: 'NCC-1727',
        note: 'lost to Romulan skirmish'
    },
    {
        vessel: 'USS',
        name: 'Broadsword',
        registry: 'NCC-1728',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Cutlass',
        registry: 'NCC-1729',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Dagger',
        registry: 'NCC-1730',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Carromade',
        registry: 'NCC-1731',
        note: ''
    },
]




const decatur_class = [
    {
        type: 'Starship',
        class_designation: 1,
        // design_chief: 'Dana Knutson',
        class_commission: 2253,
        complement: {
            officers: 36,
            crew: 320
        }
    },

    {
        // hull_structure: 28,
        // hull_size: { class: 5, decks: 13 },
        hull_length: {
            length_m: 271,
            // beam_m: 127,
            breadth_m:127,
            height_m: 82
        },
        // hull_mass_MT: 100000
    },

    {
        drive_system_impulse: 'FID-2 (.75c)',
        drive_system_warp: ['FWF-1', 'Tandem', 'WF 6/8'],
        // drive_system_maneuver_modifiers: ['0C','+3H','-1T']
    },

    {
        tactical_phasers: [
            { class: 'none', banks: 3, type: 'FH-3', note: '2 each' },
            { class: 'none', banks: 2, type: 'FH-3', note: '1 each)' }
            
        ],
        tactical_torpedoes: {banks: 2, type: 'FP-1'},
        // tactical_deflector_shield: 'PPF 2a'
    },

    // {
    //     class_traits: {
    //         hardened_system: 'Life Support',
    //         design_flaw: 'warp engine',
    //         enhanced_sensors: {quantity: 2, range: 'short'}
    //     }
    // },

    {
        operational_data: {
        //     atmosphere_capable: false,
        //     cargo_units: 50,
        //     life_support: 'Class 4',
        //     operational_systems: 'Class 4',
        //     sensor_system: 'Class 3',
        //     separation_system: false,
        //     shuttlebay: { size: 'small', id: '1a' },
        //     shuttlecraft: 1,
        //     tractor_beams: ['1 fv', '1a'],
        //     transporters: {
        //         STD: 2,
        //         emergency: 2,
        //         cargo: 2
        //     },
            supplemental_craft: [
                { class: 'H', travel_pod: 2 },
                { class: 'aF', shuttlecraft: 1 },
                { class: 'HF', shuttlecraft: 1 },
                { class: 'F', shuttlecraft:2}
                
            ]
            
        }
    },
]


let decatur_class_ships = [
    {
        vessel: 'USS',
        name: 'Decatur',
        registry: 'NCC-1780',
        note: 'retired to memory alpha'
    },
    {
        vessel: 'USS',
        name: 'Belknap',
        registry: 'NCC-1781',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Springfield',
        registry: 'NCC-1782',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'America',
        registry: 'NCC-1783',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Yarnell',
        registry: 'NCC-1784',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Worden',
        registry: 'NCC-1785',
        note: 'lost defending colony from unknown hostiles'
    },
    {
        vessel: 'USS',
        name: 'Dale',
        registry: 'NCC-1786',
        note: 'lost to sabotage, believed to be by Romulans'
    },
    {
        vessel: 'USS',
        name: 'Halsey',
        registry: 'NCC-1787',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Daniels',
        registry: 'NCC-1788',
        note: ''
    },

    {
        vessel: 'USS',
        name: 'Jouette',
        registry: 'NCC-1789',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Gates',
        registry: 'NCC-1790',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Mobile Bay',
        registry: 'NCC-1791',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Antietam',
        registry: 'NCC-1792',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Princeton',
        registry: 'NCC-1793',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Cowpens',
        registry: 'NCC-1794',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Port Royal',
        registry: 'NCC-1795',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Leyete Gulf',
        registry: 'NCC-1796',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Monterey',
        registry: 'NCC-1997',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Chosin',
        registry: 'NCC-1798',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hugh City',
        registry: 'NCC-1799',
        note: ''
    },

]





const surya_class = [
    {
        type: 'Starship',
        class_designation:1,
        // design_chief: 'Dana Knutson',
        class_commission: 2251,
        complement: {
            officers: 32,
            crew: 195
        }
    },

    {
        // hull_structure: 28,
        // hull_size: { class: 5, decks: 13 },
        hull_length: {
            length_m: 236,
            // beam_m: 127,
            breadth_m: 136,
            height_m: 60
        },
        hull_mass_KMT: 155
    },

    {
        drive_system_impulse: 'FID-2 (.75c)',
        drive_system_warp: ['FWF-1', 'Tandem', 'WF 6/8'],
        drive_system_maneuver_modifiers: ['0C','+3H','-1T']
    },

    {
        tactical_phasers: [
            { banks: 2, note: '2 each, (f/p, f/s)' }
        ],
        tactical_torpedoes: {banks: 1, type: 'FP-1'},
        // tactical_deflector_shield: 'PPF 2a'
    },

    // {
    //     class_traits: {
    //         hardened_system: 'Life Support',
    //         design_flaw: 'warp engine',
    //         enhanced_sensors: {quantity: 2, range: 'short'}
    //     }
    // },

    {
        operational_data: {
            // atmosphere_capable: false,
            // cargo_units: 50,
            // life_support: 'Class 4',
            // operational_systems: 'Class 4',
            // sensor_system: 'Class 3',
            // separation_system: false,
            // shuttlebay: { size: 'small', id: '1a' },
            // shuttlecraft: 1,
            // tractor_beams: ['1 fv', '1a'],
            // transporters: {
            //     STD: 2,
            //     emergency: 2,
            //     cargo: 2
            // },
            supplemental_craft: [
                { class: 'H', travel_pod: 2 },
                { class: 'aF', shuttlecraft: 1 },
                { class: 'HF', shuttlecraft: 1 },
                {class:'F', shuttlecraft: 2}
            ],
            
        }
    },
]


let surya_class_ships = [
    {
        vessel: 'USS',
        name: 'Surya',
        registry: 'NCC-1850',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Illusive',
        registry: 'NCC-1851',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Antrim',
        registry: 'NCC-1852',
        note: 'lost due to transporter accident'
    },
    {
        vessel: 'USS',
        name: 'Durmitov',
        registry: 'NCC-1853',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Kanaris',
        registry: 'NCC-1854',
        note: 'mysteriously lost en route to Starbase 4'
    },
    {
        vessel: 'USS',
        name: 'Prlaya',
        registry: 'NCC-1855',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hashira',
        registry: 'NCC-1856',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Adulucia',
        registry: 'NCC-1857',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Brilliant',
        registry: 'NCC-1858',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Thetis',
        registry: 'NCC-1859',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Miranda',
        registry: 'NCC-1860',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Tian An Men',
        registry: 'NCC-1861',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Tempest',
        registry: 'NCC-1862',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Demeter',
        registry: 'NCC-1863',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Reliant',
        registry: 'NCC-1864',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Vigilant',
        registry: 'NCC-1865',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Oberon',
        registry: 'NCC-1866',
        note: 'lost in Orion conflict'
    },
    {
        vessel: 'USS',
        name: 'Saratoga',
        registry: 'NCC-1867',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Enforcer',
        registry: 'NCC-1868',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Valhalla',
        registry: 'NCC-1869',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Sutherland',
        registry: 'NCC-1870',
        note: ''
    },

    {
        vessel: 'USS',
        name: 'Redan',
        registry: 'NCC-1871',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Perseus',
        registry: 'NCC-1872',
        note: ''
    },

]




const federation_class = [
    {
        type: 'Dreadnought',
        design_chief: 'Franz Joseph',
        class_commission: 2260,
        complement: {
            officers: 55,
            crew: 445
        }
    },

    {
        hull_structure: 55,
        hull_size: { class: 6, decks: 23 },
        hull_length: {
            length_m: 316,
            beam_m: 142,
            height_m: 87
        },
        hull_mass_MT: 285000
    },

    {
        drive_system_impulse: 'SBE (.75c)',
        drive_system_warp: ['PB-32-Mk 3', 'Triple', 'WF 6/8'],
        drive_system_maneuver_modifiers: ['+2C','-2H','+4T']
    },

    {
        tactical_phasers: [
            {
                class: 9,
                banks: 3,
                note: '2 each, (f, f/p, f/s)'
            },
            {
                class: 9,
                banks: 3,
                note: '1 each, (p, s, a)'
            }
        ],
        tactical_torpedoes: ['MK-IV Twin Launcher (f)','MK-IV Single Launcher (a)'],
        tactical_deflector_shield: 'PFF 2a'
    },

    {
        class_traits: {
            hardened_system: 'Life Support',
            design_flaw: 'warp engine',
            // enhanced_sensors: {quantity: 2, range: 'short'}
        }
    },

    {
        operational_data: {
            atmosphere_capable: false,
            cargo_units: 70,
            life_support: 'Class 4',
            operational_systems: 'Class 4',
            sensor_system: 'Class 3',
            separation_system: true,
            shuttlebay: { size: 'large', id: '1f' },
            shuttlecraft: 12,
            tractor_beams: ['1 fv', '1a'],
            transporters: {
                STD: 6,
                emergency: 4,
                cargo: 2
            },
            supplemental_craft: [
                { class: 'H', shuttlecraft: 4 },
                { class: 'HF', shuttlecraft: 2 },
                { class: 'F', travel_pod: 2 },
            ]
        }
    },
]

let federation_class_ships = [
    {
        vessel: 'USS',
        name: 'Federation',
        registry: 'NCC-2100',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Star League',
        registry: 'NCC-2101',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Unification',
        registry: 'NCC-2102',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Confederation',
        registry: 'NCC-2117',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Star Empire',
        registry: 'NCC-2118',
        note: 'destroyed by terrorists'
    },
    {
        vessel: 'USS',
        name: 'Trusteeship',
        registry: 'NCC-2119',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Entente',
        registry: 'NCC-2120',
        note: 'lead ship in Orion conflict, absorbed by V Ger'
    },
    
]



let washington_class_ships = [
    {
        vessel: 'USS',
        name: 'Washington',
        registry: 'NCC-2126',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Polk',
        registry: 'NCC-2127',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Eisenhower',
        registry: 'NCC-2128',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Reagan',
        registry: 'NCC-2129',
        note: ''
    },
]




const fighter_class = [
    {
        type: 'Fighter Shuttle',
        design_chief: 'Neale Davidson',
        class_commission: 2260,
        pilots : 1
    },

    {
        hull_structure: 5,
        hull_size: { class: 2, decks: 1 },
        hull_length: {
            length_m: 11.1,
            beam_m: 6,
            height_m: 2.2
        },
        hull_mass_MT: 6.5
    },

    {
        drive_system_impulse: 'SBE (.75c)',
        drive_system_warp: ['PB-32-Mk 3', 'Triple', 'WF 6/8'],
        drive_system_maneuver_modifiers: ['+2C','-2H','+4T']
    },

    {
        tactical_phasers: {
            type: 2,
            banks: 2,
            note: '1 each, (f, f/p, f/s)'
        },
        tactical_torpedoes: 'MK XII-IF Twin Launcher (f)',
        tactical_deflector_shield: 'PFF 2'
    },

    {
        class_traits: {
            hardened_system:[ 'Battle tested','nimble'],
            design_flaw: 'photon torpedo launcher',
            // enhanced_sensors: {quantity: 2, range: 'short'}
        }
    },

    {
        operational_data: {
            atmosphere_capable: true,
            cargo_units: 0,
            life_support: 'Class 2',
            operational_systems: 'Class 1R',
            sensor_system: 'Class 3',
        //     separation_system: false,
        //     shuttlebay: { size: 'small', id: '1a' },
        //     shuttlecraft: 1,
        //     tractor_beams: ['1 fv', '1a'],
        //     transporters: {
        //         STD: 2,
        //         emergency: 2,
        //         cargo: 2
        //     },
        //     supplemental_craft: {class: 'H', travel_pod: 2}
        }
    },
]




const jenghiz_class = [
    {
        name: 'Planet Killer',
        class_designation: 'Ultra Dreadnought',
        class_commission: 'Unknown',
        complement: 'automated'
    },
    {
        dimensions: [
            { length_km: 12 },
            { breadth_km: 3.5 },
            { height_km: 3.5 },
            {mass_MT: 62.5}
        ]
    },
    {
        drive_system_impulse: '.50c',
        drive_system_warp: 'Total Conversion [WF 4/5]'
    },
    {
        armament: [
            { antiphoton_beam: 1 },
            { subspace_distortion_field: 1 },
            {planetary_tractor_beam: 1}
        ]
    }
]


let jenghiz_class_ships = [
    {
        vessel: 'USS',
        name: 'Jenghiz',
        registry: 'NCC-501',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Darius',
        registry: 'NCC-502',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Sargon',
        registry: 'NCC-504',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Suleilman',
        registry: 'NCC-508',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Etzel',
        registry: 'NCC-509',
        note: 'lost in Tomed incident'
    },
    {
        vessel: 'USS',
        name: 'Tamerlan',
        registry: 'NCC-510',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Alexander',
        registry: 'NCC-511',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ahriman',
        registry: 'NCC-513',
        note: 'lost in Tomed incident'
    },
    {
        vessel: 'USS',
        name: 'Rahman',
        registry: 'NCC-514',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hashishyun',
        registry: 'NCC-516',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Azrael',
        registry: 'NCC-517',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hamilcar',
        registry: 'NCC-518',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Shaitan',
        registry: 'NCC-519',
        note: ''
    },
]




let cochise_class_ships = [
    {
        vessel: 'USS',
        name: 'Cochise',
        registry: 'NCC-530',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Alva',
        registry: 'NCC-531',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Pontiac',
        registry: 'NCC-532',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ney',
        registry: 'NCC-533',
        note: 'lost in Tomed incident'
    },
    {
        vessel: 'USS',
        name: 'Geronimo',
        registry: 'NCC-534',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Cortez',
        registry: 'NCC-535',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Alvarado',
        registry: 'NCC-536',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'De Ruyter',
        registry: 'NCC-21160',
        note: 'lost in Wolf 359'
    },
    {
        vessel: 'USS',
        name: 'Hektor',
        registry: 'NCC-21161',
        note: 'Lost in Dominion War'
    },
    {
        vessel: 'USS',
        name: 'Lysander',
        registry: 'NCC-21162',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Drake',
        registry: 'NCC-21163',
        note: 'Lost in Dominion War'
    },
    {
        vessel: 'USS',
        name: 'Appollyon',
        registry: 'NCC-21164',
        note: 'Lost in Dominion War'
    },
    {
        vessel: 'USS',
        name: 'Scott',
        registry: 'NCC-21165',
        note: ''
    },

]




let alRashid_class_ships = [
    {
        vessel: 'USS',
        name: 'Ah Rashid',
        registry: 'NCC-802',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Anaximander',
        registry: 'NCC-804',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Aristarchus',
        registry: 'NCC-805',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ibn Daud',
        registry: 'NCC-806',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Eratosthenes',
        registry: 'NCC-807',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hipparchus',
        registry: 'NCC-809',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ulugh Beg',
        registry: 'NCC-810',
        note: ''
    },    {
        vessel: 'USS',
        name: 'Thales',
        registry: 'NCC-812',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Hevelius',
        registry: 'NCC-813',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Tonti',
        registry: 'NCC-814',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Taikang',
        registry: 'NAR-1216',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Francang',
        registry: 'NAR-1217',
        note: ''
    },

]



let beowulf_class_ships = [
    {
        vessel: 'USS',
        name: 'Beowulf',
        registry: 'NCC-1272',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Spear',
        registry: 'NCC-1273',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Emory Land',
        registry: 'NCC-1275',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Cable',
        registry: 'NCC-1276',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Supply',
        registry: 'NCC-1277',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Bridge',
        registry: 'NCC-1280',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Kilauea',
        registry: 'NCC-1281',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Mount Baker',
        registry: 'NCC-1285',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Kiska',
        registry: 'NCC-1286',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Niagara',
        registry: 'NCC-1287',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Concorde',
        registry: 'NCC-1288',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'San Jose',
        registry: 'NCC-1289',
        note: ''
    },

    {
        vessel: 'USS',
        name: 'Polynesian',
        registry: 'NCC-2240',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Acropolis',
        registry: 'NCC-2241',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Flint',
        registry: 'NCC-2242',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Shasta',
        registry: 'NCC-2243',
        note: ''
    },
    {
        vessel: 'USS',
        name: 'Ptuxtent II',
        registry: 'NCC-2244',
        note: ''
    },

]








/*--------------------------

let x = [
    {
        vessel: 'USS',
        name: '',
        registry: 'NCC-',
        note: ''
    },
]


*/
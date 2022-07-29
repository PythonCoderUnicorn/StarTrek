
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



let capella_class = [
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
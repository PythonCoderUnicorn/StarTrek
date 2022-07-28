
// data for Starfleet Fleet vessels

// source: Federation Fleet Manual

// Designation == type



/* VESSEL CLASSIFICATIONS

SHUTTLECRAFT = auxillary vessels used by capitol ships or bases. 
    Used for transporting small amounts of cargo or personnel from point to point

RUNABOUT = a larger version of shuttlecraft, capable of longer duration flights carrying more passengers
    and cargo, with modest defense capabilities

TRANSPORT = function similar to Tenders as they ferry supplies, equipment and personnel between points, very large in size


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
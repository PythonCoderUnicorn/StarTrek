
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
        registry: 'NCC-1300'
    },
    {
        vessel: 'USS',
        name: 'Moscow',
        registry: 'NCC-1301'
    },
    {
        vessel: 'USS',
        name: 'Peking',
        registry: 'NCC-1302'
    },
    {
        vessel: 'USS',
        name: 'Britannia',
        registry: 'NCC-1303'
    },
    {
        vessel: 'USS',
        name: 'Los Angeles',
        registry:'NCC-1304'
    },
    {
        vessel: 'USS',
        name: 'Yamato',
        registry:'NCC-1305'
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
        registry:'NCC-1308'
    },
    {
        vessel: 'USS',
        name: 'Petersburg',
        registry:'NCC-1309'
    },
    {
        vessel: 'USS',
        name: 'Marseilles',
        registry:'NCC-1360'
    },
    {
        vessel: 'USS',
        name: 'Devonshire',
        registry:'NCC-1361'
    },
    {
        vessel: 'USS',
        name: 'Sydney',
        registry:'NCC-1362'
    },
    {
        vessel: 'USS',
        name: 'Vladivostok',
        registry:'NCC-1363'
    },
    {
        vessel: 'USS',
        name: 'Cairo',
        registry:'NCC-1364'
    },
    {
        vessel: 'USS',
        name: 'Tipton',
        registry:'NCC-1365'
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
        registry:'NCC-1371'
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
        registry: 'NCC-1425'
    },
    {
        vessel: 'USS',
        name: 'Cartier',
        registry: 'NCC-1426'
    },
    {
        vessel: 'USS',
        name: 'Bartentis',
        registry: 'NCC-1427'
    },
    {
        vessel: 'USS',
        name: 'Amundson',
        registry: 'NCC-1428'
    },
    {
        vessel: 'USS',
        name: 'Baffin',
        registry: 'NCC-1429'
    },
]





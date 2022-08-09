


https://engineering.thetafleet.net/Journals/DS9/Franchise%20-%20Star%20Trek%20Deep%20Space%20Nine%20Technical%20Manual%20.pdf 


wormhole & prophets 

wormhole = {
    terminus: {
        name:'Denorios Belt',
        "distance_from_sun_B'hava'el": "3 million kms"
    },
    
    anomalies: ['temporal','omnipotent races','mirror-universe interface','astronomical phenomena'],
    studied_since: 2369,
    average_orbital_period_(yrs): 13.1,
    orbital_plane_incline: [{
        degrees: 38,
        endpoint: 'Bajor'
        },
        {
            degrees: 11.5,
            endpoint: 'Bajor IX'}
        ],
    
    subspace_inversion: {
        recurring: '50.23 years',
        history: '35,000 years' 
        },
    
    galaxy_plane: '68.9 degrees',
    structure: '12 dimensional helical verteron membrane, forms the tunneling of wormhole',
    
    spacecraft_travel_requirements: {
        spacecraft_speed: 'impulse',
        basic: 'project verteron streams',
        warning: 'warp fields produce massive destabilizing effects, results in increased field rebound damage to vessel and wormhole'
    },

    prophets_Weibrand_scale: 90


}





bajoran_orbs = {
    power: 'self-sustaining Leyton sequence confinement fields',
    verteron_membrane: '95%'
    total_orbs: 9,
    orb_locations: 'Cardassian Military',
    orb_names: [
        'Orb of Prophecy',
        'Orb of Wisdom',
        'Orb of Time'
    ]
}








Cardassian_technology = {
    machine_learning: ['AI','deep learning'],
    'Terok Nor': 2346
}

Cardassian_Union = {
    // Weibrand log development scale 1:100
    culture_index {
        pre-Dominion: 21,
        post-Dominion: 24
    },
    off_world_assets: 153,
    
    weakpoints_targets: ['overloading defensive shields','warp core stability','computer virus penetration in older ships','sensor locks','inefficient warp engine trail masking']

}

Cardassian_military = {
    Cruiser: {
        class: 'Galor',
        type: 'battle cruiser',
        number_per_yr: 63
    },
    Warship:{
        class:'Galor',
        type:'warship',
        number_per_yr: 15
    },
    Fighter: {
        class: 'None',
        type: None,
        number_per_yr: 352
    },
    Freighter:{
        class: 'None',
        type: None,
        number_per_yr: 188
    },
    Penetrator: {
        class: None,
        type: None,
        number_per_yr: 443
    },

    Troops: {
        base_level: 583000,
        Glinn_level: 21600,
        Gul_level: 8900
    },

    Weapons: {
        planetary_disruptors: 430,
        photon_torpedoes: 54300,
        offensive_EM_devices: 230,
        Biogenic_weapons: 430
    },
    
    embedded_warp_engines: true,
    defensive_shields: {
        protection_from: ['phasers','photon torpedoes','EM energy reflection','conversion coatings']
    },
    
    structural_materials: various,
    
    spacecraft_cosntruction: {
      'spaceframe & hull': 'low structural integrity field required'
    },
    
    navigational_deflector: {
      type: 'Galor',
      detail: 'navigational deflector incorporates redundant disruptor beam emitters as nominal hardware design'
    },
    
    computer_core: 'reinforced hardware for anti-vibrations & subspace field shock',
    
    armament: 'disruptor weapons, semiautonomously'
    
}






Alpha & Beta Quadrants require constant updates on science, tech, sociology & economics


Federation_Weibrand_scale = 24
Bajor_Weibrand_scale = 20


Starfleet_Intelligence = {
  missions: ['Sol Sector','DS9', 'Starbase 375','Alpha Quadrant'],
  target: 'emerging technology in Cardassian-Bajor operations',
  ongoing_ops: [
    'artificial_wormhole_generation',
    {'convergent-force matter disruption': 'amplify seed pulse of energy to produce high temperature & radiation-pressure to create a stellar core'},
    'negative_matter_annihilation',
    'K-layer subspace concealment',
    'transwarp computation_speeds',
    'defensive shield impermeability'
    ]
}




//----------- ds9_overview

// Terok Nor largest materials refining facility
// Terok Nor architect Tavor Kell, Cardassia Prime
// ~3.65 teraquads of data on the constrcution of Terok Nor based on intelligence reports
// 2.7 standard years for total construction


Starfleet Technology Assessment Directorate:
  ds9 = hybrid planar-columnar triradial structure.
    nested flattened rings built out from vertical stepped cylinder core
    3 tall pylons
    

    
assembly_2 = lower-core
    
const ds9_dimensions = {
  overall_diameter_m : 1451.82,
  habitat_ring_diameter_m : 579.12,
  upper_core_diameter_max_m : 285.9,
  mid_core_diameter_max_m : 182.88,
  lower_core_diameter_max_m : 184.46,
  ops_diameter_max : 59.43,
  height_of_core_m : 368.8, // Ops to Fusion exhaust cone
  height_of_docking_pylons_total_m : 969.26,
  height_of_weapon_sail_towers_m : 192.02
}






let starfleet_support = [
  {Material_Supply_Command : 'transfered 37 million metric tonnes of equipment & consumables from Alpha quadrant'},
  
  {
    spacecraft_deployment : ['USS Defiant','USS Rio Grande','USS Rubicon','type-6 shuttlecraft','utility vehicles']
  },
  
  {
    'USS_Defiant' : {
      role :'primary station defense and reconnaissance, armed with cloaking device (on loan from Romulan Star Empire)',
      docking_location : {port: 1, pylon: 1},
      performance: {loss_rate: 3.2, units_per_op_hrs: 100000}
  },
  
  shuttlecraft_performance: {
    type_6: {loss_rate: 8.9, units_per_op_hrs: 100000},
    type_9: {loss_rate: 8.9, units_per_op_hrs: 100000}
  },
  
  flight_procedures: {
    communication: 'constant contact with DS9',
    channels: 'Federation Council in San Francisco and UFP President office in Paris, Earth',
    mandate_required: true,
    mandate_from: 'Federation Council',
    mandate_to: 'Starfleet Command',
    mandate_requirements: 
    {
      equipment: 'availability', 
      consumables: 'quantity value',
      destination: 'Starbase 375'
    },
    {ship_type: 'high warp courier'} 
  }
]



let ds9_defenses = [
  {
    fleet_ops: 'predeployment strategy',
    threat_response: {
      level_1: ['Defiant','2 runabouts'],
      level_2: ['patrol vessel from Starbase (375, 257, 211)],
      level_3: ['Starfleet assets deployed closer to UFP perimeter],
      level_4: ['Warfare','total UFP mobilization under Single Integrated Operational Plan (SIOP)']
    }
  }
]





upgrades = [EPS power system, atmospheric handling system, computer systems, weapon systems, spacecraft docks & repair bays, communications systems]









//----------------
starfleet corp of engineers (SFCE)

rebuilt DS9

average of 35 resident engineers & technicians based on the station
supervised by chief of operations
affiliate group of 28 Bajoran engineers work together

Engineering Equipment Assistance (EEA) = tools, spares, replication gear, computer databases, heavy equipment manipulation booms and extravehicular activity (EVA) systems

Work Bee = autonomous cargo & repair pod missions
interior & exterior spacesuit operations

SFCE rebuilt Upper pylon 3 (destroyed by Jem'Hadar)

//----------------




ds9 structure : 
  [core, rings and pylons]
  upper core, mid core, lower core material = 31% kelindide, 65% rodinium, 4% toranium dicorferite 

  habitat ring and docking ring material = 45% kelindide, 43% rodinium, 12% toranium
  
  docking pylons & crossover bridges = 26% kelindide, 70% rodinium, 4% toranium


external structure systems:
  common alloys in hull plating= kelindide, polyuranium, rodinium and toranium


internal structure systems:
  rely external hull plating for atmospheric pressure
  minor leaks < 6.5 cm^2 can be fixed with welding <= 2 hrs of overall station pressure
  plating penetrations >= 6.5 cm^2 = weapons fire, explosives, EM events then emergency()




STATION COORDINATE SYSTEM

Cardassian system filled an isolinear partition 505.43 kiloquads longs, Starfeet conversion is based on the station's average local gravitational vector

original external reference system oriented station on a circle divided into 729.o tarims (each tarim = 0.4938 degrees). the zero radius of the circle the central vector of the station commandant's main window, extending outward from exactly 176 cm up from the floor.circumference around counter-clockwise direction (top plan view) subtraction of 60.753 tarims (30 degrees)

docking port 12 (not pylon 1) central line 
hatch seal at top of docking pylon 2 in Cardassian notation is <243+158.42> (< is angle, 1st number is the azimuth angle reading from around the circle, + denotes the measurement direction, - denotes negative elevation, last number equals distance frm origin point to desired location)

1.0 Cardassian korshins = 2.732 meters

3D vertex x,y,z

x runs through the station core to docking pylon 1 (-x towards the pylon)

y runs dorsal-ventral (+y to dorsal up from Ops)

z axis runs through the core to Docking Ring @ 90 degrees from docking pylon 1 (+z to docking ring)

>> page 28



-------- Ops Center
level 1


PAGE 29 == STOPPED














































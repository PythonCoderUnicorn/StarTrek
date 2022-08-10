
class Talon {


    construction_data = {
        series_designation: "Talon",
        model: 'C',
        date_entered_service : '4/6208',
    }


    hull_data = {
        superstructure_points: 100,
        damage_chart: 'B',
        length_m: 1041,
        width_m: 772,
        height_m: 285

    }

    transporters = {
        standard_6_person: 12, 
        combat_22_person: 10, 
        cargo_small:  5,
        cargo_large: 3  
    }

    cloaking = {
        device_type: 'RCI',
        power_requirements: 75,  
    }

    
    Crew = {
        officers: 300,
        enlisted: 800,
        troops: 400, 
        evacuation_limit: 25000 
    }
    
    shuttlecraft = 120     
  

    engines_and_power = {
        total_power_units:   184 ,
        movement_ratio: '5:1' 
    }

    warp_engine = {
        type: 'RIWB-1',
        number: 2, 
        power_units: 64, 
        cruising_speed: 6,
        emergency_speed: 9.4  
    }

    impulse_engine = {
        type: 'RIF-3',
        number: 2, 
        power_units: 28 
    }

    auxiliary_power = 18 
    reserve_power = 9 

    weapons = [
        {
            type: 'Beam Weapon',
            id: 'RWW-I', 
            number: 12, 
            firing_arcs: ['6 f, 4 p/s'], // ,   '4 f/p/s, 2 a'
            chart: 'Y',  
            max_power: {
                base: 10,
                plus3: (1-10),
                plus2: (11-17),
                plus1:+(18-24) 
            }
        },

        {
            missle_type: 'RPL-3',
            number: 4,
            firing_arcs: ['4 f/p/s'], // '10 f/p/s, 10 a '
            chart: 'T',
            power_to_arm: 8,
            damage: 'RL-3'
        }

    ]

    shields = {
        type: 'Deflector',      
        id: 'RSS- M ',
        shield_point_ratio: '1/6',   
        max_shield_power: 22
    }
 
    combat_ffficiency_value = 205 

}
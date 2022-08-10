

class Kamarak {

    construction_data = {
        series_designation: "Karamarak",
        model: 'F',
        date_entered_service : '4/7503',
    }


    hull_data = {
        superstructure_points: 125,
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
        total_power_units:   218 ,
        movement_ratio: '6:1' 
    }

    warp_engine = {
        type: 'RIWB-1',
        number: 2, 
        power_units: 64, 
        cruising_speed: 6,
        emergency_speed: 9.4  
    }

    impulse_engine = {
        type: 'RIG-7',
        number: 2, 
        power_units: 45 
    }

    auxiliary_power = 22 
    reserve_power = 11 

    weapons = [
        {
            type: 'Beam Weapon',
            id: 'RWW-Y', 
            number: 14, 
            firing_arcs: ['4 f, 4 p/s, 4 f/p/s, 2 a'], // ,   '4 f/p/s, 2 a'
            chart: 'Y',  
            max_power: {
                base: 12,
                plus3: (1-15),
                plus2: (16-20),
                plus1:+(21-24) 
            }
        },

        {
            missle_type: 'RTA-S',
            number: 24,
            firing_arcs: ['12 f/p/s, 12a'], // '10 f/p/s, 10 a '
            chart: 'S',
            power_to_arm: 1,
            damage: 10
        }

    ]

    shields = {
        type: 'Deflector',      
        id: 'RSR-1',
        shield_point_ratio: '1/7',   
        max_shield_power: 28
    }
 
    combat_efficiency_value = 261

}
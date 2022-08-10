

class Leviathan {

    construction_data = {
        series_designation: "Leviathan",
        model: 'G',
        date_entered_service : '4/7601',
    }


    hull_data = {
        superstructure_points: 110,
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
        total_power_units:   148 ,
        movement_ratio: '5:1' 
    }

    warp_engine = {
        type: 'RIWD-1B',
        number: 2, 
        power_units: 50, 
        cruising_speed: 6,
        emergency_speed: 9
    }

    impulse_engine = {
        type: 'RIF-4',
        number: 2, 
        power_units: 24 
    }

    auxiliary_power = 14 
    reserve_power = 7 

    weapons = [
        {
            type: 'Beam Weapon',
            id: 'RWW-I', 
            number: 12, 
            firing_arcs: ['6 f, 4 p/s,  2 a'], // ,   '4 f/p/s, 2 a'
            chart: 'Y',  
            max_power: {
                base: 10,
                plus3: (1-10),
                plus2: (11-17),
                plus1:+(18-24) 
            }
        },

        {
            missle_type: 'RTA-S',
            number: 8,
            firing_arcs: ['6 f/p/s, 2 a'], // '10 f/p/s, 10 a '
            chart: 'S',
            power_to_arm: 10,
            damage: 10
        }

    ]

    shields = {
        type: 'Deflector',      
        id: 'RSS-2',
        shield_point_ratio: '1/5',   
        max_shield_power: 25
    }
 
    combat_efficiency_value = 177
}
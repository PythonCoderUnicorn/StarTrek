
class Sparrowhawk {

    construction_data = {
        series_designation: "Sparrowhawk",
        model: 'D',
        date_entered_service : '4/7002',
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
            id: 'RPW-G', 
            number: 10, 
            firing_arcs: ['10 f/ p/s'], // ,   '4 f/p/s, 2 a'
            chart: 'X',  
            max_power: {
                base: 25,
                plus3: (1-10),
                plus2: (11-17),
                plus1: (18-22) 
            }
        },

        {
            missle_type: 'RTA-S',
            number: 6,
            firing_arcs: ['4 f/p/s 2a'], // '10 f/p/s, 10 a '
            chart: 'S',
            power_to_arm: 1,
            damage: 10
        }

    ]

    shields = {
        type: 'Deflector',      
        id: 'RSS-2',
        shield_point_ratio: '1/5',   
        max_shield_power: 25
    }
 
    combat_efficiency_value = 207 

}


class Decius {

    construction_data = {
        series_designation: "Decius",
        model: 'J',
        date_entered_service : '4/7805',
    }


    hull_data = {
        superstructure_points: 135,
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
        total_power_units:   238 ,
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
        type: 'RIH-2',
        number: 2, 
        power_units: 55 
    }

    auxiliary_power = 24 
    reserve_power = 12

    weapons = [
        {
            type: 'Beam Weapon',
            id: 'RWW-Y', 
            number: 16, 
            firing_arcs: ['4 f, 4 p/s,  6 f/p/s/a, 2 a'], // ,   '4 f/p/s, 2 a'
            chart: 'Y',  
            max_power: {
                base: 10,
                plus3: (1-15),
                plus2: (16-20),
                plus1: (21-24) 
            }
        },

        {
            missle_type: 'RTA-S',
            number: 20,
            firing_arcs: ['10 f/p/s, 20 a'], // '10 f/p/s, 10 a ' '6 f/p/s, 4 a'
            chart: 'S',
            power_to_arm: 1,
            damage: 10
        }

    ]

    shields = {
        type: 'Deflector',      
        id: 'RSR-2',
        shield_point_ratio: '1/7',   
        max_shield_power: 28
    }
 
    combat_efficiency_value = 276

}
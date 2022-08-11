

/*

Kesix Class Cruiser

During the 2360s, the Romulans had been accused of being one-trick-ponies, a power
that had produced only one truly exceptional warship design in decades. The Kesix
finally makes up for that, and has been regarded as one of the finest cruisers fielded by
the Romulan Navy in decades. This rugged and much loved vessel is built to blaze a
trail before the fleet’s main body and is a symbol of Romulan technical prowess.
The Kesix is literally built around a pair of massive RPL-5 plasma weapons, a one-two
knockout punch that is the envy of many fleets. Her forward mounted plasma cannons
are a massive improvement upon the old RPW-G type and have finally given credence to
the design. Her top speed of warp 9.6 is moderately faster than the official fleet speed of
warp 9.4 and has gotten ships of the class clear of danger on more than one occasion.
Her sensor suite is easily the finest in the Empire, and the Romulans have taken to using
the Kesixs as heavy scouts when the use of smaller vessels may prove to be inappropriate.
Of the 18 Kesix-class cruises built, all remain in service. Construction of the class continues at a rate of three vessels per year.

*/

class Kesix {

    construction_data = { 
        model : 'A',
        date_entered_service: ''
    }
     
     
    hull_data = { 
        superstructure_points: 98,
        damage_chart: 'B',
        // cloaking_device_type: 'RCG',
        power_requirements: 48
    }

    crew = 480
    troops = 90
    shuttlecraft = 8
    // landing_capability = true
    
    engines_and_power = {
        total_power_units: 200,
        movement_ratio: '5/1'
    }

    warp_engine = { 
        type: 'RIWD-1B',
        number: 2,
        power_units: 50,
        cruising_speed: 6,
        emergency_speed: 9.6
    } 


    impulse_engine = { 
        type: 'RIH-1',
        number: 2,
        power_units: 50
    } 

    auxiliary_power = 20
    reserve_power = 10


    weapons = [ 
        {
            type: 'Beam',
            id: 'RWW-I',                            
            number: 18,
            firing_arcs: ['9 f/p, 9 f/s'],      
            chart: 'X',                                 
            max_power: { 
                base: 7,
                plus3: (1-10),
                plus2: (11-17),                          
                plus1: (18-22)   
            }                                                 
        },

        // {
        //     Type: 'Missile',
        //     id: 'RTA-S',                            
        //     number: 8,
        //     firing_arcs: ['4 f/p/s', '4 a'],                               
        //     chart: 'S',                              
        //     power_to_arm: 1,                                    
        //     damage: 10
        // },
        {
            Type: 'Missile',
            id: 'RPL-5',                            
            number: 2,
            firing_arcs: ['2f'],                               
            chart: 'S',                              
            power_to_arm: 14,                                    
            damage: 'RL-5'
        }
    ] 


    shields = { 
        type: 'RSS-M',                            
        shield_point_ratio: '1/6',                               
        max_shield_power: 22
    }    

    combat_efficiency_value = 225

}
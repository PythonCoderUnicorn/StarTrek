

/*

Pyre Class Battlecruiser

The Pyre-class battlecruiser came about as an attempt to improve upon the Battlehawk-
class and incorporate several advances that had entered fleet service in the proceeding
years. At only 70% the mass of the original Battlehawk, the Pyre is slightly more
maneuverable and sports more robust shields and torpedo systems. However, no
amount of reworking the original flawed design could earn the Pyre the modicum of
respect it deserved, and it is an unpopular assignment. 
The future of the class may go hand in hand with that of the Battlehawk as a decision
will be rendered soon whether to retire, mothball or refit the Pyre fleet. Many believe that
the class will at the very least be retained in a reserve status as many are barely 20 years
old and in superb condition.
Of the 45 Pyre-class battlecruisers produced, 34 remain in active service. 5 have been
destroyed, three have been scrapped, one serves in the training command and the
remaining two have defected to the Romulan Free States. Production of the class ended some time in the early 2360s.


*/




class Pyre {

    construction_data = { 
        model : 'B',
        date_entered_service : '4/4205'
    }

    hull_data = { 
        superstructure_points: 70,
        damage_chart: 'B',
        cloaking_device_type: 'RCF',
        power_requirements : 42
    }

    crew = 250

    shuttlecraft = 8
    
    engines_and_power = { 
        total_power_units: 136,
        movement_ratio: '4/1'
    }


    warp_engine = { 
        type: 'RIWD-1',
        number: 2,
        power_units: 40,
        cruising_speed: 6,
        emergency_speed: 8.9
    } 


    impulse_engine = { 
        type: 'RIF-3',
        number: 2,
        power_units: 28
    } 

    auxiliary_power = 14
    reserve_power = 7


    weapons = [ 
        {
            type: 'Beam',
            id: 'RPW-G',                            
            number: 12,
            firing_arcs: [' 2 f/p/s, 4 f, 4 p/s, 2 a '],      
            chart: 'X',                                 
            max_power: { 
                base: 25,
                plus3: (1-12),
                plus2: (13-18),                          
                plus1: (19-22)   
            }                                                 
        },

        {
            Type: 'Missile',
            id: 'RPL- 3',                            
            number: 2,
            firing_arcs: '2f',                               
            chart: 'T',                              
            power_to_arm: 8,                                    
            damage: 'RL-3'
        }
    ] 


    shields = { 
        type: 'RSM-5',                            
        shield_point_ratio: '1/5',                               
        max_shield_power: 20
    }    

    combat_efficiency_value = 151

}






/*

Warhawk Class Battlecruiser

The Warhawk-class battlecruiser is a fairly typical battlecruiser type developed in the early 2360s as a 
supplement to the emerging D’Deridex type Warbirds. Functionally and tactically, 
the two ships have a lot in common, though the larger Warbird sports a more robust power plant and 
higher sustainable rate of fire. The Warhawk is not without its fans though, and features an 
impressive communications suite and capability for coordinating fleet movements in her
extensive CIC facility. On the battlefield, the Warhawks were a favorite target for 
Dominion raiders seeking to sew confusion among her enemies’ ranks. It took several 
losses before the Romulans learned to protect their fleet command assets effectively 
against these tactics. By this time though, fleet command duties were being passed to the
larger Kamarak type Warbirds, and production of the class was brought to an abrupt halt. 
Of the 33 Warhawk-class battlecruisers built, 17 remain in active service. 
15 have been destroyed and one was scrapped. Production of the class ended in 2374.

*/




class Warhawk {

    construction_data = { 
        model : 'A',
        date_entered_service : '4/6303'
    }
     
     
    hull_data = { 
        superstructure_points: 110,
        damage_chart: 'B',
        cloaking_device_type: 'RCI',
        power_requirements: 75
    }

    crew = 1100
    shuttlecraft = 100
    
    engines_and_power = {
        total_power_units: 184,
        movement_ratio: '6/1'
    }

    warp_engine = { 
        type: 'RIWD-1B',
        number: 2,
        power_units: 64,
        cruising_speed: 6,
        emergency_speed: 9.5
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
            type: 'Beam',
            id: 'RWW-I',                            
            number: 12,
            firing_arcs: [' 6 f,  4 p/s, 2 a '],      
            chart: 'Y',                                 
            max_power: { 
                base: 10,
                plus3: (1-10),
                plus2: (11-17),                          
                plus1: (18-24)   
            }                                                 
        },

        {
            Type: 'Missile',
            id: 'RTA-S',                            
            number: 20,
            firing_arcs: ['10 f/p/s', '10 a'],                               
            chart: 'S',                              
            power_to_arm: 1,                                    
            damage: 10
        },
        // {
        //     Type: 'Missile',
        //     id: 'RPL-3',                            
        //     number: 2,
        //     firing_arcs: ['2f'],                               
        //     chart: 'T',                              
        //     power_to_arm: 8,                                    
        //     damage: 'RL-3'
        // }
    ] 


    shields = { 
        type: 'RSS-M',                            
        shield_point_ratio: '1/6',                               
        max_shield_power: 22
    }    

    combat_efficiency_value = 205
     
}
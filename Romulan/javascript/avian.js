
/*
Avian Class Cruiser

Part science vessel and part fleet cruiser, the Avian has amassed a respectable  
operational record since it was introduced into service. Avian crews paid a terrific
price during the Dominion War and were often used as a screening command ship with two or 
three Mandukar’s at the point of a main body of Warbirds. They were often singled out for
destruction by the Cardassians because of their reputation of dishing out a healthy rate of 
disruptor fire. As science vessels, the Avians typically operate with one or two Vastam-class 
scouts as a mini task force in unexplored space. In this role they have been modestly successful 
and are one of the longer ranged vessels in the Romulan inventory. For any Romulan officer looking 
to expand his experience in the science fields, there are few better assignments than an Avian. 
Of the 40 Avian-class cruisers built, 18 remain in active service. 19 have been destroyed, two 
have been scrapped and one is listed as missing, presumed destroyed.The class is notable for the 
unique paint schemes that the yard workers apply to the “bird” pattern on each vessel’s dorsal hull. 
These colorful works of art are a point of pride for Avian crews and a contributing 
factor to the high morale that these ships enjoy.

*/

class Avian {

    construction_data = { 
        model : 'Mk I',
        date_entered_service: '4/6007'
    }
     
     
    hull_data = { 
        superstructure_points: 80,
        damage_chart: 'B',
        cloaking_device_type: 'RCI',
        power_requirements: 75
    }

    crew = 200
    troops = 25
    shuttlecraft = 4
    // landing_capability = true
    
    engines_and_power = {
        total_power_units: 183,
        movement_ratio: '5/1'
    }

    warp_engine = { 
        type: 'RIWB-1',
        number: 2,
        power_units: 64,
        cruising_speed: 6,
        emergency_speed: 9.6
    } 


    impulse_engine = { 
        type: 'RIH-2',
        number: 1,
        power_units: 55
    } 

    auxiliary_power = 18
    reserve_power = 9


    weapons = [ 
        {
            type: 'Beam',
            id: 'RWW-I',                            
            number: 12,
            firing_arcs: [' 6 f/p 6 f/s'],      
            chart: 'Y',                                 
            max_power: { 
                base: 12,
                plus3: (1-10),
                plus2: (11-17),                          
                plus1: (18-24)   
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
            id: 'RPL-3',                            
            number: 2,
            firing_arcs: ['2f'],                               
            chart: 'T',                              
            power_to_arm: 8,                                    
            damage: 'RL-3'
        }
    ] 


    shields = { 
        type: 'RSS-2',                            
        shield_point_ratio: '1/5',                               
        max_shield_power: 25
    }    

    combat_efficiency_value = 192
}
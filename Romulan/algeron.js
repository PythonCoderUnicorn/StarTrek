

/*
Algeron Class Battlecruiser

The Algeron-class cruiser’s design is clearly inspired by a fusion of the Pyre and Warbird-class vessels, 
and greatly expands on the capabilities of both of those vessel types. At barely half the length of a Warbird,
the Algeron is still an imposing vessel with a good blend of offensive firepower and defensive staying power. 
Her shields are of a slightly less efficient type that what is in general use at this time, but are sufficient 
for the class’ needs. In the field, the Algeron makes a fine surveyor and explorer, an aspect of vessel 
design that the Romulan fleet has let fall by the wayside in recent years. At the very least, 
the Algeron is one of the longest ranged vessels in their fleet and sports a number of special machine shops 
capable of turning out parts that can keep the Algeron’s on the go for years at a time. While engaged in 
combat operations, these facilities can become invaluable to other vessels seeking her service in an 
attempt to press home the fight without wasting time in a drydock. In an effort to exploit her 
exploration capability, the Algeron sports a unique docking system that allows a Vastam-class scout to 
attach to the underside of the mothership between the warp nacelles. In this manner, on a long mission 
Vastam crews can enjoy the facilities of the Algeron, refuel and perform maintenance. On the flip side, 
the parent vessel can utilize the Vastam as an advance scout in unexplored regions or send her into 
areas where she would dare not go. Of the 24 Algeron-class cruisers built to date, 18 are in active 
service. Six have been destroyed in the line of duty. Production of the Algeron continues 
at a rate of two new vessels per year                           

*/


class Algeron {


    construction_data = { 
        model : 'Mk I',
        date_entered_service: '4/7302'
    }
     
     
    hull_data = { 
        superstructure_points: 90,
        damage_chart: 'B',
        cloaking_device_type: 'RCG',
        power_requirements: 48
    }

    crew = 700
    troops = 120
    shuttlecraft = 14
    // landing_capability = true
    
    engines_and_power = {
        total_power_units: 160,
        movement_ratio: '5/1'
    }

    warp_engine = { 
        type: 'RIWD-1B',
        number: 2,
        power_units: 50,
        cruising_speed: 6,
        emergency_speed: 9.4
    } 


    impulse_engine = { 
        type: 'RIG-5',
        number: 2,
        power_units: 30
    } 

    auxiliary_power = 16
    reserve_power = 8


    weapons = [ 
        {
            type: 'Beam',
            id: 'RWW-Y',                            
            number: 12,
            firing_arcs: [' 2 f, 2 f/p 2 p/s  4 a'],      
            chart: 'Y',                                 
            max_power: { 
                base: 12,
                plus3: (1-15),
                plus2: (16-20),                          
                plus1: (21-24)   
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
        type: 'RSS-2',                            
        shield_point_ratio: '1/5',                               
        max_shield_power: 25
    }    

    combat_efficiency_value = 187

}


/*
Hathos Class Cruiser

The Hathos-class cruiser was a modest attempt to improve upon the disappointing 
Pyre-class and give the fleet a supplementary cruiser while the new generation of
D’deridex-class warbirds came on line. In this role the Hathos can be said to be slightly
more successful than her predecessor, but only slightly so. The Hathos has the
advantage of a modern torpedo type and decent disruptors, but on the whole lacks the
power or rate of fire to be a truly devastating weapons platform. It is difficult to find any
other praise for a class that can barely stand against Starfleet’s second line starships.
However, the Hathos is simple to build and maintain and does have its supporters within the Empire.
In 2377 the whole class was pulled from service for a period of three months after the
warship Klaskar mysteriously blew up while on a high warp run from Corellia Prime to
Romulus. A detailed analysis of her warp core assembly revealed serious manufacturing
defects that necessitated the scrapping of three other vessels of the class. The Klaskar
and the three other ships had been built together at the same yard nine years previously
and received defective parts from the same supplier.
Of the 50 Hathos-class cruisers built, 35 remain in active service. Seven have been
destroyed, 4 have been scrapped, and 4 have defected to the Romulan Free States.
Production of the class ended in 2372 after a short ten-year production run.

*/


class Hathos {


    construction_data = { 
        model : 'A',
        date_entered_service: '4/6203'
    }
     
     
    hull_data = { 
        superstructure_points: 70,
        damage_chart: 'B',
        cloaking_device_type: 'RCG',
        power_requirements: 48
    }

    crew = 540
    troops = 400
    shuttlecraft = 6
    // landing_capability = true
    
    engines_and_power = {
        total_power_units: 130,
        movement_ratio: '4/1'
    }

    warp_engine = { 
        type: 'RIWD-1',
        number: 2,
        power_units: 40,
        cruising_speed: 6,
        emergency_speed: 9
    } 


    impulse_engine = { 
        type: 'RIH-1',
        number: 1,
        power_units: 50
    } 

    auxiliary_power = 14
    reserve_power = 7


    weapons = [ 
        {
            type: 'Beam',
            id: 'RWw-I',                            
            number: 8,
            firing_arcs: [' 4f, 2 p/a,  2 s/a'],      
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
            number: 10,
            firing_arcs: ['4 f/p/s, 2p, 2s 2 a'],                               
            chart: 'S',                              
            power_to_arm: 1,                                    
            damage: 10
        },
        // {
        //     Type: 'Missile',
        //     id: 'RPA-C',                            
        //     number: 4,
        //     firing_arcs: ['4 f/p/s'],                               
        //     chart: 'M',                              
        //     power_to_arm: 1,                                    
        //     damage: 10
        // }
    ] 


    shields = { 
        type: 'RPL-3',                            
        shield_point_ratio: '1/4',                               
        max_shield_power: 20
    }    

    combat_efficiency_value = 142
}
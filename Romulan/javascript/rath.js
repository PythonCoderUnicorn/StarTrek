


/*
Rath Class Attack Cruiser

As a tactical asset geared toward taking the fight to the enemy, the Rath-class 
attack cruiser has few peers in any of the Alpha Quadrant fleets. No other vessel 
of comparable size is able to match the Raths raw firepower or ability to consistently 
deal out massive amounts of damage. Unfortunately for the Romulans, building only a 
handful of these marvelous vessels nearly bankrupted their fleet procurement process.  
The Rath is roughly twice the size of a Klingon B’rell-class scout, but devotes much 
more space to crew accommodations and fuel storage. Her rapid fire RPL-4 plasma 
torpedo array is unique to the class and occupies a pair of wing mounted exterior 
pods near the dorsal wing roots. During the Dominion War, the Raths were used as 
raiding vessels who acted in pairs against Dominion depots deep in enemy space. 
Acting in concert, the duo would swoop into an enemy base, decloak and unleash a 
withering volley of plasma weaponry. With the enemy thrown into chaos, the Raths 
would either recloak and move on to the next target of opportunity or lurk nearby 
until vulnerable rescue units moved into the area. Of the 8 Rath-class attack cruisers built, 
6 remain in active service. One was destroyed, while the other, the Rehan, was 
listed as lost, presumed destroyed after encountering an unclassified spacial rift near the Klingon Border.

*/





class Rath {

    construction_data = { 
        model : 'Mk I',
        date_entered_service : '4/7004'
    }
     
     
    hull_data = { 
        superstructure_points: 92,
        damage_chart: 'B',
        cloaking_device_type: 'RCI',
        power_requirements: 75
    }

    crew = 104
    troops = 20
    shuttlecraft = 3
    landing_capability = true
    
    engines_and_power = {
        total_power_units: 238,
        movement_ratio: '5/1'
    }

    warp_engine = { 
        type: 'RIWB-1',
        number: 2,
        power_units: 64,
        cruising_speed: 7,
        emergency_speed: 9.975
    } 


    impulse_engine = { 
        type: 'RIH-1',
        number: 2,
        power_units: 55
    } 

    auxiliary_power = 24
    reserve_power = 12


    weapons = [ 
        {
            type: 'Beam',
            id: 'RWW-I',                            
            number: 12,
            firing_arcs: [' 4 f/p 4 f/s '],      
            chart: 'Y',                                 
            max_power: { 
                base: 10,
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
            id: 'RPL-4',                            
            number: 8,
            firing_arcs: ['4 f/p 4 f/s'],                               
            chart: 'Q',                              
            power_to_arm: 12,                                    
            damage: 'RL-4'
        }
    ] 


    shields = { 
        type: 'RSS-M',                            
        shield_point_ratio: '1/6',                               
        max_shield_power: 22
    }    

    combat_efficiency_value = 280

}
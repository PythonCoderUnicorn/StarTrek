
/*
Deathstorm Class Heavy Cruiser

She is maintenance intensive, short ranged, awkwardly gunned and thoroughly
unpopular among her crews. In short, the Deathstorm is the pariah of the Romulan fleet.
In actuality, the ship is well suited for offensive operations is and a valuable fleet asset
that is all too often under utilized due to her poor reputation.
When the class was developed in the early 2360s, the Deathstorm was built around a
mixed missile weapon suite of a heavy plasma torpedoes and standard photon torpedo
launchers. When operating with a pair of Mandukar-class destroyers, the Deathstorm
presents a serious threat that can cut a swath through most enemy formations with
deadly ease. When she is placed on the defensive, the Deathstorm has a hard time
fending for itself without extensive fleet support. Fortunately for the class though, her
“wing” structures provide almost total cover for her warp nacelles from most angles, and
when pressed the Deathstorms have an uncanny ability to fleet the field to return at a
time and place more to their liking.
The c lass underwent one modest revision in the early 2370s that saw an upgrade to
her photon torpedo and shield systems. By the time the Dominion War began, all vessels
of the class had either been refit to the new standard or were custom built to the Mk II
specifications. 
Of the 30 Deathstorm-class heavy cruisers built, 19 remain in active service. 6 have
been destroyed, three were scrapped, and two have defected to the Romulan Free
States. Production ended in 2374.

*/


class Deathstorm {


    construction_data = { 
        model : 'Mk II',
        date_entered_service : '4/7109'
    }
     
     
    hull_data = { 
        superstructure_points: 80,
        damage_chart: 'B',
        cloaking_device_type: 'RCI',
        power_requirements: 75
    }

    crew = 1200
    troops = 500
    shuttlecraft = 40
    
    engines_and_power = {
        total_power_units: 155,
        movement_ratio: '4/1'
    }

    warp_engine = { 
        type: 'RIWA-1',
        number: 2,
        power_units: 55,
        cruising_speed: 6,
        emergency_speed: 9.5
    } 


    impulse_engine = { 
        type: 'RIG-1',
        number: 1,
        power_units: 55
    } 

    auxiliary_power = 16
    reserve_power = 8


    weapons = [ 
        {
            type: 'Beam',
            id: 'RWW-I',                            
            number: 10,
            firing_arcs: [' 2 f/p/s/ , 2 f/p, 2 f/s, 2 p/s, 2 a/p/s '],      
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
            number: 8,
            firing_arcs: ['4 f/p/s', '4 a'],                               
            chart: 'S',                              
            power_to_arm: 1,                                    
            damage: 10
        },
        {
            Type: 'Missile',
            id: 'RPL-4',                            
            number: 1,
            firing_arcs: ['1f'],                               
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

    combat_efficiency_value = 181

}


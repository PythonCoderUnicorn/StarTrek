

/*
Battlehawk Class Cruiser

It not quite clear when the Battlehawk-class cruiser first entered the Romulan Fleet inventory, but it is easy to say
that the design has nearly exceeded is usefulness as a fleet asset. Her shields are woefully underpowered in the face
of modern firepower and her ability to provide serious weapons fire is modest at best. For sure, the Battlehawks are
sturdy vessels and are useful in a number of fleet support roles, but their time is quickly coming to a close. Even
upgrading the class as a whole has been deemed unfeasible, and I the next ten years half of the existing vessels will
most likely be reverted to mothball status or scrapped. The remaining vessels may either serve out their operational
lifespan or be relegated to reserve status.
Obviously, the class was the inspiration behind the Warbird-class, though the
Battlehawk is barely half the size of that impressive class. Nonetheless, the two are often
confused on long range scans, and the Romulans have used this in the past to mask fleet
movements against Starfleet along the Neutral Zone or the Dominion during that conflict.
In this, it can be said, the Battlehawks still provide a modest service to the Empire.
Of the 90 Battlehawk-class cruiser constructed to date, 44 remain in active service. 
23 have been destroyed, six are listed as missing, presumed destroyed, seven have been
scrapped and 10 have defected to the Romulan Free States. Construction of the class
ended sometime in the early 2350s.

*/

class Battlehawk {

    construction_data = { 
        model : 'A',
        date_entered_service: ''
    }
     
     
    hull_data = { 
        superstructure_points: 110,
        damage_chart: 'B',
        cloaking_device_type: 'RCG',
        power_requirements: 48
    }

    crew = 360
    troops = 200
    shuttlecraft = 20
    // landing_capability = true
    
    engines_and_power = {
        total_power_units: 100,
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
        type: 'RIG-4',
        number: 1,
        power_units: 20
    } 

    auxiliary_power = 10
    reserve_power = 5


    weapons = [ 
        {
            type: 'Beam',
            id: 'RWPW-G',                            
            number: 6,
            firing_arcs: [' 2f, 4 f/p/s'],      
            chart: 'X',                                 
            max_power: { 
                base: 25,
                plus3: (1-12),
                plus2: (13-18),                          
                plus1: (19-22)   
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
            id: 'RPA-C',                            
            number: 4,
            firing_arcs: ['4 f/p/s'],                               
            chart: 'M',                              
            power_to_arm: 1,                                    
            damage: 10
        }
    ] 


    shields = { 
        type: 'RSL-2',                            
        shield_point_ratio: '1/4',                               
        max_shield_power: 18
    }    

    combat_efficiency_value = 124
}


/*

Z-1 Nova Class Battlecruiser


Unlike the Klingon L-24 class or Federation Excelsior-class of the late 2290s, the Z-1 Nova
class never enjoyed the extensive series of refits that kept her rivals an integral part of the
respective fleets for so long. Intelligence reports show that the Romulans had abandoned
upgrading their fleet of Novas by 2325 and retired most of the class by 2340. However, losses
during the Dominion War necessitated the recalling of many vessels of the class from mothballs
and twenty Novas went back into service. Fortunately for their crews, the Romulans had the
good sense to keep them far from the front lines and none were lost in the course of the war.
Instead, Novas were used to beef up internal lines and patrol non-critical border regions.
On paper, the Nova sports a fairly impressive array of tactical and defensive systems. In
reality, her computer, sensor and communications systems are of an antiquated design and are
increasingly becoming more of a hindrance than an asset. Although the class is rated for
emergency warp speeds of warp 9 and a cruising speed of warp 6, in reality they are barely
capable of warp 7.5 and 5.5 respectively. Alloy damage from long term exposure to a variety of
contaminants with no provision for systems swapouts have made the Nova’s almost dangerous
to operate, and it is thought that at least one has suffered a warp core breach due to these
neglected repairs. In any case, it will not be long before the Nova’s are placed back in storage
for another day. 
Of the 44 Nova-class battlecruisers built, only 16 remain in active service. 14 have been
destroyed, 6 have been scrapped, two are listed as lost, presumed destroyed, and six have
defected to the Romulan Free States. Production is believed to have ended some time after 2311

*/



class Nova {

    construction_data = { 
        model : 'IV',
        date_entered_service: '4/1804',
        damage_chart: 'B'
    }

    hull_data = { 
        superstructure_points: 65,
        // damage_chart: 'B',
        // cloaking_device_type: 'RCF',
        // power_requirements : 42
    }

    crew = 550
    troops = 150
    shuttlecraft = 15
    
    //----------------------
    engines_and_power = { 
        total_power_units: 128,
        movement_ratio: '5/1'
    }


    warp_engine = { 
        type: 'RIWD-1B',
        number: 2,
        power_units: 50,
        cruising_speed: 6,
        emergency_speed: 9
    } 


    impulse_engine = { 
        type: 'RIF-3',
        number: 1,
        power_units: 28
    } 

    auxiliary_power = 12
    reserve_power = 6


    weapons = [ 
        {
            type: 'Beam',
            id: 'RWW-H',                            
            number: 10,
            firing_arcs: [' 2 f/p/s,  2 f/p, 2 f/s, 2 p/a, 2 s/a '],      
            chart: 'T',                                 
            max_power: { 
                base: 10,
                plus3: (1-5),
                plus2: (6-12),                          
                plus1: (13-18)   
            }                                                 
        },

        {
            Type: 'Missile',
            id: 'RTA-C',                            
            number: 8,
            firing_arcs: ['2f', '2p','2s','2a'],                               
            chart: 'M',                              
            power_to_arm: 1,                                    
            damage: 'RPL-3'
        },
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
        type: 'RSP-1',                            
        shield_point_ratio: '1/4',                               
        max_shield_power: 18
    }    

    combat_efficiency_value = 140

}


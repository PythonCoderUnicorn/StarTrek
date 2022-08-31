

/*

Vastam Class Scout


One of the more Combat  22 Person-scout type vessels successful in service today is the  
Romulan Vastam-class, a multi-role design that has served the fleet for over
two decades. This diminutive ship is by no means as combat oriented as
the Klingon B’rell or as sophisticated as the Federation Heimdall, but the
Vastam has proven that she can hold her own both on the battlefield and in the most far flung regions of the galaxy.
When developing the Vastam, the Romulans had one demand, and that
was speed. They wanted a vessel that could run rings around any other ship
at sublight velocities and blaze a path at high warp for weeks or even
140  months at a time. They were successful in this and were able to do so
without sacrificing her tactical systems or information gathering abilities.
To be sure, the vessels are cramped for long durations scouts, but the crews
enjoy the high morale and camaraderie that comes from knowing that they are a valued part of the fleet.
As an offensive asset, the Vastam is a capable opponent, especially
against similarly sized vessels or even older cruisers. However, few fleet
commanders would ever squander the Vastam in this risky manner as they
are perfectly suited for closing with the enemy to gather a wealth of sensor
information. Once this is accomplished, they disengage back to friendly
lines confident that the enemy will be unable to keep up.
When acting as a vessel of exploration, the Vastam has the ability to
operate independently if necessary, but their real forte is in cooperating
with other larger science oriented vessels to act as an advanced scout. They
serve to find the best routes, develop itineraries for their larger charges and
perform surveys of items of secondary importance. It is a system that the
Romulans have down to a science is the envy of many fleets throughout the
Alpha Quadrant. A minor variant of the Vastam omits the topside torpedo
launcher in favor of a latching system that allows the scout to dock with an
Algeron-class cruiser. In this parasite mode, the pair makes use of the
facilities of each other and help extend their exploration capabilities.
Of the 120 Vastam-class scouts that have entered service, 94 remain in
active service. nine have been destroyed, three have been scrapped, six are
listed as lost, presumed destroyed and six have defected to the Romulan
Free States. Production continues at a reduced rate of 2 per year.

*/





class Vastam {

    construction_data = { 
        model : 'Mk I',
        date_entered_service : '4/6408'
    }
     
     
    hull_data = { 
        superstructure_points: 36,
        damage_chart: 'B',
        cloaking_device_type: 'RCD',
        power_requirements: 22
    }

    // crew = 104
    officers = 1
    enlisted = 8
    // troops = 20
    shuttlecraft = 0
    landing_capability = true
    
    engines_and_power = {
        total_power_units: 84,
        movement_ratio: '2/1'
    }

    warp_engine = { 
        type: 'RIUWC-1',
        number: 2,
        power_units: 30,
        cruising_speed: 7,
        emergency_speed: 9.975
    } 


    impulse_engine = { 
        type: 'RIF-4',
        number: 2,
        power_units: 24
    } 

    auxiliary_power = 8
    reserve_power = 4


    weapons = [ 
        // {
        //     type: 'Beam',
        //     id: 'RPW-GL',                            
        //     number: 8,
        //     firing_arcs: [' 4 f/p 4 f/s '],      
        //     chart: 'x',                                 
        //     max_power: { 
        //         base: 5,
        //         plus3: (1-10),
        //         plus2: (11-15),                          
        //         plus1: (16-22)   
        //     }                                                 
        // },

        {
            Type: 'Missile',
            id: 'RTA-S',                            
            number: 2,
            firing_arcs: ['2f'],                               
            chart: 'S',                              
            power_to_arm: 1,                                    
            damage: 10
        },
        // {
        //     Type: 'Missile',
        //     id: 'RPL-4',                            
        //     number: 8,
        //     firing_arcs: ['4 f/p 4 f/s'],                               
        //     chart: 'Q',                              
        //     power_to_arm: 12,                                    
        //     damage: 'RL-4'
        // }
    ] 


    shields = { 
        type: 'RSL-6',                            
        shield_point_ratio: '1/6',                               
        max_shield_power: 14
    }    

    combat_efficiency_value = 90
}
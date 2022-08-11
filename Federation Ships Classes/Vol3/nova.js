

/*
NOVA - CLASS SURVEYOR

The Nova class has a long design history and the vessel that eventually emerged bears little          serious consideration to a larger-scale production run of the vessel then originally envisioned.
resemblance to the original plans, in either design or mission. The Nova class can trace it’s roots   Class: The ASDB team working on the Nova class design study began to re-evaluate the need
back to 2365 when the Advanced Starship Design Bureau began to chart their plans for the next         for a large multi-mission explorer based on the feedback they were receiving from both the
generation of Explorers to replace the Galaxy class. Though the Galaxy had been in service for        Galaxy (II) and Sovereign class SDPs. As the Pathfinder project became the Defiant class SDP,
less than a decade, the costs involved in building and operating such vessels essentially ensured     one of the senior designers was moved to the Nova class design study in 2367, and he brought
that no more than the original twelve funded would be built. Therefore, Starfleet’s R&D Facility      his computer model of the original Pathfinder, the NXP-2365WP/T, with him. The Nova team
at New Aberdeen Fleet Yards in the Aldeberan system was tasked to design a smaller vessel that        reviewed the model and determined that it would make an excellent replacement of the
would be cheaper to build and operate.                                                                over one-century old Oberth class as a science surveyor. A design study was completed and
At the same time, the ASDB started work on the Pathfinder Project to develop a high-speed             presented in 2367 to the Star Fleet Spacecraft Design Advisory Commission, who approved the
torpedo attack ship to compliment the Akira class battlecruiser — itself a torpedo-heavy design.      new design and designated the ASDB to create the Nova Class Starship Development Project.
The vessel would be optimized for extreme high-warp speeds in excess of Warp 9.98 and serve           Classification: The Nova class is designated a Surveyor, a sub-class of Scout that specializes in
as a “hit-and-run” type vessel to be used against Threat defenses such as starbases and other         the mapping of an area of space for later follow-up by dedicated explorers should anything of
orbital facilities. With the arrival of the Borg in 2366, Pathfinder Project Director Batelle Toh     interest be found.
scrapped the existing design and began a significant redesign that would lead to the Defiant          Design:The Nova class design is almost identical to that chosen for the original Pathfinder project.
class escort.                                                                                         The vessel has a blended primary and secondary hull, like the Intepid class, a contemporary
Also by 2366 the Galaxy class was showing severe design problems, especially in tactical and          design. Twin nacelles rise up on struts to a position slightly above the primary hull. Both nacelles
power-distribution. Rear Admiral Chris Wallace, the Executive Director of the Galaxy Class            are slightly tapered backwards to improve field formation and balance. The Nova class was
Starship Development Project, was named to head a new panel to develop corrections. These             designed for deep-space survey missions, and the eighty crewmembers enjoy spacious quarters
would eventually result in the Galaxy (II) class of CKEs. The Sovereign class heavy cruiser, though   and excellent facilities. One main and four small holodecks have been added, and are used
not formally created to replace the Galaxy class, was showing itself to be an excellent design        for astrometrics research in addition to their more traditional crew-relaxation and recreation
in computer simulations of the two spaceframes under construction and Star Fleet was giving           purposes.

*/


class Nova {


    specifications  = {
        displacement_mt: 450000,
        overall_length_m: 160,
        overall_draft_m: 39,
        overall_beam_m: 108
    }
        

    propulsion = [
        {
            info: "LF-40 Mod 1 energized-energized antimatter warp drive units",
            quantity: 2,
            contractor: 'Leeding Energies, Sydney, Earth', // 'Shuvinaaljis Warp Technologies, Vulcan' //'Leeding Energies, Sydney, Earth'
        },
        {
            info: "FIG-3 subatomic unified energy impulse units",
            quantity: 1,
            contractor: "Kloratis Drivers, Tellar"
        },
        {
            info: "QASR-2 particle beam maneuvering thrusters",
            quantity: 1,
            contractor: "Scarbak Propulsion Systems, Earth"
        },
        {
            info: "Trentis IV pulsed laser reaction control system", 
            quantity: 1,
            contractor: "Orage Ijek, Aksajak, Andor"
        }

    ]

     


    velocity = [
        {
            warp: 7.0,
            detail: 'Standard Cruising Speed'
        },
        {
            warp: 8.0,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 8.3,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "5 years, Standard"
    


    crew = {
        officers: 30,
        enlisted_crew: 50,
        passengers: 0, // 5000 max
        marines: 0, // max 5000
        flight_crew: 0,
        crew_total: 80
    }
       

    
    embarked_craft(number) {

        let ships = [
            'Peregrine Class Fighter', // 0
            'S-3 Sentry SWAC shuttle', // 1
            "Danube Class Runabout", // 2
            '9A Cargo Shuttle', // 3
            'Type 6/7 Personnel Shuttle',  // 4
            'Type 16 Shuttlepod', // 5
            'Peregrine Class Fighter', // 6
            'Type 10 Combat Drop Shuttles', // 7
            'Avenger Class Runabout', // 8
            'Aerowing Type Runabout' // 9
        ] 

        if (number === 0) {
     
            console.log( ships[4], ships[3], ships[9])
        }
        // else
        // if(number === 1) {
        //     console.log( ships[2], ships[5]) 
        // }
        else if (number === 2) {
        
            console.log( ships[5] )
        }
        // else if(number === 4) {
          
        //     console.log( ships[4] )
        // }
        // // else if (number === 6) {
          
        //     console.log( ships[7] )
        // }
        // else if (number === 8) {
        //     console.log( ships[5] )
        // }
        // else if (number === 12) {
        //     console.log()
        // }
        // else if (number === 10) {
        //     console.log( ships[4], ships[3], ships[5])
        // }
        // else if (number === 20) {
        //     console.log( ships[6])
        // }
        // else if (number === 30) {
        //     console.log(ships[7])
        // }
        // else if (number === 48) {
        //     console.log(ships[0])
        // }
        else {
            console.log("Error. Enter integer < 3. Try again.")
        }
     
    }


    navigation = {
            guidance: 'RAV / ISHAK Mod 3 Warp Celestial Guidance',
            contractor: 'Tlixis Ramab RRB, Coridan III'
        }
        
    
      
    

    computers = [
        {
            type: ['M-14 Isolinear III with LCARS  '], // M-15 Isolinear III with LCARS   with LCARS   Isolinear III with LCARS  M-16 Bio-Neutral Gel Pack - isolinear III with LCARS
            manufacturer: "Daystrom Computer Systems, Lunaport Luna"
        },
        // {
        //     type: 'AEGIS MK 7 Mod 1 Fleet Fre Control System',
        //     manufacturer: 'RCA, New York, Earth'
        // }
    ]
    
        

    phasers = [
        {
            banks: 11,
            each: 1,
            type: 'Type VI Collimated Phaser Array',
            contractor: 'HiBeam Energies, Earth'
        },
        // {
        //     banks: 6,
        //     each: 1,
        //     type: 'Type XII Megaphaser Cannon',
        //     contractor: 'HiBeam Energies, Earth'
        // },
        // {
        //     banks: 1,
        //     each: 1,
        //     type: 'Type XIII Phaser Cannon',
        //     contractor: 'HiBeam Energies, Earth'
        // },
    ]
    

    missiles = [
        {
            tubes: 3,
            type: 'MK 75 Photon Torpedo Launchers',
            contractor: 'Loraxial, Andor' //'Skat-Rar Weapon Systems, Andor'  // 'Loraxial, Andor'
        },
        // {
        //     tubes: 4,
        //     type: 'MK 20 Photon Torpedo Launchers',
        //     contractor: "K'oriv Qo'nos" //'Loraxial, Andor'
        // },
    ]

    defense = [
        {    
            type: 'FSP Primary Force Field',
            contractor: 'Charlottes Shields, Earth' // '' Sylvanesti Shields, Alkara XV
        },
        // {    
        //     type: 'FCE-2 Integrated Cloaking Device',
        //     contractor: 'Sylvanesti Shields, Alkara XV' // 'Charlottes Shields, Earth'
        // },

    ]
    
    life_support = [
        {
            type: 'MM6 Modular Gravity Unit', // 'NAG1 Modular Gravity Unit', // 'MM6 Modular Gravity Unit', // , // 'MM6 Modular Gravity Unit',
            contractor: 'Morris Magnatronics, Palyria, Mars' // 'New Amsterdam Gravitronics, New Amsterdam, Alpha III', // 'Morris Magnatronics, Palyria, Mars' // 
        },
        {
            type: 'AL4 Life Support System',
            contractor:'A Alakon Landiss, Divallax, Andor'
        },
     
    ]

}
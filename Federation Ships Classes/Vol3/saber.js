

/*
SABER - CLASS SCOUT

Starfleet’s emphasis on new ships in the early twenty-fourth century was on large explorers and,       highly modular in nature. This allows smaller independent shipyards to fabricate the major
later, mid-to-large cruisers and destroyers. Smaller escort duties were handled by the older           subassemblies, which are then shipped to a larger Starfleet facility for final assembly. The
Miranda class ships. However, these vessels were pretty much outmatched by Orion and Klingon           independent yards entered into a fierce battle to offer the most competitive advantage,
pirate forces, requiring the assignment of Excelsior and Steamrunner Class ships to escort duties      resulting in significant cost savings as well as improved construction and delivery times.
on the more important convoys. While this insured the protection of the convoys, it also cost a        Engineering: The Saber Class was fitted with the LF-25 warp drive and FIG-2 impulse system. The
great deal of money. Therefore, a new class of small escorts was needed to provide convoy              result is a vessel capable of high speeds and extended duration — both important for an escort.
security, patrol of trade routes, and defense of important trading zones.                              They also provide large power reserves for weapons and shields.
Class: The Saber Class had originally started design life as a scout, however her small size made it   Tactical: As an escort, the Saber Class needed to be well-armed. As such she carries four of
difficult to fit the proper sensor suites. The SSDAC and ASDB quickly came to the conclusion that      the new Type X phaser emitters developed for the Galaxy Class, as well as two Mk 75 photon
the Saber would make an excellent escort platform, saving the development costs of a new               torpedo launchers. The FSP shield system provides exceptional fire-dissipation rates, allowing the
class and providing ships far sooner. The facilities for the Sabre Class are considered adequate       ship to stand-to and hammer it out with far larger vessels.
for her role. They are quite small compared to their larger sisters, but they are still comfortable.   Computer Systems: Trying to fit the M-13 Isolinear computer system core into the Saber Class
Amenities such as personal replicators have been removed, the crew sharing a meal in one               proved quite a problem. However, the tactical and propulsion systems required this model. They
of two large messhalls. The Saber Class was designed to carry up to 200 people in emergency            were finally able to do so, but a great deal of storage capability has been removed to allow
situations, though the quarters are little larger than a bed and a set of chairs. The Dominion         the core to fit in the space alotted. This is not considered a problem, however, as the ship’s
War placed new importance on these ships, as they provided protection for supply convoys               computing storage needs are minimal.
throughout the area of combat operations.                                                              Builders: M’Yengh Yards of Cait was named prime contractor, in view of their excellent work
Classification: The Saber class was originally considered as a scout, however it was decided           on smaller starship designs, both Fleet and private. However, they actually never built a ship.
the vessel made a better escort and changes were implemented in the design process which               Instead, they oversaw multiple subcontractors who were selected to help speed production.
resulted in the new classification.                                                                    These contractors produced the ship in sections which were then sent to the larger shipyards for
Design: The Saber Class is one of the smallest vessels in general Fleet service. The vessel is also    final assembly. In this way, M’Yengh’s experience was leveraged with improved construction

*/


class Saber {

    specifications  = {
        displacement_mt: 410000,
        overall_length_m: 189.87,
        overall_draft_m: 42.48,
        overall_beam_m: 125.61
    }
        

    propulsion = [
        {
            info: "LF-25 Mod 1 energized-energized antimatter warp drive units",
            quantity: 2,
            contractor: 'Leeding Energies, Sydney, Earth', // 'Shuvinaaljis Warp Technologies, Vulcan' //'Leeding Energies, Sydney, Earth'
        },
        {
            info: "FIG-2 subatomic unified energy impulse units",
            quantity: 2,
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
            warp: 9.0,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 9.7,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "5 years, Standard"
    


    crew = {
        officers: 5,
        enlisted_crew: 35,
        passengers: 0, // 5000 max
        marines: 0, // max 5000
        flight_crew: 0,
        crew_total: 40
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
            'Avenger Class Runabout'
        ] 

        if (number === 0) {
     
            console.log( ships[2] , ships[4], ships[3], ships[6])
        }
        else
        if(number === 1) {
            console.log( ships[2], ships[5]) 
        }
        // else if (number === 2) {
        
        //     console.log( ships[4], ships[3] )
        // }
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
            console.log("Error. Enter integer < 2. Try again.")
        }
     
    }


    navigation = {
            guidance: 'RAV / ISHAK Mod 3 Warp Celestial Guidance',
            contractor: 'Tlixis Ramab RRB, Coridan III'
        }
        
    
      
    

    computers = [
        {
            type: ['M-13 Isolinear I '], // M-15 Isolinear III with LCARS   with LCARS   Isolinear III with LCARS  M-16 Bio-Neutral Gel Pack - isolinear III with LCARS
            manufacturer: "Daystrom Computer Systems, Lunaport Luna"
        },
        // {
        //     type: 'AEGIS MK 7 Mod 1 Fleet Fre Control System',
        //     manufacturer: 'RCA, New York, Earth'
        // }
    ]
    
        

    phasers = [
        {
            banks: 4,
            each: 1,
            type: 'Type X Collimated Phaser Array',
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
            tubes: 2,
            type: 'MK 75 Photon Torpedo Launchers',
            contractor: 'Skat-Rar Weapon Systems, Andor'  // 'Loraxial, Andor'
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
            type: 'NAG1 Modular Gravity Unit', // 'MM6 Modular Gravity Unit', // , // 'MM6 Modular Gravity Unit',
            contractor: 'New Amsterdam Gravitronics, New Amsterdam, Alpha III', // 'Morris Magnatronics, Palyria, Mars' // 
        },
        {
            type: 'AL2 Life Support System',
            contractor:'A Alakon Landiss, Divallax, Andor'
        },
     
    ]
}


/*

SCOUTS

CHEYENNE - CLASS SUPERSCOUT

Almost two decades before the Ambassador class entered service, the four-nacelle cruisers               almost 75% larger than those found aboard the Constellation. The sensor, survey, and scientific
of the Constellation class were sent on missions to the extreme fringes of explored space and           suites were the most advanced of their time.
beyond. When the Ambassador class entered service, their first missions were to interesting             Engineering: Four LF-30 warp drive nacelles were added. As it had with the Constellation Class,
systems and phenomena mapped by the Constellations.                                                     this required the fitting of a larger warp core, which then tied together to provide balanced
Class: As the first Galaxy class starships started construction in the early 2350s, the Constellation   operation through a unified “H”-shaped intermix chamber system. The LF-30 has proven to be a
class continued in service, performing deep-space mapping. The survey and exploration suites            highly reliable design – a desirable trait in a deep-range explorer.
had been updated over the years, but the vessels were much slower than the explorers who                Tactical: The Cheyenne is surprisingly lightly armed considering she is designed to operate so far
followed them.                                                                                          from support. However, the Federation of the Cheyenne’s time was a far quieter and peaceful
Therefore, in 2351 the ASDB formed the Cheyenne class Starship Development Project to develop           place than when the Constellation’s plied the spacelanes. Three Type IX phaser arrays and two
a new high-speed / long-duration class of scout. The vessel was to mass under 2.5 million tons, so      Mk 75 photon torpedo launchers are carried, along with the FSP shield system.
the LF-30 series of warp drive was chosen. Though favored by the ASDB, using only two nacelles          Computer Systems: The isolinear-chip based M-13 series of computers were custom built for the
could not be guaranteed to meet the speed and duration required and, as they had done with              Cheyenne Class, as the existing duotronic-based M-12 was too large and smaller, earlier models
the Constellation, it was decided to mount four nacelles to the Cheyenne.                               did not have the computing power or storage capacity to meet the stated requirements.
Classification: The Cheyenne Class was designated as a Superscout from the inception of the             Builders: Being built in batches, Cheyenne construction was handed out to whatever yard had
program.                                                                                                the available capacity to build them, so vessels were constructed from Mars to Bajor.
Design: The Cheyenne Class bears a striking resemblance to her Constellation Class forebear.            Development and Construction History: Four-nacelle starships are not easy to build, which is why
This is deliberate, as the Constellation design worked and the ASDB did not want to “mess with          there have been only two designs. The Constellation Class offered somewhat of a benchmark for
a good thing”. The nacelles were specially designed for the Cheyenne, in an attempt to better           the Cheyenne to use, but calibration still took almost a full year after the lead ship was launched
harmonize the warp fields generated. The primary hull bears a striking resemblance to that of           in 2354. The vessel reached a speed of Warp 9.4 before hull stresses reached serious levels.
the Galaxy Class, though it is much smaller. Someone serving on a Constellation would marvel            Conclusion: The problems with the Cheyenne Class are similar to those with the Constellation
at the new staterooms aboard the Cheyenne. The wide elliptical primary hull allows room size            and seem to prove that two nacelles are, in general, the best way to go. Those problems aside,

*/


class Cheyenne {


    specifications  = {
        displacement_mt: 1900000,
        overall_length_m: 394,
        overall_draft_m: 134,
        overall_beam_m: 250
    }
        

    propulsion = [
        {
            info: "LF-30 Mod 1 energized-energized antimatter warp drive units",
            quantity: 4,
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
            info: "Trentis III pulsed laser reaction control system",
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
             warp: 9.4,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "5 years, Standard"
    


    crew = {
        officers: 50,
        enlisted_crew: 250,
        passengers: 0, // 5000 max
        marines: 0, // max 5000
        flight_crew: 0,
        crew_total: 300
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
     
            console.log( ships[2] , ships[6], ships[1])
        }
        // else
        // if(number === 1) {
        //     console.log( ships[2], ships[1]) 
        // }
        else if (number === 2) {
        
            console.log( ships[4], ships[3] )
        }
        else if(number === 4) {
          
            console.log( ships[4] )
        }
        // else if (number === 6) {
          
        //     console.log( ships[7] )
        // }
        else if (number === 8) {
            console.log( ships[5] )
        }
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
            console.log("Error. Enter integer < 10. Try again.")
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
            banks: 3,
            each: 1,
            type: 'Type IX Collimated Phaser Array',
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


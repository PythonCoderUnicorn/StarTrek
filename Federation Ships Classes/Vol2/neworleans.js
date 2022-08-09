
class New_Orleans {
 
    specifications  = {
        displacement_mt: 1200000,
        overall_length_m: 360,
        overall_draft_m: 53,
        overall_beam_m: 258
    }
        

    propulsion = [
        {
            info: "LF-30 Mod 1 energized-energized antimatter warp drive units",
            quantity: 2,
            contractor: 'Shuvinaaljis Warp Technologies, Vulcan' //'Leeding Energies, Sydney, Earth'
        },
        {
            info: "FIG-3 subatomic unified energy impulse units",
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
            warp: 6.0,
            detail: 'Standard Cruising Speed'
        },
        {
            warp: 9.0,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 9.1,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "5 years, Standard"
    


    crew = {
        officers: 83,
        enlisted_crew: 377,
        passengers: 127, // 5000 max
        marines: 0, // max 5000
        flight_crew: 0,
        crew_total: 460
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
     
            console.log( ships[2], ships[6], ships[1])
        }
        // else
        // if(number === 1) {
        //     console.log( ships[2], ships[1]) 
        // }
        // else if (number === 2) {
        
        //     console.log( ships[4], ships[3] )
        // }
        else if(number === 4) {
          
            console.log( ships[4], ships[3] )
        }
        // else if (number === 6) {
          
        //     console.log( ships[5] )
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
        //     console.log( ships[7])
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
            type: ['M-13 Isolinear III with LCARS '], // Isolinear III with LCARS  M-16 Bio-Neutral Gel Pack - isolinear III with LCARS
            manufacturer: "Daystrom Computer Systems, Lunaport Luna"
        },
        // {
        //     type: 'AEGIS MK 7 Mod 1 Fleet Fre Control System',
        //     manufacturer: 'RCA, New York, Earth'
        // }
    ]
    
        

    phasers = [
        {
            banks: 5,
            each: 1,
            type: 'Type IX Collimated Phaser Array',
            contractor: 'HiBeam Energies, Earth'
        },
        // {
        //     banks: 4,
        //     each: 1,
        //     type: 'Type X+ Megaphaser Cannon',
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
            type: 'MK 80 Photon Torpedo Launchers',
            contractor: 'Loraxial, Andor'
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
            type: 'NAG2 Modular Gravity Unit' , // 'MM6 Modular Gravity Unit',
            contractor: 'New Amsterdam Gravitronics, New Amsterdam, Alpha III', // 'Morris Magnatronics, Palyria, Mars' // 
        },
        {
            type: 'AL2 Life Support System',
            contractor:'A Alakon Landiss, Divallax, Andor'
        },
     
    ]

}
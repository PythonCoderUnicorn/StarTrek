
class Griffon {
           
    specifications  = {
        displacement_mt: 3680000,
        overall_length_m: 708,
        overall_draft_m: 106,
        overall_beam_m: 285
    }
        

    propulsion = [
        {
            info: "LF-42 Mod 1 energized-energized antimatter warp drive units",
            quantity: 2,
            contractor: 'Shuvinaaljis Warp Technologies, Vulcan' //'Leeding Energies, Sydney, Earth'
        },
        {
            info: "FIG-5 subatomic unified energy impulse units",
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
            warp: 8.0,
            detail: 'Standard Cruising Speed'
        },
        {
            warp: 9.3,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 9.5,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "5 years, Standard"
    


    crew = {
        officers: 141,
        enlisted_crew: 524,
        passengers: 1000, // 5000 max
        marines: 0, // max 5000
        flight_crew: 0,
        crew_total: 1665
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

        // if (number === 0) {
     
        //     console.log( )
        // }
        // else
        // if(number === 1) {
        //     console.log( ships[2], ships[1]) 
        // }
        // else if (number === 2) {
        
        //     console.log( )
        // }
        // else
        if(number === 4) {
          
            console.log( ships[2], ships[3], ships[4], ships[8], ships[1])
        }
        // else if (number === 6) {
          
        //     console.log( ships[3] )
        // }
        // else if (number === 8) {
        //     console.log( ships[6])
        // }
        // else if (number === 12) {
        //     console.log()
        // }
        // else if (number === 10) {
        //     console.log( ships[4], ships[3], ships[5])
        // }
        else if (number === 20) {
            console.log( ships[7])
        }
        // else if (number === 30) {
        //     console.log(ships[7])
        // }
        else if (number === 48) {
            console.log(ships[0])
        }
        else {
            console.log("Error. Enter integer < 50. Try again.")
        }
     
    }


    navigation = {
            guidance: 'RAV / ISHAK Mod 3 Warp Celestial Guidance',
            contractor: 'Tlixis Ramab RRB, Coridan III'
        }
        
    
      
    

    computers = {
        type: ['M-15 Isolinear III with LCARS'],
        manufacturer: "Daystrom Computer Systems, Lunaport Luna"
    }
        

    phasers = [
        {
            banks: 9,
            each: 1,
            type: 'Type X Collimated Phaser Array',
            contractor: 'HiBeam Energies, Earth'
        },
        {
            banks: 4,
            each: 1,
            type: 'Type X+ Megaphaser Cannon',
            contractor: 'HiBeam Energies, Earth'
        },
        // {
        //     banks: 1,
        //     each: 1,
        //     type: 'Type XIII Phaser Cannon',
        //     contractor: 'HiBeam Energies, Earth'
        // },
    ]
    

    missiles = [
        {
            tubes: 4,
            type: 'MK 90 Photon Torpedo Launchers',
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
            type: 'FSS Primary Force Field',
            contractor: 'Sylvanesti Shields, Alkara XV' // 'Charlottes Shields, Earth'
        },
        {    
            type: 'FCE-2 Integrated Cloaking Device',
            contractor: 'Sylvanesti Shields, Alkara XV' // 'Charlottes Shields, Earth'
        },

    ]
    
    life_support = [
        {
            type: 'MM6 Modular Gravity Unit',
            contractor: 'Morris Magnatronics, Palyria, Mars' // New Amsterdam Gravitronics, New Amsterdam, Alpha III
        },
        {
            type: 'AL3 Life Support System',
            contractor:'A Alakon Landiss, Divallax, Andor'
        },
     
    ]

}
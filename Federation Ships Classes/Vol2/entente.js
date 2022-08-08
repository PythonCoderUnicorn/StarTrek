
/* ENTENTE CLASS - DREADNOUGHT */


class Entente {

    
    specifications  = {
        displacement_mt: 5520e5,
        overall_length_m: 643,
        overall_draft_m: 195,
        overall_beam_m: 464
    }
        

    propulsion = [
        {
            info: "LF-41 Mod 1 energized-energized antimatter linear warp drive units with Continual Warp Field Balance Generation",
            quantity: 3,
            contractor: 'Leeding Energies, Sydney, Earth'
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
            warp: 7.0,
            detail: 'Standard Cruising Speed'
        },
        {
            warp: 9.5,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 9.9,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "5 years, Standard"
    


    crew = {
        officers: 90,
        enlisted_crew: 575,
        passengers: 1000, // 5000 max
        marines: 500, // max 5000
        crew_total: 2165
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
            'Type 10 Combat Drop Shuttles' // 7
        ] 

        // if (number === 0) {
     
        //     console.log( )
        // }
        // else
        if(number === 1) {
            console.log( ships[2], ships[1]) 
        }
        // else if (number === 2) {
        
        //     console.log( )
        // }
        else if (number === 4) {
          
            console.log( ships[4])
        }
        else if (number === 6) {
          
            console.log( ships[3] )
        }
        else if (number === 8) {
            console.log( ships[6])
        }
        // else if (number === 12) {
        //     console.log()
        // }
        else if (number === 10) {
            console.log( ships[5])
        }
        else if (number === 20) {
            console.log( ships[7])
        }
        else {
            console.log("Error. Enter integer < 21. Try again.")
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
            banks: 12,
            each: 1,
            type: 'Type X Collimated Phaser Array',
            contractor: 'HiBeam Energies, Earth'
        },
        {
            banks: 2,
            each: 1,
            type: 'Type XII Phaser Cannon',
            contractor: 'HiBeam Energies, Earth'
        },
        {
            banks: 1,
            each: 1,
            type: 'Type XIII Phaser Cannon',
            contractor: 'HiBeam Energies, Earth'
        },
    ]
    

    missiles = {
        tubes: 4,
        type: 'MK 95 Photon Torpedo Launchers',
        contractor: 'Loraxial, Andor'
    }

    defense = {
        type: 'FSQ Primary Force Field',
        contractor: 'Charlottes Shields, Earth'
    }
    
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
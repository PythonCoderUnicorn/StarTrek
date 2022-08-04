
/*
    PROMETHEUS CLASS - TACTICAL CRUISER

*/


let prometheus_class_ships = [


    {
        number: 'NCC-74913',
        name: 'Prometheus',
        builder: 'Fleet Yards, Deep Space 5',
        laid_down: { year: '2367', month: 'June' },
        launched: { year: '2374', month: 'April' },
        commissioned: { year: '2376 ', month: 'December ' },
        status: 'Active'
    },
]








class Prometheus {

    specifications  = {
        displacement_mt: 2.5e5,
        overall_length_m: 415,
        overall_draft_m: 113,
        overall_beam_m: 170
    }
        

    propulsion = [
        {
            info: "LF-44 Mod 1 energized-energized antimatter warp drive units",
            quantity: 2,
            contractor: 'Cochrane Warp Dynamics, Minos al Rijil, Alpha Centauri VII'
        },
        {
            info: "LF-15 Mod 1 dilithium-energized antimatter warp drive units",
            quantity: 1,
            contractor: "Cochrane Warp Dynamics, Alpha Centauri V"
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
            warp: 9.0,
            detail: 'Standard Cruising Speed'
        },
        {
            warp: 9.8,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 9.99,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "1 years, Standard"
    


    crew = {
        officers: 41,
        enlisted_crew: 100,
        passengers: 0, // 50 max
        crew_total: 141
    }
       

    
    embarked_craft(number) {

        let shuttles = ["Danube Class Runabout", // 0
            'Peregrine Class Fighter', // 1
            'S-3 Sentry SWAC shuttle', // 2
            'Type 7 Personnel Shuttle', // 3
            'Type 9A Cargo Shuttle', // 4
            'Aerowing Type Runabout', // 5
            'Type 16 Shuttlepod ', // 6
            'Type 6 Personnel Shuttle' // 7
        ] 

        if (number === 0) {
         
            console.log( shuttles[0] , shuttles[3], shuttles[4] )
        }
        // else if (number === 1) {
    
        //     console.log( shuttles[5] ) //
        // }
        else if(number === 2) {
            
            console.log( shuttles[7]  )
        }
        // else if (number === 3) {
        //     console.log( shuttles[7], shuttles[3], shuttles[4])
        // }
        else if (number === 4) {
         
            console.log( shuttles[6] )
        }
        else if (number === 6) {
            let s = ['Type 16 Shuttlepod']
            console.log(s)
        }
        // else if (number === 8) {
        //     console.log('Type 16 Shuttlepod or Peregrine Class Fighter')
        // }
        // else if (number === 12) {
        //     console.log('Peregrine Class Fighter')
        // }
        else {
            console.log("Error. Enter integer < 5. Try again.")
        }
     
    }


    navigation = {
            guidance: 'RAV / ISHAK Mod 3 Warp Celestial Guidance',
            contractor: 'Tlixis Ramab RRB, Coridan III'
        }
        
    
      
    

    computers = [
        {
            type: 'M-16 Bio-Neural Gel Pack-Isolinear III with LCARS interface software',
            manufacturer: "Daystrom Computer Systems, Lunaport Luna"
        },
        // {
        //     type: 'AEGIS MK 7 Mod1 Fleet Fire Control System (CKE 71875)',
        //     manufacturer: 'RCA, New York, Earth'
        // }
    ]
        

    phasers = {
            banks: 13,
            each: 1,
            type: 'Type XII Collimated Phaser Array',
            contractor: 'HiBeam Energies, Earth'
        }
    

    missiles = {
        tubes: 3,
        type: 'MK 95 Photon Torpedo Launchers',
        contractor: 'Loraxial, Andor'
    }

    defense = [
        {
            type: 'FSS Primary Force Field',
            contractor: 'Sylvanesti Shields, Alkara XV'
        },
        // {
        //     type: 'FCE Integrated Cloaking Device',
        //     manufacturer: 'Sylvanesti Shields, Alkara XV'
        // }
    ]
        
    
    life_support = [
        {
            type: 'MM6 Modular Gravity Unit',
            contractor: 'Morris Magnatronics, Palyria, Mars'
        },
        {
            type: 'AL4 Life Support System',
            contractor:'A Alakon Landiss, Divallax, Andor'
        },
     
    ]
}

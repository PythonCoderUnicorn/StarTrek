

/*
    NOTTINGHAM CLASS - EXPLORATORY CRUISER

*/

let nottingham_class_ships = [
    {
        number: 'NCC-78505',
        name: 'Nottingham',
        builder: 'Ganymede Fleet Yards, Jupiter',
        laid_down: { year: '2371', month: 'December' },
        launched: { year: '2375', month: 'August' },
        commissioned: { year: '2376 ', month: 'September ' },
        status: 'Active'
    },
    {
        number: 'NCC-78506',
        name: 'Marshal Martz',
        builder: 'Ganymede Fleet Yards, Jupiter',
        laid_down: { year: '2371', month: 'December' },
        launched: { year: '2375', month: 'September' },
        commissioned: { year: '2376 ', month: 'October ' },
        status: 'Active'
    },
]








class Nottingham {

    specifications  = {
        displacement_mt: 4.5e5,
        overall_length_m: 538.65,
        overall_draft_m: 93.5,
        overall_beam_m: 419.25
    }
        

    propulsion = [
        {
            info: "LF-46 Mod 1 energized-energized antimatter warp drive units",
            quantity: 2,
            contractor: 'Cochrane Warp Dynamics, Minos al Rijil, Alpha Centauri VII'
        },
        // {
        //     info: "LF-15 Mod 1 dilithium-energized antimatter warp drive units",
        //     quantity: 1,
        //     contractor: "Cochrane Warp Dynamics, Alpha Centauri V"
        // },
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
            warp: 9.2,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 9.75,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "15 years, Standard"
    


    crew = {
        officers: 157,
        enlisted_crew: 473,
        passengers: 50, // 2000 max
        marines:50, // max 500
        crew_total: 1680
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

        // if (number === 0) {
         
        //     console.log( shuttles[0] , shuttles[3], shuttles[4] )
        // }

        // else if (number === 1) {
    
        //     console.log( shuttles[5] ) //
        // }

        // else
        if(number === 2) {
            
            console.log( shuttles[4]  )
        }

        // else if (number === 3) {
        //     console.log( shuttles[7], shuttles[3], shuttles[4])
        // }

        else if (number === 4) {
         
            console.log( shuttles[7] )
        }
            
        else if (number === 5) {

            console.log( shuttles[0] )
        }
            
        
        else if (number === 6) {
            
            console.log( shuttles[3] )
        }
            
        else if (number === 8) {

            console.log( shuttles[6])
        }
            
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
            type: 'M-16 Bio-Neural Gel Pack-Isolinear III with LCARS 2.5 interface software',
            manufacturer: "Daystrom Computer Systems, Lunaport Luna"
        },
        // {
        //     type: 'AEGIS MK 7 Mod1 Fleet Fire Control System (CKE 71875)',
        //     manufacturer: 'RCA, New York, Earth'
        // }
    ]
        

    phasers = [
        {
            banks: 2,
            each: 1,
            type: 'Type XV Collimated Phaser Array',
            contractor: 'HiBeam Energies, Earth'
        },
        {
            banks: 9,
            each: 1,
            type: 'Type XII Collimated Phaser Array',
            contractor: 'HiBeam Energies, Earth'
        },

    ]
    

    missiles = {
        tubes: 2,
        type: 'MK 95 Photon Torpedo Launchers',
        contractor: 'Loraxial, Andor'
    }

    defense = [
        {
            type: 'FSQ/2 Primary Force Field',
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
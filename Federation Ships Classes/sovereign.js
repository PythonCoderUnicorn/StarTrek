
/*
    SOVEREIGN CLASS - HEAVY CRUISER
*/

let sovereign_class_ships = [
    {
        number: 'NCC-73811',
        name: 'Sovereign',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2364', month: 'August' },
        launched: { year: '2371', month: 'November' },
        commissioned: { year: '2372 ', month: 'June ' },
        status: 'Active'
    },
    {
        number: 'NCC-1701-E',
        name: 'Enterprise',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2364', month: 'October' },
        launched: { year: '2372', month: 'March' },
        commissioned: { year: '2372 ', month: 'December ' },
        status: 'Active'
    },
    {
        number: 'NCC-47016',
        name: 'Kensington',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2366', month: 'March' },
        launched: { year: '2372', month: 'July' },
        commissioned: { year: '2373 ', month: 'May ' },
        status: 'Active'
    },
    {
        number: 'NCC-74610',
        name: 'Reuben James',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2367', month: 'January' },
        launched: { year: '2374', month: 'April' },
        commissioned: { year: '2374 ', month: 'December ' },
        status: 'Active'
    },
    {
        number: 'NCC-75013',
        name: 'Atlas',
        builder: 'Chiokis Starship Construction, Andor',
        laid_down: { year: '2367', month: 'August' },
        launched: { year: '2375', month: 'January' },
        commissioned: { year: '2375 ', month: 'August ' },
        status: 'Active'
    },
    {
        number: 'NCC-76771',
        name: 'Cicero',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2370', month: 'February' },
        launched: { year: '2377', month: 'September' },
        commissioned: { year: ' ', month: ' ' },
        status: 'Trials'
    },
    {
        number: 'NCC-77820',
        name: 'Cu Chulainn',
        builder: 'Chiokis Starship Construction, Andor',
        laid_down: { year: '2371', month: 'February' },
        launched: { year: '', month: '' },
        commissioned: { year: ' ', month: ' ' },
        status: 'Building'
    },
    {
        number: 'NCC-78382',
        name: 'Endurance',
        builder: 'Puget Sound Fleet Yards, Earth',
        laid_down: { year: '2371', month: 'August' },
        launched: { year: '', month: '' },
        commissioned: { year: ' ', month: ' ' },
        status: 'Building'
    },
]



class Sovereign {

    specifications  = {
        displacement_mt: 3205000,
        overall_length_m: 685,
        overall_draft_m: 88,
        overall_beam_m: 250
    }
        

    propulsion = [
        {
            info: "LF-44 Mod 1 energized-energized antimatter warp drive units",
            quantity: 2,
            contractor: 'Cochrane Warp Dynamics, Alpha Centauri V'
        },
        // {
        //     info: "LF-44 Mod 1 energized-energized antimatter warp drive units (CKE 71875)",
        //     quantity: 2,
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
            warp: 6.0,
            detail: 'Standard Cruising Speed'
        },
        {
            warp: 9.7,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 9.9,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "5 years, Standard"
    


    crew = {
        officers: 130,
        enlisted_crew: 725,
        passengers: 0, // 1200 max
        crew_total: 855
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
         
            console.log( shuttles[0]  )
        }
        // else if (number === 1) {
    
        //     console.log( shuttles[5] ) //
        // }
        // else if(number === 2) {
            
        //     console.log( shuttles[7]  )
        // }
        else if (number === 3) {
            console.log( shuttles[7], shuttles[3], shuttles[4])
        }
        // else if (number === 4) {
         
        //     console.log( shuttles[6] )
        // }
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
            banks: 9,
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
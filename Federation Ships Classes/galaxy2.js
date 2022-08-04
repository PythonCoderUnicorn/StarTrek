
/*
    GALAXY II CLASS - LARGE EXPLORATORY CRUISER

*/

let galaxy2_class_ships = [
    {
        number: 'NCC-71867',
        name: 'Trinculo',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2354', month: 'August' },
        launched: { year: '2371', month: 'December' },
        commissioned: { year: '2372 ', month: 'June ' },
        status: 'Active'
    },
    {
        number: 'NCC-71875',
        name: 'Bright Star',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2355', month: 'September' },
        launched: { year: '2370', month: 'January' },
        commissioned: { year: '2370 ', month: 'May ' },
        status: 'Active'
    },
    {
        number: 'NCC-72069',
        name: 'Werner von Braun',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2360', month: 'February' },
        launched: { year: '2372', month: 'August' },
        commissioned: { year: '2373 ', month: 'March ' },
        status: 'Active'
    },
    {
        number: 'NCC-72382',
        name: 'Magellan',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2361', month: 'September' },
        launched: { year: '2373', month: 'May' },
        commissioned: { year: '2373 ', month: 'December ' },
        status: 'Active'
    },
    {
        number: 'NCC-77983',
        name: 'Breedlove',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2371', month: 'March' },
        launched: { year: '2374', month: 'April' },
        commissioned: { year: '2378 ', month: 'April ' },
        status: 'Trials'
    },
    {
        number: 'NCC-78012',
        name: 'Cortez',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2371', month: 'April' },
        launched: { year: '2374', month: 'April' },
        commissioned: { year: ' ', month: ' ' },
        status: 'Lost'
    },
    {
        number: 'NCC-70637',
        name: 'Galaxy',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2375', month: 'July' },
        launched: { year: '2377', month: 'April' },
        commissioned: { year: '2377 ', month: 'November ' },
        status: 'Active'
    },
]




class Galaxy2 {

    specifications  = {
        displacement_mt: 4780000,
        overall_length_m: 642.51,
        overall_draft_m: 196.26,
        overall_beam_m: 463.73
    }
        

    propulsion = [
        {
            info: "LF-43 Mod 1 energized-energized antimatter warp drive units",
            quantity: 2,
            contractor: 'Leeding Energies, Earth'
        },
        {
            info: "LF-44 Mod 1 energized-energized antimatter warp drive units (CKE 71875)",
            quantity: 2,
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
        officers: 185,
        enlisted_crew: 525,
        passengers: 1000, // 5000 max
        crew_total: 1710
    }
       

    
    embarked_craft(number) {

        // if (number === 0) {
        //     let z = ["Danube Class Runabout",] // 'Peregrine Class Fighter','S-3 Sentry SWAC shuttle'
        //     console.log( z)
        // }
        // else
        if (number === 1) {
            let y = ["Danube Class Runabout", "S-3 Sentry SWAC Shuttle"]
            console.log( y ) // 
        }
        else if(number === 2) {
            let t = ['9A Cargo Shuttle','Type 7 Personnel Shuttle',] // 'Type 6/7 Personnel Shuttle', 'Type 16 Shuttlepod ', 'S-3 Sentry SWAC shuttle'
            console.log(t)
        }
        else if (number === 4) {
            x = ['Type 6 Personnel Shuttle' ]
            console.log(x)
        }
        else if (number === 6) {
            let s = ['Type 16 Shuttlepod']
            console.log(s)
        }
        else if (number === 8) {
            console.log('Type 16 Shuttlepod or Peregrine Class Fighter')
        }
        // else if (number === 12) {
        //     console.log('Peregrine Class Fighter')
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
            type: 'M-16 Bio-Neural Gel Pack-Isolinear III with LCARS 2.5 / E.V.E. interface software',
            manufacturer: "Daystrom Computer Systems, Lunaport Luna"
        },
        {
            type: 'AEGIS MK 7 Mod1 Fleet Fire Control System (CKE 71875)',
            manufacturer: 'RCA, New York, Earth'
        }
    ]
        

    phasers = {
            banks: 12,
            each: 1,
            type: 'Type XII Collimated Phaser Array',
            contractor: 'HiBeam Energies, Earth'
        }
    

    missiles = {
        tubes: 2,
        type: 'MK 95 Quantum Torpedo Launchers',
        contractor: 'Loraxial, Andor'
    }

    defense = [
        {
            type: 'FSS Primary Force Field',
            contractor: 'Sylvanesti Shields, Alkara XV'
        },
        {
            type: 'FCE Integrated Cloaking Device',
            manufacturer: 'Sylvanesti Shields, Alkara XV'
        }
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
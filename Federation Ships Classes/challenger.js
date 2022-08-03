
/*
    CHALLENGER CLASS - LIGHT CRUISER

*/

let challenger_class_ships = [
    {
        number: 'NCC-57528',
        name: 'Challenger',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2340', month: 'October' },
        launched: { year: '2343', month: 'December' },
        commissioned: { year: '2344', month: 'April' },
        status: 'Lost'
    },
    {
        number: 'NCC-57537',
        name: 'Armstrong',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2340', month: 'November' },
        launched: { year: '2344', month: 'January' },
        commissioned: { year: '2344', month: 'May' },
        status: 'Lost'
    },
    {
        number: 'NCC-57566',
        name: 'Kearsarge',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2340', month: 'December' },
        launched: { year: '2344', month: 'January' },
        commissioned: { year: '2344', month: 'June' },
        status: 'Active'
    },
    {
        number: 'NCC-57580',
        name: 'Buran',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2341', month: 'January' },
        launched: { year: '2344', month: 'March' },
        commissioned: { year: '2344', month: 'August' },
        status: 'Active'
    },
]






class Challenger {

    specifications  = {
        displacement_mt: 1.9e5,
        overall_length_m: 394,
        overall_draft_m: 214,
        overall_beam_m: 273
    }
        

    propulsion = [
        {
            info: "LF-30 Mod 1 energized-energized antimatter linear warp drive units",
            quantity: 2,
            contractor: 'Leeding Energies, Earth'
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
            warp: 6.0,
            detail: 'Standard Cruising Speed'
        },
        {
            warp: 8.0,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 9.2,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "5 years, Standard"
    


    crew = {
        officers: 50,
        enlisted_crew: 250,
        passengers: 0, // 100 max
        crew_total: 300
    }
       

    
    embarked_craft(number) {

        if (number === 0) {
            let z = ["Danube Class Runabout",'Peregrine Class Fighter','S-3 Sentry SWAC shuttle']
            console.log( z)
        }
        // else if (number === 1) {
        //     console.log("S-3 Sentry SWAC Shuttle") 
        // }
        else if (number === 2) {
            let t = ['Type 6/7 Personnel Shuttle', '9A Cargo Shuttle','Type 16 Shuttlepod ']
            console.log(t)
        }
        // else if (number === 4) {
        //     x = ['Type 6 Personnel Shuttle' ]
        //     console.log(x)
        // }
        // else if (number === 8) {
        //     console.log('Type 16 Shuttlepod or Peregrine Class Fighter')
        // }
        else {
            console.log("Error. Enter integer < 3. Try again.")
        }
     
    }


    navigation = {
            guidance: 'RAV / ISHAK Mod 3 Warp Celestial Guidance',
            contractor: 'Tlixis Ramab RRB, Coridan III'
        }
        
    
      
    

    computers = {
        type: ['M-13 Isolinear I'],
        manufacturer: "Daystrom Computer Systems, Lunaport Luna"
    }
        

    phasers = {
            banks: 3,
            each: 1,
            type: 'Type IX Collimated Phaser Array',
            contractor: 'HiBeam Energies, Earth'
        }
    

    missiles = {
        tubes: 2,
        type: 'MK 75 Photon Torpedo Launchers',
        contractor: 'Skat-Rar Weapon Systems, Andor'
    }

    defense = {
        type: 'FSP Primary Force Field',
        contractor: 'Charlottes Shields, Earth'
    }
    
    life_support = [
        {
            type: 'NAG1 Modular Gravity Unit',
            contractor: 'New Amsterdam Gravitronics, New Amsterdam, Alpha III'
        },
        {
            type: 'AL2 Life Support System',
            contractor:'A Alakon Landiss, Divallax, Andor'
        },
     
    ]

}





console.log()
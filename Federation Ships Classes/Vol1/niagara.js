
/* NIAGARA CLASS FAST CRUISER */


let niagara_class_ships = [
    {
        number: 'NCC-28472',
        name: 'Niagrara',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2341', month: 'September' },
        launched: { year: '2343', month: 'September' },
        commissioned: { year: '2343', month: 'November' },
        status: 'Active'
    },
    {
        number: 'NCC-28473',
        name: 'Wellington',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2341', month: 'November' },
        launched: { year: '2343', month: 'October' },
        commissioned: { year: '2343', month: 'November' },
        status: 'Lost'
    },
    {
        number: 'NCC-59804',
        name: 'Princeton',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2343', month: 'August' },
        launched: { year: '2346', month: 'May' },
        commissioned: { year: '2347', month: 'July' },
        status: 'Active'
    },
    
]




class Niagara {

    specifications  = {
        displacement_mt: 4185000,
        overall_length_m: 565,
        overall_draft_m: 179,
        overall_beam_m: 505
    }
        

    propulsion = [
        {
            info: "LF-10 Mod 1 energized-energized antimatter linear warp drive units",
            quantity: 3,
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
        officers: 90,
        enlisted_crew: 310,
        passengers: 0, // 500 max
        crew_total: 400
    }
       

    
    embarked_craft(number) {

        if (number === 0) {
            console.log( "Danube Class Runabout | Peregrine Class Fighter | S-3 Sentry SAWC Shuttle")
        }
        else if (number === 1) {
            console.log("S-3 Sentry SWAC Shuttle") 
        }
        else if (number === 2) {
            let t = ['Type 6/7 Personnel Shuttle','9A Cargo Shuttle','Type 16 Shuttlepof']
        }
        // else if (number === 4) {
        //     x = ['Type 6/7 Personnel Shuttle','Type 9A Cargo Shuttle']
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
        type: ['M-12 Duotronic V / M13 Isolinear I (CF 59804)'],
        manufacturer: "Daystrom Computer Systems, Lunaport Luna"
    }
        

    phasers = {
            banks: 12,
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
            contractor: 'New Amsterdam Gravitics, New Amsterdam, Alpha III'
        },
        {
            type: 'AL2 Life Support System',
            contractor:'A Alakon Landiss, Divallax, Andor'
        },
     
    ]

}
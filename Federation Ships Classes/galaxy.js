
/* 
    GALAXY  CLASS - LARGE EXPLORATORY CRUISER
*/

let galaxy_class_ships = [
    {
        number: 'NCC-70637',
        name: 'Galaxy',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2348', month: 'November' },
        launched: { year: '2357', month: 'March' },
        commissioned: { year: '2357', month: 'November' },
        status: 'Converted'
    },
    {
        number: 'NCC-71099',
        name: 'Challenger',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2349', month: 'March' },
        launched: { year: '2359', month: 'September' },
        commissioned: { year: '2360', month: 'July' },
        status: 'Active'
    },
    {
        number: 'NCC-71807',
        name: 'Yamato',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2350', month: 'November' },
        launched: { year: '2358', month: 'February' },
        commissioned: { year: '2362', month: 'January' },
        status: 'Lost'
    },
    {
        number: 'NCC-1701-D',
        name: 'Enterprise',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2351', month: 'June' },
        launched: { year: '2358', month: 'June' },
        commissioned: { year: '2363', month: 'October' },
        status: 'Lost'
    },
    {
        number: 'NCC-71832',
        name: 'Odyssey',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2352', month: 'January' },
        launched: { year: '2362', month: 'February' },
        commissioned: { year: '2362', month: 'September' },
        status: 'Lost'
    },
    {
        number: 'NCC-71854',
        name: 'Venture',
        builder: 'Utopia Planitia Fleet Yards, Mars',
        laid_down: { year: '2353', month: 'April' },
        launched: { year: '2363', month: 'April' },
        commissioned: { year: '2364', month: 'January' },
        status: 'Active'
    },
]





class Galaxy {

    specifications  = {
        displacement_mt: 4500000,
        overall_length_m: 642.51,
        overall_draft_m: 195.26,
        overall_beam_m: 463.73
    }
        

    propulsion = [
        {
            info: "LF-41 Mod 1 energized-energized antimatter linear warp drive units",
            quantity: 2,
            contractor: 'Leeding Energies, Earth'
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
            warp: 6.0,
            detail: 'Standard Cruising Speed'
        },
        {
            warp: 9.2,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 9.6,
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

        if (number === 0) {
            console.log( "Danube Class Runabout")
        }
        else if (number === 1) {
            console.log("S-3 Sentry SWAC Shuttle") 
        }
        else if (number === 2) {
            let t = ['Type 7 Personnel Shuttle', '9A Cargo Shuttle']
            console.log(t)
        }
        else if (number === 4) {
            x = ['Type 6 Personnel Shuttle' ]
            console.log(x)
        }
        else if (number === 8) {
            console.log('Type 16 Shuttlepod or Peregrine Class Fighter')
        }
        else {
            console.log("Error. Enter integer < 10. Try again.")
        }
     
    }


    navigation = {
            guidance: 'RAV / ISHAK Mod 3 Warp Celestial Guidance',
            contractor: 'Tlixis Ramab RRB, Coridan III'
        }
        
    
      
    

    computers = {
        type: ['M-15 Isolinear III with LCARS interface software'],
        manufacturer: "Daystrom Computer Systems, Lunaport Luna"
    }
        

    phasers = {
            banks: 12,
            each: 1,
            type: 'Type X Collimated Phaser Array',
            contractor: 'HiBeam Energies, Earth'
        }
    

    missiles = {
        tubes: 2,
        type: 'MK 85 Photon Torpedo Launchers',
        contractor: 'Skat-Rar Weapon Systems, Andor'
    }

    defense = {
        type: 'FSQ Primary Force Field',
        contractor: 'Charlottes Shields, Earth'
    }
    
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

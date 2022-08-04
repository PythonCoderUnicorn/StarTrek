
/*
    INTREPID CLASS - CRUISER
*/

let intrepid_class_ships = [
    {
        number: 'NCC-74600',
        name: 'Intrepid',
        builder: 'Earth Station McKinley, Earth',
        laid_down: { year: '2366', month: 'December' },
        launched: { year: '2370', month: 'February' },
        commissioned: { year: '2371 ', month: 'May ' },
        status: 'Active'
    },
    {
        number: 'NCC-74656',
        name: 'Voyager',
        builder: 'Earth Station McKinley, Earth',
        laid_down: { year: '2367', month: 'March' },
        launched: { year: '2370', month: 'May' },
        commissioned: { year: '2371 ', month: 'September ' },
        status: 'Active'
    },
    {
        number: 'NCC-74657',
        name: 'Bennu',
        builder: 'Earth Station McKinley, Earth',
        laid_down: { year: '2367', month: 'April' },
        launched: { year: '2370', month: 'July' },
        commissioned: { year: '2371 ', month: 'January ' },
        status: 'Active'
    },
    {
        number: 'NCC-74658',
        name: 'Valkyrie',
        builder: 'Earth Station McKinley, Earth',
        laid_down: { year: '2367', month: 'April' },
        launched: { year: '2370', month: 'July' },
        commissioned: { year: '2371 ', month: 'February ' },
        status: 'Active'
    },
    {
        number: 'NCC-74791',
        name: 'Destiny',
        builder: 'Earth Station McKinley, Earth',
        laid_down: { year: '2367', month: 'May' },
        launched: { year: '2370', month: 'August' },
        commissioned: { year: '2371 ', month: 'March ' },
        status: 'Active'
    },
    {
        number: 'NCC-74805',
        name: 'Bellerophon',
        builder: 'Earth Station McKinley, Earth',
        laid_down: { year: '2367', month: 'May' },
        launched: { year: '2370', month: 'August' },
        commissioned: { year: '2371 ', month: 'March ' },
        status: 'Active'
    },
    {
        number: 'NCC-75127',
        name: 'Morgan',
        builder: 'Earth Station McKinley, Earth',
        laid_down: { year: '2367', month: 'September' },
        launched: { year: '2370', month: 'December' },
        commissioned: { year: '2371 ', month: 'July ' },
        status: 'Active'
    },
    {
        number: 'NCC-75812',
        name: 'Traveller',
        builder: 'Earth Station McKinley, Earth',
        laid_down: { year: '2369', month: 'March' },
        launched: { year: '2371', month: 'June' },
        commissioned: { year: '2371 ', month: 'November ' },
        status: 'Active'
    },
    {
        number: 'NCC-76254',
        name: 'Tiger',
        builder: 'Earth Station McKinley, Earth',
        laid_down: { year: '2369', month: 'August' },
        launched: { year: '2371', month: 'November' },
        commissioned: { year: '2372 ', month: 'December ' },
        status: 'Active'
    },
    {
        number: 'NCC-76893',
        name: 'Raptor',
        builder: 'Earth Station McKinley, Earth',
        laid_down: { year: '2370', month: 'March' },
        launched: { year: '2373', month: 'June' },
        commissioned: { year: '2373 ', month: 'December ' },
        status: 'Active'
    },
]


class Intrepid {

    specifications  = {
        displacement_mt: 750e3,
        overall_length_m: 343,
        overall_draft_m: 66,
        overall_beam_m: 133
    }
        

    propulsion = [
        {
            info: "LF-45 Mod 1 energized-energized antimatter warp drive units",
            quantity: 2,
            contractor: 'Leeding Energies, Earth'
        },
        // {
        //     info: "LF-44 Mod 1 energized-energized antimatter warp drive units (CKE 71875)",
        //     quantity: 2,
        //     contractor: "Cochrane Warp Dynamics, Alpha Centauri V"
        // },
        {
            info: "FIG-4 subatomic unified energy impulse units",
            quantity: 1,
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
            warp: 9.975,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 9.98,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "5 years, Standard"
    


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
         
            console.log( shuttles[3], ' ', shuttles[4] )
        }
        else if (number === 1) {
    
            console.log( shuttles[5] ) // 
        }
        else if(number === 2) {
            
            console.log( shuttles[7]  )
        }
        else if (number === 4) {
         
            console.log( shuttles[6] )
        }
        // else if (number === 6) {
        //     let s = ['Type 16 Shuttlepod']
        //     console.log(s)
        // }
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
            type: 'M-16 Bio-Neural Gel Pack-Isolinear III with LCARS 2.5 interface software',
            manufacturer: "Daystrom Computer Systems, Lunaport Luna"
        },
        // {
        //     type: 'AEGIS MK 7 Mod1 Fleet Fire Control System (CKE 71875)',
        //     manufacturer: 'RCA, New York, Earth'
        // }
    ]
        

    phasers = {
            banks: 5,
            each: 1,
            type: 'Type X Collimated Phaser Array',
            contractor: 'HiBeam Energies, Earth'
        }
    

    missiles = {
        tubes: 2,
        type: 'MK 95 Quantum Torpedo Launchers',
        contractor: 'Loraxial, Andor'
    }

    defense = [
        {
            type: 'FSQ Primary Force Field',
            contractor: 'Charlottes Shields, Earth'
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


let intrep = new Intrepid()

// console.log(intrep.embarked_craft(3))
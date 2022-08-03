
/* 
    
    AMBASSADOR CLASS CRUISERS

*/

let ambassador_class_ships = [
    {
        number: 'NCC-10521',
        name: 'Ambassador',
        builder: 'Spacedock, San Francisco, Earth',
        laid_down: { year: '2320', month: 'April' },
        launched: { year: '2324', month: 'June' },
        commissioned: { year: '2324', month: 'December' },
        status: 'Active'
    },
    {
        number: 'NCC-1701-C',
        name: 'Enterprise',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2321', month: 'January' },
        launched: { year: '2325', month: 'April' },
        commissioned: { year: '2325', month: 'August' },
        status: 'Lost'
    },
    {
        number: 'NCC-10794',
        name: 'Maat',
        builder: 'Saint Petersburg Fleet Yards, Earth',
        laid_down: { year: '2321', month: 'March' },
        launched: { year: '2325', month: 'June' },
        commissioned: { year: '2325', month: 'November' },
        status: 'Active'
    },
    {
        number: 'NCC-12847',
        name: 'Nightshade',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2321', month: 'June' },
        launched: { year: '2325', month: 'August' },
        commissioned: { year: '2326', month: 'February' },
        status: 'Active'
    },
    {
        number: 'NCC-12934',
        name: 'Horatio',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2325', month: 'July' },
        launched: { year: '2331', month: 'September' },
        commissioned: { year: '2332', month: 'March' },
        status: 'Lost'
    },
    {
        number: 'NCC-13004',
        name: 'Starseeker',
        builder: 'Spacedock, San Francisco, Earth',
        laid_down: { year: '2325', month: 'July' },
        launched: { year: '2331', month: 'September' },
        commissioned: { year: '2332', month: 'March' },
        status: 'Active'
    },
    {
        number: 'NCC-13011',
        name: 'Highlander',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2325', month: 'July' },
        launched: { year: '2331', month: 'September' },
        commissioned: { year: '2332', month: 'March' },
        status: 'Active'
    },
    {
        number: 'NCC-13519',
        name: 'Bonaventure',
        builder: 'San Francisco Fleet Yards, Earth',
        laid_down: { year: '2320', month: '' },
        launched: { year: '2324', month: '' },
        commissioned: { year: '2324', month: '' },
        status: 'Active'
    },
    {
        number: 'NCC-26133',
        name: 'Winter Solstice',
        builder: 'Saint Petersburg Fleet Yards, Earth',
        laid_down: { year: '2330', month: 'October' },
        launched: { year: '2334', month: 'May' },
        commissioned: { year: '2335', month: 'September' },
        status: 'Active'
    },
    {
        number: 'NCC-26136',
        name: 'Zhukov',
        builder: 'Saint Petersburg Fleet Yards, Earth',
        laid_down: { year: '2330', month: 'November' },
        launched: { year: '2334', month: 'June' },
        commissioned: { year: '2335', month: 'December' },
        status: 'Active'
    },
    {
        number: 'NCC-26198',
        name: 'Valdemar',
        builder: 'Pederson Spaceport, Copenhagen, Earth',
        laid_down: { year: '2331', month: 'February' },
        launched: { year: '2334', month: 'September' },
        commissioned: { year: '2335', month: 'December' },
        status: 'Active'
    },
    {
        number: 'NCC-26510',
        name: 'Yamaguchi',
        builder: 'Puget Sound Fleet Yards, Earth',
        laid_down: { year: '2332', month: 'October' },
        launched: { year: '2335', month: 'April' },
        commissioned: { year: '2335', month: 'July' },
        status: 'Active'
    },
    {
        number: 'NCC-26513',
        name: 'Exeter',
        builder: 'Alfras Fleet Yards, Denab V',
        laid_down: { year: '2332', month: 'January' },
        launched: { year: '2335', month: 'October' },
        commissioned: { year: '2336', month: 'January' },
        status: 'Active'
    },
    {
        number: 'NCC-26517',
        name: 'Excalibur',
        builder: 'Puget Sound Fleet Yards, Earth',
        laid_down: { year: '2332', month: 'November' },
        launched: { year: '2336', month: 'June' },
        commissioned: { year: '2336', month: 'August' },
        status: 'Active'
    },
    {
        number: 'NCC-26632',
        name: 'Gandhi',
        builder: 'Alfras Fleet Yards, Denab V',
        laid_down: { year: '2333', month: 'January' },
        launched: { year: '2336', month: 'October' },
        commissioned: { year: '2337', month: 'January' },
        status: 'Active'
    },
    {
        number: 'NCC-26849',
        name: 'Adelphi',
        builder: 'New Aberdeen Fleet Yards, Aldeberan',
        laid_down: { year: '2333', month: 'March' },
        launched: { year: '2337', month: 'January' },
        commissioned: { year: '2337', month: 'May' },
        status: 'Active'
    },
    {
        number: 'NCC-28472',
        name: 'Niagara',
        builder: 'Spacedock, San Francisco, Earth',
        laid_down: { year: '2334', month: 'September' },
        launched: { year: '2337', month: 'November' },
        commissioned: { year: '2338', month: 'February' },
        status: 'Converted'
    },
    {
        number: 'NCC-28473',
        name: 'Wellington',
        builder: 'Spacedock, San Francisco, Earth',
        laid_down: { year: '2334', month: 'September' },
        launched: { year: '2337', month: 'December' },
        commissioned: { year: '2338', month: 'February' },
        status: 'Converted'
    },
]









class Ambassador {


    specifications  = {
        displacement_mt: 3740000,
        overall_length_m: 526,
        overall_draft_m: 125,
        overall_beam_m: 320
    }
        

    propulsion = [
        {
            info: "LF-10 Mod 1 energized-energized antimatter linear warp drive units",
            quantity: 2,
            contractor: 'Leeding Energies, Earth'
        },
        {
            info: "FIG-1 subatomic unified energy impulse units",
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
            warp: 8.5,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 9.0,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "5 years, Standard"
    


    crew = {
        officers: 115,
        enlisted_crew: 585,
        passengers: 0,
        crew_total: 700
    }
       

    
    embarked_craft(number) {

        if (number === 2) {
            console.log( "Type 6 / Type 7 Personnel Shuttle")
        }
        else if (number === 1) {
            console.log("Type 9A Cargo Shuttle") 
        }
        else if (number === 4) {
            console.log("Type 16 Shuttlepod")
        }
        else {
            console.log("Error. Enter integer < 5. Try again.")
        }
     
    }


    navigation = {
            guidance: 'RAV / ISHAK Mod 3 Warp Celestial Guidance',
            contractor: 'Tlixis Ramab RRB, Coridan III'
        }
        
    
      
    

    computers = {
        type: ['M-12 Duotronic IV','M-13 Duotronic I (CH 26133 onwards)'],
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
        contractor: 'Skat-Rar Weapon Systems, Ezuruk, Andor'
    }

    defense = {
        type: 'FSP Primary Force Field',
        contractor: 'Charlottes Shields, Earth'
    }
    
    life_support = [
        {
            type: 'NAG2 Modular Gravity Unit',
            contractor: 'New Amsterdam Gravitics, New Amsterdam, Alpha III'
        },
        {
            type: 'AL2 Life Support System',
            contractor:'A Alakon Landiss, Divallax, Andor'
        },
     
    ]



}
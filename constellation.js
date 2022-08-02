
/*

    CONSTELLATION CLASS  - Exploratory Cruiser

    NOTE: In Fleet.js there is a ship named Constellation but is under Constitution Class ships, NCC-1017 which was destroyed


*/

let constellation_class_ships = [
    {
        number: 'NCC-1974',
        name: 'Constellation',
        builder: 'Port Copernicus Fleet Yards, Luna',
        laid_down: { year: '2281', month: 'March' },
        launched: { year: '2284', month: 'June' },
        commissioned: { year: '2284', month: 'November' },
        status: 'Active'
    },
    {
        number: 'NCC-2590',
        name: 'Valkyrie',
        builder: 'Port Copernicus Fleet Yards, Luna',
        laid_down: { year: '2281', month: 'May' },
        launched: { year: '2285', month: 'July' },
        commissioned: { year: '2286', month: 'March' },
        status: 'Active'
    },
    {
        number: 'NCC-2593',
        name: 'Hathaway',
        builder: 'Port Copernicus Fleet Yards, Luna',
        laid_down: { year: '2281', month: 'May' },
        launched: { year: '2284', month: 'September' },
        commissioned: { year: '2285', month: 'April' },
        status: 'Lost'
    },
    {
        number: 'NCC-2893',
        name: 'Stargazer',
        builder: 'Port Copernicus Fleet Yards, Luna',
        laid_down: { year: '2282', month: 'March' },
        launched: { year: '2285', month: 'April' },
        commissioned: { year: '2286', month: 'February' },
        status: 'Active'
    },
    {
        number: 'NCC-3069',
        name: 'Magellan',
        builder: 'Port Copernicus Fleet Yards, Luna',
        laid_down: { year: '2286', month: 'June' },
        launched: { year: '2289', month: 'September' },
        commissioned: { year: '2290', month: 'June' },
        status: 'Decommissioned'
    },
    {
        number: 'NCC-3890',
        name: 'Gettysburg',
        builder: 'Port Copernicus Fleet Yards, Luna',
        laid_down: { year: '2290', month: 'December' },
        launched: { year: '2293', month: 'April' },
        commissioned: { year: '2293', month: 'October' },
        status: 'Decommissioned'
    },
    {
        number: 'NCC-9754',
        name: 'Victory',
        builder: 'Port Copernicus Fleet Yards, Luna',
        laid_down: { year: '2322', month: 'June' },
        launched: { year: '2325', month: 'July' },
        commissioned: { year: '2323', month: 'March' },
        status: 'Active'
    },
    {
        number: 'NCC-9761',
        name: 'Gihlan',
        builder: 'Port Copernicus Fleet Yards, Luna',
        laid_down: { year: '2322', month: 'August' },
        launched: { year: '2325', month: 'September' },
        commissioned: { year: '2323', month: 'April' },
        status: 'Active'
    },

]





// specifications for Constellation Class
class Constellation  {

    specifications  = {
        displacement_mt: 325e3,
        overall_length_m: 315,
        overall_draft_m: 86,
        overall_beam_m: 175
    }
        

    propulsion = [
        {
            1: "LN-64B Mod 3 dilithium-energized antimatter linear warp drive units",
            quantity: 4,
            contractor: 'Cochrane Warp Dynamics. Minos al Rijil, Alpha Centauri VII'
        },
        {
            2: "RSM subatomic unified energy impulse units",
            quantity: 2,
            contractor: "Scarbak Propulsion Systems, Earth"
        },
        {
            3: "QASR particle beam maneurvering thrusters",
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
            warp: 7.0,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 8.0,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "10 years, Standard"
    


    crew = {
        officers: 100,
        enlisted_crew: 435,
        passengers: 0,
        crew_total: 535
    }
       

    
    embarked_craft(number) {

        if (number === 1) {
            console.log("Type SW-9 Intelligence Shuttle") 
        }
        else if (number === 3) {
            console.log("Type SW-7 Personnel Shuttle")
        }
        else if (number === 2) {
            console.log("Type S-10 Shuttelpod or Type S-2A Bee Workpod")
        }
        else {
            console.log("Error. Enter integer < 3, try again.")
        }
    }


    navigation = [
        {
            guidance: 'Hawkeye Warp Celestial',
            contractor: 'Plessey Group, Essex, Earth'
        },
        {
            guidance: 'NAVTAC guiddance supplement',
            contractor: 'Plessey Group, Essex, Earth'
        }
    ]
      
    

    computers = {
        type: "Daystrom Duotronic IV with Multitronic M-9 Supplement",
        manufacturer: "Erisaffe-Zynn Space Systems, Sebaldhasta, Deneb V"
    }
        

    phasers = [
        {
            banks: 6,
            each: 2,
            type: 'RIM-15A independent twin mount',
            contractor: 'Agusta Ansadado, Inc. Fuzes, Venus'
        },
        {
            banks: 6,
            each: 1,
            type: 'RSM-20B single mount',
            contractor: 'Agusta Ansadado, Inc. Fuzes, Venus'
        }
    ]

    missiles = {
        tubes: 3,
        type: 'MK 70 Mod 2',
        contractor: 'Skat-Rar Weapon Systems, Ezuruk, Andor'
    }

    defense = {
        type: 'Merlin primary face field and deflector control system',
        contractor: 'Prentice-Schafer Inc, Marsport, Mars'
    }
    
    life_support = [
        {
            type: 'MC-3E artificial gravity generator',
            contractor: 'Cristobal SM/S, Manilla, Earth'
        },
        {
            type: 'Rastis radiation protection package',
            contractor:'Tidjikja/Atar Associated Inductries, Rastaibi, Regulus'
        },
        {
            type: 'Cerix waste regeneration system',
            contractor: 'Jullundur-Lahore Ltd, Bombay, Earth'
        }
    ]
}












// console.log(constellation_class[2])

let ship1 = new Constellation()




// ship1.navigation, ship1.computers, ship1.crew, ship1.velocity[1]
// ship1.specifications , ship1.phasers 

console.log(  )
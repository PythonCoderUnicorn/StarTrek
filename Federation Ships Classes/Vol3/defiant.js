

/*

DEFIANT - CLASS ESCORT

Few starships have experienced “growing pains” like the Defiant class. Developed as a response         Tactical: The Defiant class mounts a devastating weapons array up front - four Type XII pulse
to first contact with the Borg Collective, she goes against almost every tenet of Federation           phaser cannon and two Type X phaser arrays. She also has two Mk 90 photon torpedo
shipbuilding. Her gestation has been painful, with the vessel almost canceled outright on a            launchers. Such a phaser-heavy compliment was created based on the Borg’s resistance to
number of occasions. However, recent events have played in her favor, and it was decided to            photon torpedoes. In her new role as an escort, the ability to deliver sustained such intense
modify the vessel to make it a better fit with the modern fleet.                                       phaser power on target was an asset in the close-quarter battle tactics used by the Dominion.
Class: Derided by some as “the bastard child of the mating of a cruiser and a runabout”, the           Computer Systems: The Defiant class is fitted with the Daystrom Computer Systems M-15 found
Defiant is essentially an escort body with a cruiser’s powerplant and weapons systems. The ship        on most ships of the line.
is low and wide, presenting a very small silhouette to targeting sensors. The vessel mounts almost     Builders: Cosmadyne was the initial prime contractor, though they received design assistance
all her weapons forward, and is designed to engage targets from the front.                             from numerous other design bureaus in their attempts to get the ship to work. The original ship
Classification: The Defiant class has been classified as an escort.                                    was built at Earth Station McKinley, but final outfitting was performed at the Antares Yards in
Design: The Defiant and her sisters are incredibly spartan for Federation vessels. There is no         Bajor, so that facility is listed as the builder. The next four vessels were manufactured at ESM, with
dedicated medical staff, the small sickbay overseen by an Emergency Medical Hologram, but              an additional eight split between M’Yengh Yards on Cait and the Alfras Fleet Yards at Deneb V.
with a crew of only forty, this is not seen as a problem. The EMH is powered by its own power          The final two were built at Utopia Planitia, Mars.
source and the emitter array is isolated to the sickbay. On such a small vessel, the FSQ shield        Development and Construction History: After first contact with the Borg Collective, Starfleet
system allows the Defiant to take massive amounts of punishment. In addition, ablative hull armor      immediately began an intensive development program for a new series of ships to repel a
has been fitted to the ship to deflect disruptor accounts. Only the original Defiant mounted a         possible future Borg invasion. The program essentially boiled down to using a few massive
cloaking device, which was of Romulan origin.                                                          vessels, or a fleet of small, heavily armed and shielded, attack ships. The former concept
Engineering: The Valiant and her sisters mount a heavily de-tuned version of the LF-35 warp drive      became the Courageous and the latter the Defiant. Construction began in 2366 after a hastily
system fitted to the original Defiant. While still too powerful for such a small vessel, the changes   put-together design program. Simulations showed massive design flaws, and with the Borg
have greatly improved the ship’s handling characteristics. Top speed dropped to Warp 9.4, but          some 5,000LY away, the program was criticized by many in the MSC. With the invasion by the
she is far more efficient in the Warp 7-8 cruising range, allowing for a longer endurance.             Collective in 2367 and the defeat at Wolf 359, her critics were silenced and construction began

in earnest, with changes made in the yard to try and correct the deficiencies. The ship was
completed and began her shakedown tests in 2368. These trials were an absolute disaster. The
initial simulations did not do justice to the actual problems with her flight and structure dynamics.
The engineer’s quickly determined that the propulsion system was far too powerful for such a
small ship. Though she was designed for bursts of up to Warp 9.99, in actuality the ship’s structure
could barely handle Warp 9 without risk of coming apart. After these tests, the ASDB declared
the design a failure and mothballed the program pending a complete re-evaluation. Instead,
the Courageous class was given the go-ahead and the first vessel was started. With the coming
of the Dominion threat, plans were again floated to return the Defiant to the yards and finish her
out. It was felt that a large vessel would attract too much attention and the Defiant’s smaller
size would work. Most surprisingly, the Romulans approved of this plan, going as far as to offer a
cloaking device and Tactical Advisor for the vessel. The ship was returned to the yards in 2370
and the vessel formally entered service in 2372, assigned to Deep Space Nine. Since that time,
the Defiant class has proven herself time and time again in a variety of missions. Though the
original ship was flawed, work continued on refining the concept and making it more stable.
Continued simulation eventually resulted in new changes that resulted in a far more effective
ship and a prototype, the U.S.S. Valiant, was commissioned. The new vessel proved to be a far
better prospect than the original Defiant, but she was lost on a secret mission inside Dominion
space.
Conclusion: Though not effective against the Borg, the Defiant proved quite effective against
Dominion (Cardassian and Jem’Hadar) vessels. As the Dominion War heated up, a crash
construction program was authorized that saw nine vessels started in 2373, all of them entering
service in the final months of the war.
Nomenclature: The Sao Paulo (ES 75633) was renamed to Defiant by order of the Chief of Fleet
Operations to replace the original, lost in battle against the Breen at Chin’Toka. It kept the
original NCC, however.


* - Originally commissioned as U.S.S. Sao Paulo, it was renamed Defiant in 2375 by order of the Chief of Star Fleet Operations.
** - Originally procured as Hurricane, it was renamed Valiant in 2377 in honor of the original ship.

*/


class Defiant {



    specifications  = {
        displacement_mt: 355000,
        overall_length_m: 119.48,
        overall_draft_m: 21.07,
        overall_beam_m: 93.88
    }
        

    propulsion = [
        {
            info: "LF-35 Mod 1 energized-energized antimatter warp drive units",
            quantity: 2,
            contractor: 'Leeding Energies, Sydney, Earth', // 'Shuvinaaljis Warp Technologies, Vulcan' //'Leeding Energies, Sydney, Earth'
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
            warp: 8.0,
            detail: 'Maximum Cruising Speed'
        },
        {
             warp: 9.982,
             detail: "Maximum Attainable Velocity"
        }
    ]
        
    


    duration = "5 years, Standard"
    


    crew = {
        officers: 10,
        enlisted_crew: 30,
        passengers: 0, // 5000 max
        marines: 0, // max 5000
        flight_crew: 0,
        crew_total: 40
    }
       

    
    embarked_craft(number) {

        let ships = [
            'Peregrine Class Fighter', // 0
            'S-3 Sentry SWAC shuttle', // 1
            "Danube Class Runabout", // 2
            '9A Cargo Shuttle', // 3
            'Type 6/7 Personnel Shuttle',  // 4
            'Type 16 Shuttlepod', // 5
            'Peregrine Class Fighter', // 6
            'Type 10 Combat Drop Shuttles', // 7
            'Avenger Class Runabout', // 8
            'Aerowing Type Runabout' // 9
        ] 

        if (number === 0) {
     
            console.log( ships[1], ships[2], ships[3], ships[4], ships[5], ships[6])
        }
        // else
        // if(number === 1) {
        //     console.log( ships[2], ships[5]) 
        // }
        // else if (number === 2) {
        
        //     console.log( ships[5] )
        // }
        // else if(number === 4) {
          
        //     console.log( ships[4] )
        // }
        // // else if (number === 6) {
          
        //     console.log( ships[7] )
        // }
        // else if (number === 8) {
        //     console.log( ships[5] )
        // }
        // else if (number === 12) {
        //     console.log()
        // }
        // else if (number === 10) {
        //     console.log( ships[4], ships[3], ships[5])
        // }
        // else if (number === 20) {
        //     console.log( ships[6])
        // }
        // else if (number === 30) {
        //     console.log(ships[7])
        // }
        // else if (number === 48) {
        //     console.log(ships[0])
        // }
        else {
            console.log("Error. Enter integer < 1. Try again.")
        }
     
    }


    navigation = {
            guidance: 'RAV / ISHAK Mod 3 Warp Celestial Guidance',
            contractor: 'Tlixis Ramab RRB, Coridan III'
        }
        
    
      
    

    computers = [
        {
            type: ['M-15 Isolinear III with LCARS  '], // M-15 Isolinear III with LCARS   with LCARS   Isolinear III with LCARS  M-16 Bio-Neutral Gel Pack - isolinear III with LCARS
            manufacturer: "Daystrom Computer Systems, Lunaport Luna"
        },
        // {
        //     type: 'AEGIS MK 7 Mod 1 Fleet Fre Control System',
        //     manufacturer: 'RCA, New York, Earth'
        // }
    ]
    
        

    phasers = [
        {
            banks: 2,
            each: 1,
            type: 'Type X Collimated Phaser Array',
            contractor: 'HiBeam Energies, Earth'
        },
        {
            banks: 4,
            each: 1,
            type: 'Type XII Pulse Phaser Cannon', // Megaphaser
            contractor: 'HiBeam Energies, Earth'
        },
        // {
        //     banks: 1,
        //     each: 1,
        //     type: 'Type XIII Phaser Cannon',
        //     contractor: 'HiBeam Energies, Earth'
        // },
    ]
    

    missiles = [
        {
            tubes: 3,
            type: 'MK 75 Photon Torpedo Launchers',
            contractor: 'Loraxial, Andor' //'Skat-Rar Weapon Systems, Andor'  // 'Loraxial, Andor'
        },
        // {
        //     tubes: 4,
        //     type: 'MK 20 Photon Torpedo Launchers',
        //     contractor: "K'oriv Qo'nos" //'Loraxial, Andor'
        // },
    ]

    defense = [
        {    
            type: 'FSQ Primary Force Field',
            contractor: 'Charlottes Shields, Earth' // '' Sylvanesti Shields, Alkara XV
        },
        // {    
        //     type: 'FCE-2 Integrated Cloaking Device',
        //     contractor: 'Sylvanesti Shields, Alkara XV' // 'Charlottes Shields, Earth'
        // },

    ]
    
    life_support = [
        {
            type: 'MM6 Modular Gravity Unit', // 'NAG1 Modular Gravity Unit', // 'MM6 Modular Gravity Unit', // , // 'MM6 Modular Gravity Unit',
            contractor: 'Morris Magnatronics, Palyria, Mars' // 'New Amsterdam Gravitronics, New Amsterdam, Alpha III', // 'Morris Magnatronics, Palyria, Mars' // 
        },
        {
            type: 'AL4 Life Support System',
            contractor:'A Alakon Landiss, Divallax, Andor'
        },
     
    ]

}


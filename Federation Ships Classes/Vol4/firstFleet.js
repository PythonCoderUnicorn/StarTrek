
/*
    STARFLEET'S FIRST FLEET

*/

let first_fleet = [
    {
        location: 'Located in the southwest rimward area of the Beta Quadrant',
        patrol_area: ['Talos Star Group', "former T'Kon Empire"],
        function: 'Perform extensive mapping missions in the unexplored area, along with various starship surveyors.'
    },

    {
        fleet_ships_strength: { ships: 310, TacFleet: 145, Exploration: 108, Auxillary: 57 },
        fleet_commander: 'Admiral Suvadine, James',
        fleet_hq: 'Bennu Station',
        fleet_flagship: 'USS Trinculo, NCC-71867'
    },


    deployment = [
        {
            TaskForce: 'TaskForce 11',
            Commander: 'Fleet Admiral Suvadine, James',
            Flagship: 'Trinculo (CKE 71867)',
            Commanding_Officer: 'Captain Kethali, Sasha', 
            Home_Port: 'Bennu Station',
            Deployment_Area: 'Rimward Exploration'
        },
        {
            TaskForce: 'TaskForce 12',
            Commander: 'Rear Admiral Hermann, Mandi',
            Flagship: 'Rutledge (ES 74215)',
            Commanding_Officer: 'Rear Admiral Hermann, Mani',
            Home_Port: 'Station Nikola Tesla',
            Deployment_Area: 'Patrol'
        },
        {
            TaskForce: 'TaskForce 13',
            Commander: 'Commodore Selon', 
            Flagship:  'Ronald E McNair (CL 61829)', 
            Commanding_Officer: "Captain T'Spar",
            Home_Port: 'Station Lewis B Puller',
            Deployment_Area: 'Patrol'
        },
        {
            TaskForce: 'TaskForce 14',
            Commander: 'Rear Admiral Triola', 
            Flagship:  'Intrepid (CH 10521)', 
            Commanding_Officer: 'Captain Schneider, Robert',
            Home_Port: 'Station Nikola Tesla',
            Deployment_Area: 'Exploration'
        },
        {
            TaskForce: 'TaskForce 15',
            Commander: 'Vice Admiral Kwan, Michelle',
            Flagship:  'Yamaguchi (CH 26510)',
            Commanding_Officer: 'Captain Howell, Dwen', 
            Home_Port: 'Bennu Station',
            Deployment_Area: 'Rimward Exploration'
        },
        {
            TaskForce: 'TaskForce 16',
            Commander: 'Rear Admiral Vinson, Mark',
            Flagship:   'Arthur C Clarke (CS 63544)',
            Commanding_Officer: 'Rear Admiral Vinson, Mark',
            Home_Port: 'Station Lewis B Puller',
            Deployment_Area: 'Patrol'
        },
        
    ]
]



console.log(first_fleet[2])
// console.log(first_fleet[2][0].Commanding_Officer )


let class_ranges = [5, 10, 15, 20, 30, 50, 100]

const class_names = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX']

// console.log(class_names[3])

let x =0

if (x >= 0 && x < 5000) {
    console.log(` ship class is ${class_names[0]} and range is ${class_ranges[0]}`)
}
else if (x >= 5e3 && x < 15e3) {
    console.log(` ship class is ${class_names[1]} and range is ${class_ranges[1]}`)
}
else if (x >= 15e3 && x < 25e3) { 
    console.log(` ship class is ${class_names[2]} and range is ${class_ranges[1]}`)
}
else if (x >= 25e3 && x < 40e3) {
    console.log(` ship class is ${class_names[3]} and range is ${class_ranges[2]}`)
}
else if (x >= 40e3 && x < 60e3) {
    console.log(` ship class is ${class_names[4]} and range is ${class_ranges[3]}`)
}
else if (x >= 60e3 && x < 80e3) {
    console.log(` ship class is ${class_names[5]} and range is ${class_ranges[3]}`)
}
else if (x >= 80e3 && x < 100e3) {
    console.log(` ship class is ${class_names[6]} and range is ${class_ranges[3]}`)
}
else if (x >= 100e3 && x < 120e3) {
    console.log(` ship class is ${class_names[7]} and range is ${class_ranges[3]}`)
}
else if (x >= 120e3 && x < 140e3) {
    console.log(` ship class is ${class_names[8]} and range is ${class_ranges[3]}`)
}
else if (x >= 140e3 && x < 160e3) {
    console.log(` ship class is ${class_names[9]} and range is ${class_ranges[3]}`)   
}
else if (x >= 160e3 && x < 190e3) {
    console.log(` ship class is ${class_names[10]} and range is ${class_ranges[4]}`)
}
else if (x >= 190e3 && x < 220e3) {
    console.log(` ship class is ${class_names[11]} and range is ${class_ranges[4]}`)
}
else if (x >= 220e3 && x < 250e3) {
    console.log(` ship class is ${class_names[12]} and range is ${class_ranges[4]}`)
}
else if (x >= 250e3 && x < 300e3) {
    console.log(` ship class is ${class_names[13]} and range is ${class_ranges[5]}`)
}
else if (x >= 300e3 && x < 350e3) {
    console.log(` ship class is ${class_names[14]} and range is ${class_ranges[5]}`)
}
else if (x >= 350e3 && x < 400e3) {
    console.log(` ship class is ${class_names[15]} and range is ${class_ranges[5]}`)
}
else if (x >= 400e3 && x < 450e3) {
    console.log(` ship class is ${class_names[16]} and range is ${class_ranges[5]}`)
}
else if (x >= 450e3 && x < 500e3) {
    console.log(` ship class is ${class_names[17]} and range is ${class_ranges[5]}`)
}
else if (x >= 500e3 && x < 600e3) {
    console.log(` ship class is ${class_names[18]} and range is ${class_ranges[6]}`)   
}
else if (x >= 600e3 && x < 700e3) {
    console.log(` ship class is ${class_names[19]} and range is ${class_ranges[6]}`)
}
else {
    console.log('invalid ship mass, try again.')
}
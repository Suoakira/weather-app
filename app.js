const config = require("./config")
// const yargs = require('yargs')


// const geocode = require('./geocode/geocode')

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: "address",
//             describe: "Address to fetch weather for",
//             // tells yargs the arguments to always be a string
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv


//     console.log(geocode)
// geocode.geocodeAddress(argv.a, (errorMessage, result) => {
//     if (errorMessage) {
//         console.log(errorMessage)
//     } else {
//         console.log(JSON.stringify(result, undefined, 2))
//     }
// })

const request = require('request')

const lat = 43.3
const long = 54.4

return request({
    url: `https://api.darksky.net/forecast/${config.darkSKy}/${lat},${long}`,
    json: true
}, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log(body.currently.temperature)
        } else {
            console.log("Unable to fetch weather.")
        } 
    })





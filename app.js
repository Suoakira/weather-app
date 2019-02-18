const config = require("./config")
const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather =  require('./weather/weather')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "Address to fetch weather for",
            // tells yargs the arguments to always be a string
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

debugger
    console.log(geocode)
geocode.geocodeAddress(argv.a, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(result.address)
        weather.getWeather(result.latitude, result.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage)
            } else {
                console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`)
            }
        })
    }
})





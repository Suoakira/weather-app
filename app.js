const request = require("request")
const config = require("./config")
const yargs = require('yargs')

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

let addressUrl = encodeURIComponent(argv.a)

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${config.key}&location=${addressUrl}`,
    json: true
}, (error, response, body) => {
    // allows us to pretty print the object in the console
    // what to stringify, filter, indentations
    console.log(JSON.stringify(body, undefined, 2))

        console.log(body.results[0].locations[0].latLng.lat)
        console.log(body.results[0].locations[0].latLng.lng)
})





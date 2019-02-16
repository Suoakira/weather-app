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
     if (error) {
         console.log("Unable to connect to Google Servers")
     } else if (body.info.statuscode === 400) {
         console.log("Unable to find that Address")
     } else if (response.statusCode === 200){
        console.log(JSON.stringify(response, undefined, 2))

        console.log(body.results[0].locations[0].latLng.lat)
        console.log(body.results[0].locations[0].latLng.lng)
     }
})





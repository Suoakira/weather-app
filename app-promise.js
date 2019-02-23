const config = require("./config")

const yargs = require('yargs')
const axios = require('axios')

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

let addressUrl = encodeURIComponent(argv.address)
let geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=${config.key}&location=${addressUrl}`

axios.get(geocodeURL)
    .then((response) => {
        if (response.data.status === "ZERO_RESULTS") {
            throw new Error("Unable to find that address")
        }
        console.log(response.data)
    })
    .catch((error) => {
        if (error.code === 'ENOTFOUND') {
            console.log("Unable to connect to api servers")
        } else {
            console.log(error.message)
        }
    })
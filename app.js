const request = require("request")
const config = require("./config")

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${config.key}&location=1301%20lombard%20street%20philadelphia`,
    json: true
}, (error, response, body) => {
    // allows us to pretty print the object in the console
    // what to stringify, filter, indentations
    console.log(JSON.stringify(body, undefined, 2))

        console.log(body.results[0].locations[0].latLng.lat)

        console.log(body.results[0].locations[0].latLng.lng)
})





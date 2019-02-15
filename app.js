const request = require("request")
const config = require("./config")

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=${config.key}`,
    json: true
}, (error, response, body) => {
    console.log(body)
})

console.log(config)
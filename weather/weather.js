const request = require('request')
const config = require("../config")

const getWeather = (lat, long, callback) => {
    return request({
        url: `https://api.darksky.net/forecast/${config.darkSKy}/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback("Unable to fetch weather.")
        }
    })
}

module.exports = {
    getWeather
}
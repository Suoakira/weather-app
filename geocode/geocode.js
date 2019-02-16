const request = require('request')


const geocodeAddress = (address, callback) => {
    let addressUrl = encodeURIComponent(address)

    return request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${config.key}&location=${addressUrl}`,
        json: true
    }, (error, response, body) => {
        
        if (error) {
            callback("Unable to connect to Google Servers")
        } else if (body.info.statuscode === 400) {
            callback("Unable to find that Address")
        } else if (response.statusCode === 200) {
            callback(undefined, {
    
                address: address,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            })
            // console.log(JSON.stringify(body, undefined, 2))
        }
    })
}

module.exports = {
    geocodeAddress
}
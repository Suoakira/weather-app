const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // type of
            if (typeof(a) === 'number' && typeof(b) === 'number') {
                resolve(a + b)
            } else {
                reject('arguments must be numbers')
            }
        }, 1500)
    })
}

const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey it worked')
        // reject('Unable to fulfill promise')
    }, 2500)

})

somePromise
    .then(message => console.log(message), (errorMessage => console.log({error: errorMessage})))
    // .catch(message => console.log(message))

asyncAdd(5, "7")
    .then((resp) => {
        console.log("Result", resp)
        return asyncAdd(resp, 33)
    }).then((res) => {
        console.log("Should be 45", res)
    })
    .catch((error) => console.log(error))
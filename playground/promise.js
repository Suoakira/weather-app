
const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey it worked')
        reject('Unable to fulfill promise')
    }, 2500)

})

somePromise
    .then(message => console.log(message), (errorMessage => console.log({error: errorMessage})))
    // .catch(message => console.log(message))
console.log("Starting App")

// non blocking async
setTimeout(() => {
    console.log("Inside of Callback")
}, 2000)

setTimeout(() => {
    console.log("No Delay")
}, 0)

console.log("Finishing Up")
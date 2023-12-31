function logClock() {
    let date = new Date()
    console.log(` ${date.toLocaleTimeString("en-IN",{hour12:false})}-----${date.toLocaleTimeString("en-IN",{hour12:true})}`)
    setTimeout(logClock,1000)
}
logClock();
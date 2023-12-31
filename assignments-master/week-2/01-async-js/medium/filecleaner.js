const { log } = require('console')
const fs = require('fs')
fs.readFile("a.txt","utf-8",(err, data) => {
    if(err){
        console.log(err)
        return
    }
    const cleanedData = data.replace(/\s+/g," ")
    fs.writeFile("a.txt",cleanedData,(err) => {
        if(err) {
            console.log(err)
            return
        }
    })
})


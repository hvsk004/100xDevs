const fs = require('fs')
data = "hi there"
fs.writeFile("a.txt",data,(err) => {
    if(err) {
        console.log(err)
    }
})
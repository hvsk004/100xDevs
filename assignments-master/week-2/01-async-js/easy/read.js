const fs = require('fs')
fs.readFile("a.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
})
let a = 0;
for(let i = 0; i < 10000; i++) {
    a += i;
}
console.log(a);
fs=require('fs')
fs.writeFileSync('ile.txt','This is a data')
data=fs.readFileSync("file.txt", {encoding: "utf-8"})
console.log(data.toString())

const http=require('http')
const server =http.createServer((req,res)=>{
    res.end('{"pasta":"yummy"}')
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("listening to requesto on port 8000")
})
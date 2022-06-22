const http=require('http');
const port=process.env.port||8000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.end("Hi Sneha");
})

server.listen(port,()=>{
    console.log(`Server running at ${port}`)
})
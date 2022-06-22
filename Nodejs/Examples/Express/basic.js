const express=require('express');
const app=express();
// express()---> creates an express application
app.get('/',(req,res)=>{
    res.send(`<h1 style="text-align:center;color:blue">Welcome to Express! </h1><p style=" color:red">This is the first example.</p>`);
    // res.send("Welcome<br/> Express")
    // (use <br /> to break and create new line)
    console.dir(req.hostname);
    console.dir(req.protocol);
    console.dir(req.route);
// req.is('text');
// res.attachment('C:\Users\sneha.saravan\Desktop\ASPIRE\Nodejs\Examples\Express\logo.png');
// res.sendStatus(200)
// res.append('Warning', '199 Miscellaneous warning');  
// res.attachment('path/to/logo.png')

// res.cookie('name', 'Aryan', { domain: '.xyz.com', path: '/admin', secure: true });  



});
// server.address()
// 1. tls module -Transport Layer Security
// 2. in-built api of SOCKET class
// 3. get the bound address of the server(containing family name & port of the server)
const server=app.listen(8000,()=>{
    const host=server.address().address;
    const port=server.address().port;
    console.log('App listening at http://%s:%s',host,port);
})


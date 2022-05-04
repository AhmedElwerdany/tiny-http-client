const fs = require("fs")
const Http = require("./client.js")
// The port number and hostname of the server.
const port = 80;
const host = "xxx123.free.beeceptor.com";

( async () => {
    try {
        const file = fs.readFileSync('http.req' , 'utf-8')

        const rawRequest = new Http({ host, port });

        const client = await rawRequest.connect();

        rawRequest.request(file);
        
        client.on("data", (data) => {
          console.log("hi, some data", data.toString());
        });

    }catch(err) {
        console.table({err : err.message})
    }
    
})()

var http = require('http');
var fs = require('fs');
const PORT= process.env.PORT||5500;
var server=http.createServer(function (req, res) {
    if (req.url == "/") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(
        "<html><body bgcolor='LavenderBlush' text='Navy'style='font-family: Arial, Helvetica, sans-serif;'>"
      );
      res.write("<center><h1 style='margin-top:50px;'>Welcome to NODE JS Programming</h1></center>");
      res.write("<center><h3 style='margin-top:50px;margin-bottom:50px;'>Every browser has its own version of a JS engine, and node.</h2></center>");
     
      res.end(
        "<center><a  href='/index'>CYBRARY | For Individuals</a></center><br></body></html>"
      );
    }
    else if (req.url == "/index") {
        fs.readFile('./index.html',function (err,data){
          if(err)console.log(err);
          res.write(data);
          res.end();
        });
    }


});
server.listen(PORT,()=>{
        console.log('Server has started running on the  port.no: '+PORT);
});
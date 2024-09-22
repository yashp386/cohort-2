// creating and http server
// express 

const express= require("express"); //compulsory lines  

const app=express();                //compulsory lines

app.listen(3000);                   //compulsory lines

app.get("/", function(req,res){
    res.send("hi there");       
})

//basic http server code above
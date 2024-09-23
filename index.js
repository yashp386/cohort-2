// creating and http server
// express 

const express= require("express"); //compulsory lines  

const app=express();                //compulsory lines

app.listen(3001);                   //compulsory lines

function sum(n){                    //add query parameters
    let ans = 0;
    for(let i=1;i<=n;i++){
        ans = ans+i;
    }
    return ans;
}                  

app.get("/", function(req,res){
    const n=req.query.n   ;           // to catch the query parameters or to take input from user
    const ans=sum(n);
    res.send("hi there ");
           
})

//basic http server code above
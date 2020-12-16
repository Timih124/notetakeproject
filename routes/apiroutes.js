var db = require("../db/db.json")
var fs = require("fs")

function apiroutes(app){
   app.get("/api/notes",function(req, res){
       res.json(db)
   })

   app.post("/api/notes", function(req, res){
    db.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(db),function(){
        res.json(db)  
    })
   })

   app.delete("/api/notes:id", function(req, res){
       fs.readFile("./db/db.json", JSON.stringify(db), function (error){
           if (error)
           throw error;
        res.end(console.log("Successfully Deleted!")) 

       })

   });
}

module.exports=apiroutes
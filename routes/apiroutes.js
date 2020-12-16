var db = require("../db/db.json")
var fs = require("fs")


// creating api route to connect db.json
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

   // creating delete for app, if note is delted console will log succesfully deleted.

   app.delete("/api/notes:id", function(req, res){
       fs.readFile("./db/db.json", JSON.stringify(db), function (error){
           if (error)
           throw error;
        res.end(console.log("Successfully Deleted!")) 

       })

   });
}

module.exports=apiroutes
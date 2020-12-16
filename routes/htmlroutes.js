
// require path

var path = require("path")

// creating route for HTML
function htmlRoutes(app){
    app.get("/",function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })
}
module.exports=htmlRoutes
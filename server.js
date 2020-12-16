
// require express
var express = require("express")

var app = express();
// PORT FOR HEROKU, When run locally process.env.PORT is false
var PORT = process.env.PORT || 3001


app.use(express.urlencoded({extended:true}))
app.use(express.json())
// publc static database
app.use(express.static("public"))

// require apiRoutes
var apiRoutes = require("./routes/apiroutes")
apiRoutes(app);

// require HTML routes
var htmlRoutes = require ("./routes/htmlroutes")


// start htmlroute function in app
htmlRoutes(app);
// app listenign on local port to check functinality 
app.listen(PORT, function(){
    console.log("app is listening on PORT",PORT)
})

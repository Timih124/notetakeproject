var express = require("express")

var app = express();
// PORT FOR HEROKU, When run locally process.env.PORT is false
var PORT = process.env.PORT || 3001


app.use(express.urlencoded({extended:true}))
app.use(express.json())
// publc
app.use(express.static("public"))

var apiRoutes = require("./routes/apiroutes")
apiRoutes(app);



var htmlRoutes = require ("./routes/htmlroutes")

htmlRoutes(app);

app.listen(PORT, function(){
    console.log("app is listening on PORT",PORT)
})

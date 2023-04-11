const express = require ("express")
const mario = require("./models/marioCharacters")
const app = express()
const PORT = 4000

//====Configuration
//these 2 lines of code are needed to set everything up
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//======Middleware
//Setting a middleware to run in our app
app.use((req, res, next)=>{
    console.log(req.url)
    next()
    })




//parses the data from the request
app.use(express.urlencoded({extended: false}))



//shows all the Mario characters
app.get('/', (req, res)=>{
    res.send(mario)
})






/**
 * Index: Route (return a list of mario characters)
 */
app.get('/mario', (req, res) => {
    res.render('Index', {mario: mario})
});




//show route shows each individual Mario character, their color and if they use power ups
app.get('/mario/:indexOfMarioArray', (req, res) => {
    res.render('show',{marioCharacter: mario[req.params.indexOfMarioArray]});
});


//if none of the routes matches the request show 404 page. Has to be last on page before listening
app.get('*', (req, res)=>{
    res.redirect('404')
})


// Tell the app to listen on port 3000
app.listen(4000, function() {
    console.log(`Listening on port ${PORT}`);
   });

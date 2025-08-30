const express = require('express');// Adding body-parser middleware
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


app.use('/public', express.static(process.cwd() + '/public'));
app.use('/pictures', express.static(process.cwd() + '/pictures'));
app.use('/logo', express.static(process.cwd() + '/logo'));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Connection', 'keep-alive');
    next();
});



app.set('view engine', 'pug');
app.set('views', './views/pug');






app.get('/', async(req, res)=>{
    try {

        res.sendFile(process.cwd() + '/views/index.html');

    } catch (error) {
        console.error('Error fetching course:', error);
        res.redirect('/');
    }
})






//app.use(favicon(__dirname + '/public/favicon.ico')); This server the logo


app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
});

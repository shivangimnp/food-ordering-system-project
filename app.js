const express = require('express')
const app = express();
const mysql=require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'food_ordering_system',


})
db.connect((error)=>{
    if(error){console.log(error)}
    else{console.log('database connected...')}
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/public', express.static('public'))
app.get('/', (req, res)=>{
   res.sendFile(__dirname+'/homepage.html');
})

app.get('/maincourse', (req, res)=>{
    res.sendFile(__dirname+'/maincourse.html')
})
app.get('/mainmenu',(req,res)=>{
    res.sendFile(__dirname+'/mainmenu.html')
})
app.get('/Booking',(req,res)=>{
    res.sendFile(__dirname+'/reservation.html')
})
app.get('/starbucks',(req,res)=>{
    res.sendFile(__dirname+'/starbucks.html')
})
app.get('/starters',(req,res)=>{
    res.sendFile(__dirname+'/starterscode.html')
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html')
})
app.get('/desert',(req,res)=>{
    res.sendFile(__dirname+'/desert.html')
})
app.get('/drinks',(req,res)=>{
    res.sendFile(__dirname+'/drinkspage.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})

app.post('/reservation', (req, res)=>{
    console.log(req.body)
    res.send("<h1>Form Submitted...</h1>")
    var sql= 'INSERT INTO reservation VALUES(?)';
    var values = [null, `${req.body.days}`, `${req.body.hours}`, `${req.body.fullName}`, `${req.body.phone}`, `${req.body.people}`];
    db.query(sql, [values], (error, result)=>{
        if(error){
            throw error;
        }
        else{
            console.log('Entry Successful')
        }
    })
})

app.listen(3001, ()=>{
    console.log('server running...')
})
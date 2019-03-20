const path=require('path')
const express=require('express');
const hbs=require('hbs')
const geocode=require('./utils/utils.js')
const forecast=require('./utils/forecast.js')

const app=express();
//app.com
const h=path.join(__dirname,'public');
console.log(h)
const m=path.join(__dirname,'/templates/views');
const k=path.join(__dirname,'/templates/partials');


app.set('views',m)
hbs.registerPartials(k);
app.set('view engine','hbs')
app.use(express.static(h));
app.get('',(req,res)=>{
    res.render('index',{
        name:'Weather',age:'My weather',
        para:'created by Mukul sharma'
    });
})
app.get('/about',(req,res)=>{
    res.render('about',{
        name:'about me',age:'google',
        para:'created by Mukul sharma'
    });
})
app.get('/help',(req,res)=>{
    res.render('help',{
        name:'wanna help',age:'google assistance',
        para:'created by Mukul sharma'
    });
})

app.get('/products',(req,res)=>{
    if(!req.query.address){
        return res.send('please provide address?=any')
    }
    res.send({
       season:{}
        
    })
    console.log(req.query.address)
})



//app.com/weather
app.get('/weather',(req,res)=>{
    console.log(req.query.address);
    if(!req.query.address){
        return res.send('please provide address')
    }
    geocode(req.query.address,((error,{a,b,c}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(b,c,(error,{temp,prcp})=>{
            if(error){
                return res.send('it is error')
            }
            res.send({
                temp,prcp,a,
                address:req.query.address

            })
        })
        
    }))
    
//     res.send({
//         forecast:'it is raining',
//         location:'mit',
//         address:req.query.address
// })})
})
app.get(('/help*'),(req,res)=>{
    res.render('new',{
        error:'404 page not found'
    })
})
app.get(('*'),(req,res)=>{
    res.render('new',{
        error:'404 page not found'
    })})
    

app.listen(3000)
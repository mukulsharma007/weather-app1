const request=require('request');
const forecast=(lat,lng,callback)=>{
const url=`https://api.darksky.net/forecast/2866dac51dfe7001a55fc9af715d6733/${lat},${lng}`;
request({url,json:true},(error,{body})=>{
    if(error){
        callback("check your internet connection")
    }
    else if(body.code=='400'){
        callback('unable to fetch api');
    }
    else{
        callback(undefined,{temp:body.currently.temperature,prcp:body.currently.precipProbability});

    }
    
})}
module.exports=forecast;
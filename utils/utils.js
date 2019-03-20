const request=require('request');
const geocode=(address,callback)=>{
const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoibXVrdWwwMDciLCJhIjoiY2p0NnRkc2YzMGhkdTQ0bzg0emZmcHg4aSJ9.jCl1MFqC2uM2e5CNlyKcHw&limit=1`;

request({url:url,json:true},(error,{body})=>{
    if(error){
        callback('unable to connect');

    }
    
    else if(body.features.length===0){
        callback('check your input might have misspelled',undefined)
    }
    else{
    
    callback(undefined,{a:body.features[0].place_name,b:body.features[0].center[1],c:body.features[0].center[0]});
}})}
module.exports=geocode;
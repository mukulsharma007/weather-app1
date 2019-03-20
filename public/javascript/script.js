console.log("hello file is attached")
// fetch('http://localhost:3000/weather?address=boston').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data)
//         }
//         else{
//             console.log(data.a);
//             console.log(data.forecastdata)
//         }
        
        
//     })
// })
// const a=document.querySelector('form');
// const b=document.querySelector('input');
// a.addEventListener('submit',(e)=>{
    
//     e.preventDefault()
//     const k=b.value;
//     fetch(`/weather?address=${k}`).then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             res.send(data)
//         }
//         else{
//             console.log(data.a);
//             console.log(data.temp)
//             console.log(data.prcp)
//         }
        
        
//     })
// })
     
// })











const weatherform=document.querySelector('form')

const search=document.querySelector('input')
const p1=document.getElementById('p1')
const p2=document.getElementById('p2')
const p3=document.getElementById('p3')
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const a=search.value;
    p1.textContent="Loading message"
    fetch(`/weather?address=${a}`).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                p1.textContent=data.error
            }
            else{
                p1.textContent=data.a;
                p2.textContent='it is currently'+ ' '+data.temp+'celcius';
                p3.textContent='rain probablity is '+data.prcp;
            }
        })
    })
    
})
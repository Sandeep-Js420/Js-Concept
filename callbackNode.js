/**
 * @author:Sandeep Kumar jena
 * topic:JavaScript Callback
 * When a function pass into a another function as a argument  then we can call that passed function as a callback.
 * Below Example shows the some callback example .
 * And some callback abstraction. 
 */
setTimeout(()=>{
 console.log(' callback function !! Example')
},2000)

let carArray=['KIA Sonet','Honda WRV','Audi R8','alto lsi'];
 let shortName=carArray.map((car)=>{
  return  car.substring(4);

})

console.log(shortName);

//Callback abstraction







const geocode=function (address,callback){
    setTimeout(()=>{
      
        let data ={
            langitude:44.23,
            latitude:65.45
        }
       // return data
       callback(data)
    },3*1000)
}

// console.log(
//     geocode('bhubaneswar',(data)=>{
//     console.log(data)
//     }))

geocode('bhubaneswar',(data)=>{
       console.log(data)
        })

//Another Example of Callback abstraction
const sum = function(a,b,callback){
    setTimeout(()=>{
         
        let sum=a+b;
        
        return callback(sum);
    },4*1000)
}


sum(10,44, (sum)=>{
    console.log(sum);
})








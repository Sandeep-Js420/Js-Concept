setTimeout(()=>{
 console.log(' callback function !! Example')
},2000)

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


const sum = function(a,b,callback){
    setTimeout(()=>{
         
        let sum=a+b;
        
        return callback(sum);
    },4*1000)
}


sum(10,44, (sum)=>{
    console.log(sum);
})








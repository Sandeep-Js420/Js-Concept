//object shorthand
const name='sandeep';
const Uage =25;
const location='Bhubneswar';


const user={
    name:name,
    UserAge:Uage,
    location:location
}
console.log(user);

//shortHand
const user1={
    name,
    // age, error: age is not defined 
    age:Uage,
    location
}
console.log(user1);



//Object Destuctering
//The  Whole goal of the object destructering is Extract properties and value  of object in to individual variable 
const product ={
    label:"Iphone",
    price:60000,
    rating:4.5,
    stock:30

}

const {label,price,rating,review='dgood Product buy it '}=product
console.log(label)//iphone
console.log(price)//60000
console.log(rating)//4.5
console.log(review);//undefined 
//after initialisation with default value that value will display.


//in function apply destructuring

// const transation=(type,myProduct)=>{
//     console.log(type,myProduct);
// }


const transation=(type, {label,price,stock})=>{
    console.log(type, label,price,stock);
}


transation('order',product);

//Now Apply this concept on Weather-app
//Goal use both destructuring and property short hand property in weather app
//use destructuring on app.js,Forecast.js,geocode.js
//use property shorthand in Forecast.js,and geocode.js
//test your work.

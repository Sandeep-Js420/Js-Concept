const fs=require('fs');
const book={
    title:'The subtle art of dont give a fuck',
    auther:"Mark manson"
}
   
/*********************************************************
 * JSON FILE CONTENT PLAYGROUND
 *  */ 



// //convert object to jsonc
// const bookJSON=JSON.stringify(book);
// // console.log(bookJSON);

// //convert json to object 
// const bookObjFromJson=JSON.parse(bookJSON);
// console.log(bookObjFromJson.auther); 
// fs.writeFileSync('1-json.json',bookJSON);

// const bufferFromJson=fs.readFileSync('1-json.json');
// const readJson=bufferFromJson.toString();
// //console.log(bufferFromJson);//it wiil give the o/p in buffer format like bit and byte /
// const dataObject=JSON.parse(readJson);
// console.log(dataObject.title);

//  Section-4   challenge -3
// lode and parse JSON data 
// change the  data name and age propperty using your info 
// then stringify THE object and overwrite the original data 
// Test this on that json file.  

const dataBuffer=fs.readFileSync('1-json.json');
const dataFromBufferToString=dataBuffer.toString();
//console.log(dataFromBufferToString);
const dataFromJsonToObject=JSON.parse(dataFromBufferToString);
console.log(dataFromJsonToObject.name);
dataFromJsonToObject.name='sandeep';
dataFromJsonToObject.age=25;

const userJson=JSON.stringify(dataFromJsonToObject);

//const dataChangedJson=JSON.stringify(dataChanged);
fs.writeFileSync('1-json.json',userJson);

    
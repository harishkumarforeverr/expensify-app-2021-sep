// const Person={
//     name:"harish809",
//     age:271,
//     loc : {
//         city : "india",
//         temp:22
//     }
// } 

// const {name:firstName="Anonymous",age}=Person;

// console.log(`${firstName} is ${age}`);

// const {city,temp:tempature}=Person.loc;
// if(city &&  tempature){
//     console.log(`in ${city} tempature is : ${tempature}`);
// }

// const book={
//     title:"react",
//     author:"harish",
//     publisher:{
//         // name:"amozan"
//     }
// }
// const {name:publisherName="self publisher"} = book.publisher;
// console.log(publisherName)


// const arr=[]; //["thanda","navipet","Nzb","hyd"];

// const [one,two="hi mama",three]=arr;

// console.log(one,two,three);


const coffee=["black","2"]//,"4","6"];

const [one,,third="43"]=coffee;
console.log(one,third);
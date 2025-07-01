// let arr = ['flash','batman','superman','hulk']
// for (const val of arr) {
//     console.log(`value of superheros is ${val}`)
//     console.log(val)
    
// }
// const  greeting ="Hello world"
// for (const greet of greeting) {
//     if(greet ==" "){
//         continue
//     }
//     console.log(`val at each character in the string is ${greet}`)
// }
// const  greeting ="Hello world"
// for (const greet of greeting) {
//     if(greet ==" "){
//         break
//     }
//     console.log(`val at each character in the string is ${greet}`)
// }

// const map=new Map()
// map.set('IN','india')
// map.set('USA','UNITED STATES OF AMERICA')
// map.set('FR','FRANCE')
// map.set('FR','FRANCE')

// // console.log(`${map}`)//ERROR

// for (const [key,value] of map) {
//     console.log(`${key} :- ${value}`)
// }

// const myObj={
//     game1:"NFS",
//     game2:'pubji',
//     game3:'freefire'
// }
// for (const key in myObj) {
//     // console.log(`value for ${key} is ${myObj[key]}`)
//     // console.log(key , myObj[key])
// }

// const arr =['js','cpp','py','java']
// for (const key in arr) {
//  console.log(key)
// }
//print the indices:0 1 2 3 4

// const map=new Map()
// map.set('IN','india')
// map.set('USA','UNITED STATES OF AMERICA')
// map.set('FR','FRANCE')
// map.set('FR','FRANCE')

// for (const key in map) {
//     console.log(key)
// }

// for in lloop does not works on map => is not itteratable


// FOR EACH
// const coding=["javascript","java","cpp","c"]
// coding.forEach(function (val){
//     console.log(val)
// })

// const coding=["javascript","java","cpp","c"]
// // coding.forEach( (item) =>console.log(item))
// coding.forEach( (item,index,arr) => {
//      return console.log(item, index,arr)
// } )

// const coding=["javascript","java","cpp","c"]
// function mycode(item){
//     console.log(item)
// }
// coding.forEach(mycode)

// const obj=[
//     {
//         companyName:"accenture",
//         email:"acc121c@gmail.com"
//     },
//     {
//         companyName:"amazon",
//         email:"amazon121c@gmail.com"
//     },
//     {
//         companyName:"blinkit",
//         email:"blinkit121c@gmail.com"
//     }
// ]
// obj.forEach((item)=>{
//     return console.log(item.companyName)
// })

// const arr=[1,2,3,4,5]
//     arr.forEach((item)=> {
//     console.log(item)
// })

// const add = (item1)=> {
//     return console.log(item1) //return console=> prints  underined
// }
// console.log(add(1))
// output 1
//        undefined

// const nums=[1,2,3,4,5,6,7,8,9,10]

// const value = nums.forEach((item)=> {
//     console.log(item)// wil prints all the values 1 to 10
//     return item
// })
// console.log(value)
// note forEach does not return any value 

//  filter :

// const values = nums.filter((items)=> items >2)
// const values = nums.filter((items)=>{ 
//     return items >2 // implicit return
// })
// console.log(values)

// const mynums=[]
// nums.forEach((items) =>{
//     if(items > 4){
//         mynums.push(items)
//     }
// })
// console.log(mynums)

// data
const books = [
  { title: "Book 1", publish: "1990", genre: "history" },
  { title: "Book 2", publish: "1991", genre: "fiction" },
  { title: "Book 3", publish: "1992", genre: "science" },
  { title: "Book 4", publish: "1993", genre: "fiction" },
  { title: "Book 5", publish: "1994", genre: "history" },
  { title: "Book 6", publish: "1995", genre: "technology" },
  { title: "Book 7", publish: "1995", genre: "history" },
  { title: "Book 8", publish: "1996", genre: "thriller" },
  { title: "Book 9", publish: "1997", genre: "mystery" },
  { title: "Book 10", publish: "1998", genre: "fiction" },
  { title: "Book 11", publish: "1999", genre: "science" },
  { title: "Book 12", publish: "2000", genre: "history" }
];

// let myBooks = books.filter((bk) => bk.genre == "history")
//   myBooks = books.filter((bk) => bk.publish>= "1994")
// console.log(myBooks)

// const myBooks=books.filter((bk)=>{
//     return bk.genre=="history" && bk.publish>1994
// })
// console.log(myBooks)
// maps:

const nums=[1,2,3,4,5,6,7,8,9]
// const mynums=nums.map((item)=>item *10)
// console.log(mynums)

// chaining:

// const mynums=nums.map((item)=>
//   item *10)
// .map((item)=>item+1)
// .filter((item)=> item >33)
// console.log(mynums)


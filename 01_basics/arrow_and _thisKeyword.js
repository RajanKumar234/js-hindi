const user={
    userName:"rajan",
    price:999,
    welcomeMessage :function(){
        console.log(` ${userName} , welcome to the website`)
        // console.log(this)
    }
}
// console.log(user.price)
// user.welcomeMessage()
// user.userName="Rawan"
// user.welcomeMessage()

// console.log(this)

// function chai(){
   
//     const userName ="Rajan"
//     console.log(this)
// }
// chai()

// function chai(){
//     // const userName ="Rajan"
//     console.log(this.userName)
// }
// chai()

// const chai = function(){
//     let username = "pappu"
//     console.log(this.username)
// }
// chai()

// const chai = () =>{
   
//     console.log(this)
// }
// chai()

// const addTwoNum=(num1,num2)=>{return num1+num2}
// console.log(addTwoNum(1,2))
// const addTwoNum=(num1,num2)=> num1+num2
// console.log(addTwoNum(1,2))
// const addTwoNum=(num1,num2)=> (num1+num2)
// console.log(addTwoNum(1,2))

const number = (n,p) =>({username:"hitesh"})
console.log(number(1,2))
// const arr=[1,2,3,4]
// arr.forEach()
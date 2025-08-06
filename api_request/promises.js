// // fetch("https://something.com").then().catch().finally()
// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is completed")
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log('promise consumed')
// })

// new Promise(function(resolve,reject){
//     console.log('Async2')
//     resolve()
// },1000).then(function(){
//     console.log('Async2 task is consumed')
// })

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve({username:'chai',email:'chai@example.com'})
    })
},1000)
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false;
        if(!error){
            resolve({username:"Rajan",passward:"1223"})
        }else{
            reject('ERROR;something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((myusername)=>{
    console.log(myusername)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log('The promise is finally resolved or rejected'))

const promiseFive =new Promise(function(resolve,reject){
      setTimeout(function(){
        let error =true;
        if(!error){
            resolve({username:"js",passward:"1223"})
        }else{
            reject('ERROR;js is not consumed')
        }
    },1000)
})
async function consumedPromiseFive(){
    try {
        const response = await promiseFive
    console.log(response)   
    } catch (error) {
        console.log(error)
    }
}
consumedPromiseFive()

// async function getAllUsers(){
//     try {
//             const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =await response.json()
//     console.log(data)
        
//     } catch (error) {
//         console.log('E:',error)
//     }
// }
// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// }).then((data)=>console.log(data))
// .catch((error)=>console.log(error))


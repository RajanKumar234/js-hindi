// function createUser(usernme,score){
//     this.score=score
// }
// createUser.prototype.increament = function(){
//     score++;
// }
// createUser.prototype.printMe =function(){
//     console.log(`score is${this.score}`)
// }
// const chai =new createUser("chai", 25)
// chai.printMe()

// somr more about proto 
// let myName = "Rajan";

// let myHeroes = ['spiderman', "superman", 'thor'];

// let heroPower = {
//     thor: "hammer",
//     superman: "sling",

//     getSpiderPower: function() {
//         console.log(`spidy power is ${this.superman}`);
//     }
// };

// Object.prototype.Rajan = function() {
//     console.log('this is Rajan');
// };
// heroPower.Rajan()
// heroPower.getSpiderPower();  // spidy power is sling

// Array.prototype.heyRajan= function(){
//     console.log('Rajan say hello')
// }
// myHeroes.heyRajan()
// heroPower.heyRajan()// invalied as heyRajan function is only for array

const user ={
    name:'chai',
    email :'chai@google.com'
}

  const Teacher ={
    makeVedios:true,

  } 
  const TeachingSupport={
    isAvailable:false
  }    
  const TASupport={
    makeAssignment:'jsAssignment',
    fullTime:true,
    __Proto__:TeachingSupport
  }
  Teacher.__Proto__=user
//   MODERN SYNTX 
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUser ="chaiaurcoode     ";
console.log(anotherUser)

String.prototype.trueLength=function(){
  console.log(`true length is ${this.trim().length}`)
}
anotherUser.trueLength()
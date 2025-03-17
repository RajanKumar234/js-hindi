let myDate = new Date();
// console.log(myDate.toString());       // Prints full date & time
// console.log(myDate.toDateString());   // Prints date in a readable format
// console.log(myDate.toLocaleString()); // Prints date & time in local format
// console.log(typeof my)

// let myCreatedDate = new Date(2024 ,0, 23,5,3)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate=new Date();
// console.log(newDate.getMonth() +1)
// console.log(newDate.getDay())
// console.log(`${newDate.getDate()} and the time is `);

myDate.toLocaleString('default',{
    weekday :"long"
})


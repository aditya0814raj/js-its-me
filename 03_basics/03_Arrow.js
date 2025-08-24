const user={
    username: "hitesh",
    price : 999,

    welcomeMessage: function(){
         console.log(`${this.username}, welcome to website`);    //  here this refer to current context
         console.log(this);
    }
}

//user.welcomeMessage()
//user.username="Sam"
//user.welcomeMessage()
//console.log(this);
/*
function chai (){
     username: "hitesh",
   console.log(this);                  //here this.username gives undefined as it doesnt work under function but it works under object.
}
chai()*/
/*
const chai = function (){
     username: "hitesh",                  // here this prints a lot of data but in arrow function given below it prints {}, means this prints different in normal function and arrow function
   console.log(this);                  
}
chai()*/
/*
const chai = () => {
     username: "hitesh",
   console.log(this);                  
}
chai()*/

/*const addTwo = (num1,num2) =>{
    return num1+num2;
}*/
                 /////               OR              ////////
//const addTwo = (num1,num2) => num1+num2;
                 /////               OR              ////////
//const addTwo = (num1,num2) => (num1+num2);      // we can use small bracket if we are not using curley bracket {} but if we r going to use {} then we have to mention return also
const addTwo = (num1,num2) => ({username:"hitesh"})
console.log(addTwo(3,4))  
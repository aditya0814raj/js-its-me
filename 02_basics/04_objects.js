//const tinderUser = new Object()      // singleton object   
const tinderUser = {}                 //non-singleton object    but both will give same o/p i.e {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

//multiple nesting of objects  


const regularUser = {
    email: "some@gmail.com",
    fullname :{
        userfullname :{                                
            firstname:"Aditya",
            lastname:"Raj"
        }
    }

}
//console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3= {...obj1, ...obj2, ...obj4}
//console.log(obj3)

const users = [
    {
        id:1,
        email: "h@gmial.com"
    },
    {
        id:1,
        email: "h@gmial.com"
    },
    {
        id:1,
        email: "h@gmial.com"
    },
]
 
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//go to console on google and 'const obj1 = {1:"a", 2: "b"}'  past it. then enter and again type 'obj1' then enter and then access all properties
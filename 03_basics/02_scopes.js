/////////.........................GLOBAL SCOPE AND BLOCK SCOPE..................////////////////////////

//let a=10
//const b=20                   //     these three are here  under global scope
//var c=30

if(true){
   let a=10
   const b=20                   //          these three are under block scope but var doesnt follow block scope and when we print var outside the loop it gets printed.thts why we avoid to use var.
    var c=30

}
//console.log(a);
//console.log(b);
console.log(c);

function one (){
    const username = "hitesh"
    function two (){
         const website = "youtube"
         console.log(username)
    }
    //console.log(website)
    two()
    
}

one()


// ++++++++++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++++++++++
addone(5)
function addone(num){                    // here we can call before declaration
    return num+1
}


const addtwo = function (num){                 // here we can,t call it before declaration
    return num+2                           // this way of function declaration is called expression.
    
}
addtwo(5)
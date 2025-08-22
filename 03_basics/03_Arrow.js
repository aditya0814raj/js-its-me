const user={
    username: "hitesh",
    price : 999,

    welcomeMessage: function(){
         console.log(`${this.username}, welcome to website`);    //  here this refer to current context
         console.log(this);
    }
}

user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()
const user ={
    name : "chacha",
    price : 999,

    welcomeMessage : function () {
        console.log(`Welcome to the new user ${this.name} this is price ${this.price}`);
    }
}
user.welcomeMessage()

const tinderUser = {}
tinderUser.name = 'Mohan' 
tinderUser.age = 22
tinderUser.isLoggedIn = false

const regularUser = {
    email : "Mohan@gmail.com",
    fullname : {
        FirstName : "Mohan",
        LastName : "kumar"
    }
}
console.log(regularUser.fullname?.userfullname.firstname);
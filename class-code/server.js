console.log('Test')

const colors = require('colors')
const validator = require('validator')


const express = require('express') // imports expres for us to use

const app = express() //creates an express application instance

// if i get a request on /homepage
// send back an h1 containing "Welcome to my Homepage"


// 2 arguments of app.get()
// 1. route /something
// 2. the function that runs if the request comes
app.get('/',function(request,response){
    console.log('Homepage Route')
    response.sendFile(__dirname + '/homepage.html' )
})

console.log(__dirname)

app.get('/donate',(req,res)=>{

    res.send('<h1> Please donate </h1>')
})

app.listen(3000,()=>{
    console.log('App is running on port 3000')
}) // app will be waiting for requests on port 3000

// start node application

// 1. npm init -y



// to use a package

// 1. npm install package-name

// 2. const packageName = require('package-name')

console.log(colors.rainbow('Testing colors package'))



let resultOfValidation = validator.isEmail('omar@gmail.com')

console.log(resultOfValidation)


if(resultOfValidation === true){
    // valid email
    console.log(colors.green('yes this is an email'))
}
else{
    // not email
    console.log(colors.red('no this is not an email'))
}







// exercise 2:
// Create a /about route
// when we get this request it should send back a <p> element with 1 scentence describing you


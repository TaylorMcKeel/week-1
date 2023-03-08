//Problem 1
true
false
true
true
true
false
true


//Problem 2

let //locally scoped and can be reassigned
const //localled scoped and cant be reassigned
var //globally scoped and can be reassigned



//Problem 3

//first class function

const firstClass = ()=>{
  console.log('this anonomyous function is first class')
}
//higher order function

const higherOrder = (anotherFunc) =>{
  anotherFunc()
}

//callback function

array.reduce((acc,curr,idx)=>{
  console.log('this is a callback function inside of reduce')
},'')



//Problem 4

a- 'hi'

b- 'bye'

c- //throws error variable see not yet defined because of scope


//problem 5

for(let i=0;i<someArray.length;i++{
  console.log(someArrya[i])
})

for(item of someArray){
  console.log(item)
}


//problem 6
NM
NM 
NM 
NM 
NM 
M 
NM 
NM 
NM 
NM 
NM 
M 
M 
M 
M 
M 
NM 

//Problem 7

Object.assign(someObject, {name: 'John Doe'})
someObject.age = 22
someObject['address'] = '123 test address'
Object.keys(someObject)
Object.values(someObject)
for(key in someObject){
  console.log(someObject.key)
}


//problem 8

for(obj of numbers){
  console.log(obj.num)
}


//problem 9

const newSet = new Set()
newSet.add('john doe')
newSet.has('john doe')
newSet.delete('john doe')

//problem 10

const newMap = new Map()
newMap.set('name', 'john doe')
newMap.has('john doe')
newMap.delete('john doe')

//problem 11

// synchronous programming is when code runs in a line one statement after another. Async programming is when code will continue to run even if one statement takes longer to complete, allowing the code to run in parallel.

//Problem 12

// 
//Problem 13

// a promise is when you make a call to an API and it promises to return with some value. The intitial value of all promises is pending. After the API call is complete the promise can either be fullfilled or rejected

//Problem 14

//async await is a more elegant version of then/catch. You place async as a prefix on any function making an api request to a server. then you place await in front of the fetch and assign it to a variable. it will wait  until the api returns rejected or fullfilled before moving on.
// let fing = " hello_my_name_is_keshav_and_i_am_a_software_engineer";
// console.log(fing);
// console.log(fing.split("_"))
// console.log(fing.slice(0, 5))
// console.log(fing.replace("hello", "hi"))
// console.log(fing.toUpperCase())
// console.log(fing.toLowerCase())
// console.log(fing.trim())
// console.log(fing.length)
// console.log(fing.charAt(0))

// let min=10 
// let max=50

// // console.log(Math.floor(Math.random()*10))
// console.log(Math.round(Math.random()*(max-min + 1 )+ min))





// let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.getDate())
// console.log(mydate.getDay())
// console.log(mydate.toJSON())
// console.log(mydate.toISOString())
// console.log (typeof mydate)
// console.log(mydate.getTime())




// let ar = [1, 2, 3, 4, 5]
// console.log(ar.splice(0, 3))
// console.log(ar)
// let er =[1, 2, 3, 4, 5]
// console.log(er.slice(0, 3))
// console.log(er)



// let ar = [1, 2, 3, 4, 5]
// ar.push(6)
// console.log(ar)
// console.log(ar.pop())
// console.log(ar)

// console.log(ar.shift())
// console.log(ar)
// console.log(ar.unshift(68))
// console.log(ar)





// let syn = Symbol("king")

// let ob = {
//     [syn]: "keshav",
//     name: "keshav",
//     age: 22,
//     city: "delhi",
//     country: "india",
//     hobbies: ["cricket", "football", "coding"],
//     isMarried: false,
//     greet: function () {
//         console.log("hello my name is keshav")
//     }
// }



// let obh = {a : 1, b: 2, c: 3, d: 4, e: 5}
// let onk = {a :41, b: 45, c: 43, d: 9, e: 7}
// //  console.log(obh == onk)
// const obhj = {...obh, ...onk};
// console.log(obhj)



// let cos ={    name: "keshav",
//     age: 22,
//     city: "delhi",
//     country: "india"
// }

// function fun(coss){
//     const king = (`hello my name is ${coss.name} and i am ${coss.age} years old and i live in ${coss.city} and i am from ${coss.country}`)
// return king
// }


// console.log(fun(cos))

// ++++++++++++++++++++++++++++++++++++++++++++ funtion +++++++++++++++++++++++++++++++++++++++++++++

// let fun = function(){
//     let username = "keshav"
//     console.log(this)
//  }
// fun()  
 // output  : window  // in non strict mode this keyword points to the global object which is window in browser and global in nodejs

// let fun =()=> {
//     let username = "keshav"
//     console.log(this)
//  }
// fun()
  // output  : {}  // arrow function does not have its own this keyword, it takes the this keyword from the parent scope

// let cars = [" 1", " 2", " 3", " 4", " 5"]
// for (let car of cars) {
//     console.log(car)
// }

// let books ={
//   book1: "java",
//   book2: "python", book3: "javascript", book4: "c++"
// }
//  for (const book in books){
//     console.log(`${book} : ${books[book]}`)}





// let name = "keshav"

// for (let letter of name ) {
//     console.log(letter)
// }


// let movies ={
//     movie1: "java",
//     movie2: "python",
//     movie3: "javascript",
//     movie4: "c++"
// }

// for (let ks in movies ) {
//     console.log(`${ks} name is  ${movies[ks]}`)
// }








// let movies =["java", "python", "javascript", "c++"]
// movies.forEach( (i)=> {console.log(i + " is a good movie")})




// let books=[
//   {
//     book1: "java",
//     authofBook: "keshav",
//   } ,
  
//   {
//     book1: "c++",
//     authofBook: "keshav",
//   } ,
//   {
//     book1: "python",
//     authofBook: "keshav",
//   }
 
// ]

// console.log(books.forEach((book)=>{
//   console.log(book.authofBook)

// }))




// Array of 50 student objects with name, roll number, and subjects
// let students = [
//   { name: "Aarav",    rollNo:  1, subjects: ["Math",    "English", "Science"] },
//   { name: "Ishita",   rollNo:  2, subjects: ["Math",    "Hindi",   "Science"] },
//   { name: "Rohan",    rollNo:  3, subjects: ["English", "Science", "Social"] },
//   { name: "Meena",    rollNo:  4, subjects: ["Math",    "Computer","Hindi"] },
//   { name: "Karan",    rollNo:  5, subjects: ["Math",    "Science", "English"] },
//   { name: "Simran",   rollNo:  6, subjects: ["Social",  "English", "Hindi"] },
//   { name: "Rahul",    rollNo:  7, subjects: ["Math",    "English", "Drawing"] },
//   { name: "Ananya",   rollNo:  8, subjects: ["Science", "Hindi",   "Math"] },
//   { name: "Vikas",    rollNo:  9, subjects: ["English", "Social",  "Computer"] },
//   { name: "Pooja",    rollNo: 10, subjects: ["Math",    "Science", "English"] },

//   { name: "Neha",     rollNo: 11, subjects: ["Hindi",   "Drawing", "Science"] },
//   { name: "Kabir",    rollNo: 12, subjects: ["English", "Math",    "Computer"] },
//   { name: "Tanya",    rollNo: 13, subjects: ["Science", "Math",    "Social"] },
//   { name: "Yash",     rollNo: 14, subjects: ["Hindi",   "English", "Math"] },
//   { name: "Sneha",    rollNo: 15, subjects: ["Math",    "Computer","Science"] },
//   { name: "Ayaan",    rollNo: 16, subjects: ["English", "Social",  "Math"] },
//   { name: "Diya",     rollNo: 17, subjects: ["Hindi",   "Science", "English"] },
//   { name: "Ritika",   rollNo: 18, subjects: ["Math",    "English", "Drawing"] },
//   { name: "Arjun",    rollNo: 19, subjects: ["Science", "Computer","Math"] },
//   { name: "Nikhil",   rollNo: 20, subjects: ["Social",  "English", "Math"] },

//   { name: "Ira",      rollNo: 21, subjects: ["Math",    "Science", "English"] },
//   { name: "Aman",     rollNo: 22, subjects: ["Hindi",   "Computer","Social"] },
//   { name: "Gauri",    rollNo: 23, subjects: ["Math",    "English", "Science"] },
//   { name: "Rehan",    rollNo: 24, subjects: ["Social",  "Drawing", "Math"] },
//   { name: "Kritika",  rollNo: 25, subjects: ["Hindi",   "English", "Computer"] },
//   { name: "Samar",    rollNo: 26, subjects: ["Math",    "Science", "Social"] },
//   { name: "Ishaan",   rollNo: 27, subjects: ["English", "Hindi",   "Math"] },
//   { name: "Manya",    rollNo: 28, subjects: ["Science", "Computer","English"] },
//   { name: "Tarun",    rollNo: 29, subjects: ["Math",    "Social",  "Drawing"] },
//   { name: "Palak",    rollNo: 30, subjects: ["English", "Math",    "Science"] },

//   { name: "Zoya",     rollNo: 31, subjects: ["Social",  "English", "Computer"] },
//   { name: "Aditya",   rollNo: 32, subjects: ["Math",    "Science", "Drawing"] },
//   { name: "Rashi",    rollNo: 33, subjects: ["Hindi",   "Math",    "English"] },
//   { name: "Sahil",    rollNo: 34, subjects: ["Science", "Computer","Math"] },
//   { name: "Bhavya",   rollNo: 35, subjects: ["English", "Math",    "Social"] },
//   { name: "Dev",      rollNo: 36, subjects: ["Math",    "Hindi",   "Science"] },
//   { name: "Khushi",   rollNo: 37, subjects: ["English", "Computer","Drawing"] },
//   { name: "Aryan",    rollNo: 38, subjects: ["Math",    "Social",  "Science"] },
//   { name: "Priya",    rollNo: 39, subjects: ["English", "Hindi",   "Math"] },
//   { name: "Raghav",   rollNo: 40, subjects: ["Math",    "Computer","Science"] },

//   { name: "Tara",     rollNo: 41, subjects: ["English", "Math",    "Drawing"] },
//   { name: "Ved",      rollNo: 42, subjects: ["Science", "Computer","Social"] },
//   { name: "Naina",    rollNo: 43, subjects: ["Math",    "English", "Hindi"] },
//   { name: "Jay",      rollNo: 44, subjects: ["Social",  "Science", "Math"] },
//   { name: "Sana",     rollNo: 45, subjects: ["English", "Computer","Drawing"] },
//   { name: "Harsh",    rollNo: 46, subjects: ["Hindi",   "Science", "Math"] },
//   { name: "Avni",     rollNo: 47, subjects: ["Math",    "English", "Social"] },
//   { name: "Parth",    rollNo: 48, subjects: ["Science", "Drawing", "Math"] },
//   { name: "Aisha",    rollNo: 49, subjects: ["English", "Computer","Math"] },
//   { name: "Nitin",    rollNo: 50, subjects: ["Math",    "Science", "Social"] }
// ];

// let rank =students.filter((lol) =>{
// return lol.name === 'Harsh'

// })
// console.log(rank) 




// let date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = date.filter((i)=> {
//   return i + 10
// })
// console.log(sum)


// let  num = [ 1 , 2,3,5,6,7,8,9,10]
// let sum =num.filter((i)=>{
//   return i +1 === 10

// })
// console.log(sum)
// console.log(num)




//map
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum= num.map((i)=> {
//   return i + 10 
// }).map((i)=> {return i +1}).filter((i)=> {return i >= 14})
// console.log(sum)





// let num = [1, 2, 3,6,9,2,45,656,2,223435,47665,7]
// // let sum = num.reduce((acc , curval)=> {return acc + curval}, 0)
// let king = num.reduce((acc ,curbal)=> {return acc > curbal ? acc : curbal}, 0)
// console.log(king)


// let shopingcart =[ 
//   { productName: "laptop", price: 50000, quantity: 1 },
//   { productName: "mobile", price: 20000, quantity: 2 },
//   { productName: "headphone", price: 2000, quantity: 3 },
//   { productName: "watch", price: 5000, quantity: 4 },
// ]

// let totalAmount = shopingcart.reduce((acc, curr )=> {
//   return acc + curr.price * curr.quantity

// },0)

// console.log(`Total amount is ${totalAmount}`)

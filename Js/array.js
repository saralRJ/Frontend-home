// var fruits = ['strawberry','apple','kiwi',{x:'a',2:'b',nam:'c',4:'d'}, true, {
//     name: 'saral',
//     address: 'kumaripati'
// }]
// console.log(fruits[3].nam)
// console.log(fruits[3])

var fruits = ['apple', 'mango','kiwi','strawberry','orange','orange','orange']

//adding elements into array
//in first position
// fruits.unshift('papaya')
// //in last position
// fruits.push('banana')
// console.log(fruits)

//remove elements from array
// fruits.shift()
// fruits.pop()
// console.log(fruits)

//splice
//used to remove elements from array
//syntax:
//array_name.splice(starting_index,number of elements to be removed, add elements)
// fruits.splice(0,2,'grapes','pineapple','guava','pineapple')
// console.log(fruits.indexOf('pineapple'))
// console.log(fruits.lastIndexOf('pineapple'))
// console.log(fruits)

//slice
// fruits.slice(1.3)
// console.log(fruits.length)
// console.log(fruits.slice(1,5))

//foreach
//syntax: array_name.forEach(function(item, index){})
var uniqueFruits=[]
fruits.forEach(function(item, index){
    console.log(item)
    console.log(index)
    if (uniqueFruits.indexOf(item)==-1)
    uniqueFruits.push(item)
})
console.log(uniqueFruits)
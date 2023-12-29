// function maths(a, b){
//     var sum= a+b
//     var sub= a-b
//     var mult= a*b
//     return{
//         sum, sub, mult
//     }
// }
// // maths(4,5)
// console.log('the sum is', maths(4,5).sum)
// console.log('the sub is', maths(4,5).sub)
// console.log('the mult is', maths(4,5).mult)

function food(){
    var fruits={fruit1:'kiwi',fruit2:'apple',fruit3:'mango',fruit4:'orange'}
    var veg = ['potato','saag','onion','tomato']
    return{
        fruits,veg
    }
}
console.log('You just bought',food().fruits.fruit2)
console.log('You just bought',food().veg[0])
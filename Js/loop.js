// WAP to find even and odd number
// for(i=1; i<=50;i++){
//     if(i%2==0){
//     console.log(i,' is an even number')
//     }else{
//         console.log(i,' is an odd number')
//     }
// }

//wap to find sum of natural numbers
// var j = 0
// for(i=1;i<10;i++){
//     j = j+i
//     console.log(j)
// }

// wap to find factorial of 5 (5!)
// var j = 1
// for(i=5;i>=1;i--){
//     j=j*i
//     console.log(j)
// }

//wap for fibonacci (0+0=0 0+1=1 1+1=2 1+2=3 2+3=5 3+5=8 )
// var a = 0;
// var b = 1;
// var n = 7;
// console.log(a)
// console.log(b)
// for(i=0;i<=n;i++){
//     var c = a + b
//     console.log(c)
//     a = b
//     b = c
// }

//wap to find out if n is a prime number or not
// var count = 0
// var n = 4
// for(i=1;i<=n;i++){
//     if(n%i==0){
//         count++
//     }
// } if(count==2){
//     console.log(n,'is a prime number')
// }else{
//     console.log(n,'is not a prime number')
// }

//wap to find fibanacci series using do while loop
// var a = 0
// var b = 1
// var n = 7
// var i = 1
// console.log(a)
// console.log(b)
// do{
//     i++
//     var c = a+b
//     a=b
//     b=c
//     console.log(c)
// }while(i<=n)

/*
1
13
135
1357
13579
*/
for(i=1;i<=5;i++){
    for(j=1;j<i+i;j++){
        if(j%2!=0){
            console.log(j)
        }
    }
    
}
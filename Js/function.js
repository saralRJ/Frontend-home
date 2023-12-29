
// var detail = ['ram','ram@gmail.com',12345678,'kumaripati','male']
// function details(){
//     var info='Hello '+detail[0]+', your email is:'+detail[1]+', your number is:'+detail[2]+', your address is: '+detail[3]+' and your gender is '+detail[4]
//     console.log(info)
// }
// details()

// function details(name, email, number, address, gender){
//     var info='Hello '+name+', your email is: '+email+', your number is: '+number+', your address is: '+address+' and your gender is '+gender
//     console.log(info)
// }
// details('ram', 'ram@gmail.com', 12345678, 'kumaripati', 'male')

//function with argument
function welcome(address, name){
    //name and address are parameter
    // console.log('Good Morning '+name+' !!!')
    var greetingText = 'Hello ' + name + ', welcome to ' + address;
    console.log(greetingText)
}
welcome('vedu', 'ram')
            // Task 01
// function checkLeap(current) {
//     if(current%4==0){
//         alert("Current Year "+current+" is a Leap Year")
//     }
//     else{
//         alert("Current Year "+current+" is not a Leap Year")
//     } 
// }
// var current = new Date();
// checkLeap(current.getFullYear());

               // Task 02
// function nextLeaps(year){

//     var i,leaplist = [];
//     for(i=1;i<=10;i++){
//         if(year%4==0){
//             leaplist.push(year) 
//         }
//         else{
//             i--;
//         }
//         year++;
//     }
//     return leaplist;
// }
// var year = prompt("Enter a year to find next 10 Leap Years: ");
// var list = nextLeaps(year);
// document.write("Upcoming next 10 Leap Years are:  ");
// document.write(list);

                // Task 03
// function generateOTP(){
//     var OTP = Math.floor((Math.random()*3650) * (Math.floor(Math.random()*14700)));
//     return "Z-"+OTP;
//     }
// var myOTP = generateOTP();
// alert("Your OTP is: "+myOTP)

                //  Task 04
// function CapitalCase(str){
//     str=str.toUpperCase();
//     alert("String in Capital case: "+str);
// }
// var str = prompt("Enter a string: ");
// CapitalCase(str);

            //   Task 05
function CalculateAge(current, DOB){
    var age = current - DOB
    alert("Your Age is: "+Math.floor(age/(1000*60*60*24*365)))
}
var current = new Date();
var DOB = new Date(prompt("Enter Your Age: ",'Jan 1,2002'))
// var DOB = new Date("MARCH 22,2003");
CalculateAge(current,DOB);
              
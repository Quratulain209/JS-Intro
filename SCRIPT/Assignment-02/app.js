            // Task 01: Check current year is leap or not
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

               // Task 02: Find Upcoming next 10 leap Years
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

                // Task 03: Generate OTP
// function generateOTP(){
//     var OTP = Math.floor((Math.random()*3650) * (Math.floor(Math.random()*14700)));
//     return "Z-"+OTP;
//     }
// var myOTP = generateOTP();
// alert("Your OTP is: "+myOTP)

                //  Task 04: Convert String in CapitalCase
// function CapitalCase(str){
//     str=str.toUpperCase();
//     alert("String in Capital case: "+str);
// }
// var str = prompt("Enter a string: ");
// CapitalCase(str);

            //   Task 05: Calculate Age
function CalculateAge(current, DOB){
    var age = current - DOB
    alert("Your Age is: "+Math.floor(age/(1000*60*60*24*365)))
}
var current = new Date();
var DOB = new Date(prompt("Enter Your Age: ",'Jan 1,2002'))
CalculateAge(current,DOB);
// prompt("Name: ", 'ainy')
// alert ( name );
// var name = "Mark";
// name=235;
// a=2;
// b=3;
// alert(a+b);
// alert("2" + "2");
// alert("2 plus 2 equals " + 2 + 2);
          
//  zakatPercentage = 0.025;
//  userInput = +prompt("Enter your Zakat value");
//  Result = zakatPercentage *  userInput;
// alert("Your Zakat value is "+ Result);

               //  Day 01
// alert("Thanks for your input!");

// var name = "Mark";
// name = "Ace";
// alert(name)

// var nationality;
// nationality = "U.S.";
// alert(nationality)

// var thanx = "Thanks for your input!"
// alert(thanx);

// var weight = 150;
// NEW = weight + 25;    
// alert(NEW);

// var originalNum = 23;
// var numToBeAdded = 7;
// var newNum = originalNum + numToBeAdded;
// alert(newNum)


                        // 11-Apr-23

        //   Task 01     
//  zakatPercentage = 0.025;
//  userInput = +prompt("Enter your Zakat value");
//  Result = zakatPercentage *  userInput;
// alert("Your Zakat value is "+ Result);

            // Task 02
// var Wheat = 250
// var Dates = 2100
// var Barley = 450
// var Raisins = 2800
// var FamilyMembers = prompt("Enter the total number of Family Members")
// var FitrahMethod = prompt("Choose a Fitrah Method \n a) Wheat   =  Rs.250 \n b) Dates   =   Rs.2100 \n c) Barley   =  Rs.450 \n d) Raisins  =  Rs.280")
// FitrahMethod = FitrahMethod.toLowerCase()
// if(FitrahMethod == 'wheat')
// {
//     var TotalFitrah = Wheat*FamilyMembers
// }
// else if(FitrahMethod == 'dates')
// {
//     var TotalFitrah = Dates*FamilyMembers
// }
// else if(FitrahMethod == 'barley')
// {
//     var TotalFitrah = Barley*FamilyMembers
// }
// else if(FitrahMethod == 'raisins')
// {
//     var TotalFitrah = Raisins*FamilyMembers
// }
// else{
//     alert("Invalid Input")
// }
// alert("Total Fitrah Amount of Your Family is: "+TotalFitrah)

            // Task 03
// var secretNumber = 5;
// var userInput = prompt("Guess a Secret Number: ");
// if(userInput == secretNumber)
// {
//         alert("Congratulations! You guessed the secret number");
// }
// else if(userInput > secretNumber)
// {
//         alert("Entered number is too high, Guess Again")
// }
// else
// {
//         alert("Entered number is too low, Guess Again")
// }

            // Task 04
// var userName = prompt("Enter your name");
// userName = userName.toLowerCase();
//  var a= userName[0].toUpperCase();
//  var x = a + userName.slice(1);
//  alert(x);

            // Task 05
// var contactNames=[];
// var contactNumbers=[];

// contactNames.push(prompt("Enter contact name: "));
// contactNumbers.push(prompt("Enter contact number: "));

// contactNames.push(prompt("Enter contact name: "));
// contactNumbers.push(prompt("Enter contact number: "));

// contactNames.push(prompt("Enter contact name: "));
// contactNumbers.push(prompt("Enter contact number: "));

// alert("Name: "+contactNames[0]+"  "+"Number: "+contactNumbers[0]+"\nName: "+contactNames[1]+"  "+"Number: "+contactNumbers[1]+"\nName: "+contactNames[2]+"  "+"Number: "+contactNumbers[2]);

        //     Task 06
// var Products = ['Linear' ,'Foundation' ,'Mascara' ,'Highlighter'];
// var productSell = prompt("Enter the Position of that elemment you want: ");
// if(productSell==0){
//         console.log("Removed Item: "+Products.splice(0,1));
// } 
// else if(productSell==1){
//         console.log("Removed Item: "+Products.splice(1,1));
// }
// else if(productSell==2){
//         console.log("Removed Item: "+Products.splice(2,1));
// }
// else if(productSell==3){
//         console.log("Removed Item: "+Products.splice(3,1));
// }
// else 
// {
//         console.log("Invalid input");
// }
// alert("Remaining Items:  "+Products);
// alert("Total number of Items Remaining:  "+Products.length);

        //       Task 07
// var nationality = prompt("Enter your Nationality: ");
// nationality = nationality.toLowerCase();
// var gender = prompt("Enter your Gender: ");
// gender = gender.toLowerCase();
// var age = prompt("Enter your Age: ");

// if(nationality == 'pakistani' || nationality == 'indian')
// {
//         if(gender == 'male' && age > 18){
//                 alert("You are Eligible to vote");
//         }
//         else if(gender == 'female' && age > 18)
//         {
//                 maritalStatus = prompt("Enter your Marital Status: \n Married \n Unmarried");
//                 maritalStatus - maritalStatus.toLowerCase();
//                 if(maritalStatus == 'married'){
//                         alert("You are Eligible to vote");       
//                 }
//                 else{
//                         alert("You are not Eligible to vote");
//                 }
//         }
//         else if(age <= 18){
//                 alert("You are not Eligible to vote, you are underage");
//         }
// }
// else{
//         alert("You are not Eligible to vote");
// }

                //  Task 08
//  WorldCupSquad = ['Babar Azam','Shaheen Afridi','Shadab Khan','Mohammad Amir','Fakhar Zaman','Sarfaraz Ahmed','Imad Wasim','Haris Sohail','Hasan Ali','Mohammad Haris','Muhammad Hasnain','Imam-ul-Haq','Asif Ali','Sohaib Maqsood','Mohammad Hafeez'];
//  alert("Player selected for WorldCup \n\n"+WorldCupSquad);
//  finalTeamPlayers = WorldCupSquad.slice(0,11);
//  alert("Final Team Players playing tommorow's Match\n\n"+finalTeamPlayers);
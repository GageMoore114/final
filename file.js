//Password_Guessing_Game

function passwordGuessingGame(){
    //WHAT THE PASSWORD IS 
    const correctPassword = "Gage";
    //SET ATTEMPTS
    let attempts = 3;
    let userInput;

    console.log("Welcome to the password guessing game");
    // WHILE LOOP TO START GAME
    while(attempts>0){
        userInput = prompt("Enter Password");
        //IF PASSWORD IS RIGHT PRINT IN CONSOLE IS CORRECT
        if(userInput == correctPassword){
            console.log("You guessed it right");
            return;
        }
        else{
            //IF WRONG TELL PLAYER AND TELL HOW MANY ATTEMPTS LEFT 
            attempts --;
            console.log("Incorrect password. You have" , attempts, "left");
        }
    }
    //WHEN OUT OF ATTEMPTS TELL PLAYER 
    console.log("You are out of attempts, try later.");
}

function validateform(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const Zipcode = document.getElementById('Zip Code').value;
    var fullName = firstName + ' ' + lastName;

    if(fullName.length < 20 ){
        alert("Your first and last name is to long.");
        return;
        
    }
//
    alert("Registration seccessful");
    document.getElementById('reistrationForm').submit();
}





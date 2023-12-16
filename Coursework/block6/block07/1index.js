// To crack the code to the vault we have three steps! We must create a string, create and solve mathmatical equations, and lastly an alert pop up

// Step 1: Must create the string!
const userMessage =  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// Step 2: Solve for the code using mathematical equations
const code1 = 10 + 20; 
const code2 = 160 / 4; 
const code3 = 1 - 40;

// Step 3: Display the message combination made by using an alert pop up
const combinationMessage = `Vault Combination:\n${code1} - ${code2} - ${code3}`;
alert(userMessage + "\n" + combinationMessage);

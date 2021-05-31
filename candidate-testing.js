const input = require('readline-sync');

let name = input.question("Enter your name: ");
console.log("Wel Come to Candidate Testing,"+ name + "!");
// TODO 2: modify your quiz app to ask 5 questions //
console.log();
// TODO 1.1a: Define candidateName // 
const candidateName = ("Can Twin");
console.log("Candidate Name:",candidateName);

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
question = input.question("1) Who was the first American woman in space?");     // "Sally ride" //
let candidateAnswer;
if (candidateAnswer == "Sally Ride"){
  console.log("Correct");
}else{
  console.log("Wrong");
}
console.log();

let question2;
question2 = input.question("2) True or false: 5000 meters = 5 kilometers.");
let candidateAnswer2;
if (candidateAnswer2 == "true"){
  console.log("Correct")
}else{
  console.log("Wrong")
}
console.log();

let question3;
question3 = input.question("3) (5 + 3)/2 * 10 = ?");
let candidateAnswer3;
if (candidateAnswer3 === 40){
  console.log("Correct")
}else{
  console.log("Wrong")
}
console.log();
/*
let question4;
question4 = input.question("(4) "Given the array" [8, "Orbit", "Trajectory", 45], "what entry is at index 2?")")
let candidateAnswer4;//trajectory
if (candidateAnswer4 == "Trajectory"){
  console.log("correct")
}else{
  console.log("wrong")
}
console.log();

let question5;
question5 = input.question5("5) What is the minimum crew size for the ISS?");
let candidateAnswer5;//10
if (candidateAnswer5 === 3){
  console.log("correct")
}else{
  console.log("wrong")
}




function askForName() {
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
//module.exports = {
 // candidateName: candidateName,
 // question: question,
 // correctAnswer: correctAnswer,
 // candidateAnswer: candidateAnswer,
 // questions: questions,
 // correctAnswers: correctAnswers,
  //candidateAnswers: candidateAnswers,
  //gradeQuiz: gradeQuiz,
 // runProgram: runProgram
//};*/
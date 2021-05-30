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
question = input.question("1) Who was the first American woman in space?");
console.log(question);/*
let candidateAnswer;
candidateAnswer = ""; //   sally ride
console.log("Your Answer: sally ride");
let correctAnswer;
correctAnswer = "Sally Ride";
console.log("Correct Answer: Sally Ride");
console.log("");
console.log("2) True or false: 5000 meters = 5 kilometers.");
let candidateAnswers;
let correctAnswers;





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
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};*/
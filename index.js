var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name ? ');
console.log('Hello '+ userName + '! Welcome to DO YOU KNOW ME QUIZ');
console.log('---------------------------------------------------');
console.log('NOTE:');
console.log('You get +1 for each right answer and -1 for each wrong answer');
console.log('---------------------------------------------------');

var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(question)
  
  if(userAnswer === answer){
    console.log('You are right!');
    score = score+1;
  }
  else{
    console.log('You are wrong! Right answer was '+ answer);
    score = score-1;
  }

  console.log('Current score : '+ score);
  console.log('----------------------------------')
}


var questions = [{
  question: "How old am I? ",
  answer: "22"
}, {
  question: "Which is my favourite game? ",
  answer: "cricket"
}, {
  question: "Which college I went to for BTech? ",
  answer: "vit"
}, {
  question: "Which state I live in? ",
  answer: "rajasthan"
}, {
  question: "which is my favourite color?",
  answer: "orange"
}]

for(var i=0; i<questions.length; i++ ){
  var currentQuestion = questions[i];
  
  play(currentQuestion.question,currentQuestion.answer)

}

console.log('YAY! You scored: ' + score);
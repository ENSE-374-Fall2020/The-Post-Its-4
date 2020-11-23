///////////////////     EXPLANATION    /////////////////// 
/*
This file is intended to be an initialization for the 
mongo database used in our Collaborative Quiz application.
        mongo db created: CollaborativeQuiz

By running node initialization.js for this file you will
have access to the following 'Testing' database. 

****        User Model         **** 
Use: Sign in using the following information to have access 
    to a test user and their respective courses and questions
        username: Student
        password: pass

****        Course Model         **** 
Use: 3 test courses will be available for content viewing
    and related question and answer information
        ENEL 384
        ENSE 352
        ENSE 374

****        Q / A Model         **** 
Use: 30 sample questions and answers will be available
    for each of the respective test courses. These questions
    can be viewed, studied, or dynamically added to user
    quizzes upon signing in
*/

///////////////////     REQUIRE     /////////////////// 
const model = require(__dirname + "/model.js");

// EXPRESS JS
const express = require("express");
const app = express();

// MONGOOSE
const mongoose = require("mongoose");

// PASSPORT
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
app.use(passport.initialize());
app.use(passport.session());

// DATABASE
mongoose.connect("mongodb://localhost:27017/CollaborativeQuiz", 
                {useNewUrlParser: true, 
                 useUnifiedTopology: true});

///////////////////     IMPORT     /////////////////// 
var User = mongoose.model('User');                
var Course = mongoose.model('Course');
var Question = mongoose.model('Question');


///////////////////     INITIALIZATION     /////////////////// 

// ****        User Model         **** 


// ****        Course Model         **** 
function addCourse(courseName){
    const course= new Course ({
        courseName: courseName
    });
    course.save();
}
async function addCourses(){
var courseName = "ENEL 384";
await addCourse(courseName);
var courseName = "ENSE 352";
await addCourse(courseName);
var courseName = "ENSE 374";
await addCourse(courseName);
}
//UNCOMMENT TO RUN ADD COURSES TO DB
//addCourses();

// ****        Q / A Model         **** 
function addQuestion(courseName, ownerName, question, answers, answerExplanation){
    const userQuestion = new Question ({
        courseName: courseName,
        ownerName: ownerName,
        question: question,
        answers: answers,
        answerExplanation: answerExplanation
    });
    userQuestion.save();
}
async function addQuestions(){
// ENEL 384 COURSE QUESTIONS
var courseName = "ENEL 384";
var ownerName = "Student";
var question = "For binary numbers MSB stands for what?";
var answers = [{answer: "Most Signed Bit", correct: 0}, {answer: "Many Signed Bits", correct: 0}, {answer: "Most Significant Bit", correct: 1}]
var answerExplanation = "MSB means Most Significant Bit and refers to the leftmost bit with the highest weight.";
await addQuestion(courseName, ownerName, question, answers, answerExplanation);

// COPY LINES 92 - 98 AND FILL IN YOUR QUESTIONS

}
//UNCOMMENT TO RUN ADD QUESTIONS DB
//addQuestions();
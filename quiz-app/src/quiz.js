import React from 'react'
import { useState } from 'react';
import './style.css'


// Questions list..............
const QuizComp = () => {
    var QuizBank = [
        {
            Quiz: "Which of the following is used in React.js to increase performance?",
            Answers: [
                { Ans: "Virtual DOM", isCorrect: true },
                { Ans: "Original DOM", isCorrect: false },
                { Ans: "Both A & B", isCorrect: false },
                { Ans: "None of the above", isCorrect: false }
            ]
        },
        {
            Quiz: "What is ReactJS?",
            Answers: [
                { Ans: "Server-side framework", isCorrect: false },
                { Ans: "User interface framework", isCorrect: true },
                { Ans: "Both A & B", isCorrect: false },
                { Ans: "None of the above", isCorrect: false }
            ]
        }, {
            Quiz: "Identify the one which is used to pass data to components from outside.",
            Answers: [
                { Ans: "Render with arguments", isCorrect: false },
                { Ans: "setState", isCorrect: false },
                { Ans: "PropTypes", isCorrect: false },
                { Ans: "props", isCorrect: true }
            ]
        },
        {
            Quiz: "Who created React.js?",
            Answers: [
                { Ans: "Jordan Mike", isCorrect: false },
                { Ans: "Jordan Walke", isCorrect: true },
                { Ans: "Tim Lee", isCorrect: false },
                { Ans: "Jordan Lee", isCorrect: false }
            ]
        },
        {
            Quiz: "In which language React.js is written?",
            Answers: [
                { Ans: "Python", isCorrect: false },
                { Ans: "JavaScript", isCorrect: true },
                { Ans: "Java", isCorrect: false },
                { Ans: "PHP", isCorrect: false }
            ]
        },
        {
            Quiz: "Among the following which is used to create a class inheritance?",
            Answers: [
                { Ans: "Inherits", isCorrect: false },
                { Ans: "Extends", isCorrect: true },
                { Ans: "Create", isCorrect: false },
                { Ans: "this", isCorrect: false }
            ]
        },
        {
            Quiz: "Using which of the following command can prevent default behaviour at in react?",
            Answers: [
                { Ans: "preventDefault()", isCorrect: true },
                { Ans: "avoidDefault()", isCorrect: false },
                { Ans: "revokeDefault()", isCorrect: false },
                { Ans: "None of the above", isCorrect: false }
            ]
        },
        {
            Quiz: "Which of the following port is the default where webpack-dev-server runs?",
            Answers: [
                { Ans: "3000", isCorrect: true },
                { Ans: "3306", isCorrect: false },
                { Ans: "3030", isCorrect: false },
                { Ans: "8080", isCorrect: false }
            ]
        },
        {
            Quiz: "What is ReactJS mainly used for building?",
            Answers: [
                { Ans: "Database", isCorrect: false },
                { Ans: "Connectivity", isCorrect: false },
                { Ans: "User interface", isCorrect: true },
                { Ans: "Design platform", isCorrect: false }
            ]
        },
        {
            Quiz: "Which of the following function is used to change the state of react component?",
            Answers: [
                { Ans: "this.setState()", isCorrect: true },
                { Ans: "this.state()", isCorrect: false },
                { Ans: "this.setChangeState()", isCorrect: false },
                { Ans: "None of the above", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);



    //Handling user response function
    const handleAnsResponse = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < QuizBank.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    }


    // Calculate Average/Percentage..........
    const Percentage = () => {
        return (score / QuizBank.length) * 100;
    };


    // Reset the Quiz once click on the playAgain! button
    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    return (
        <div>
           <h1>ReactJS Quiz</h1>
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    Total Score :  {score}/{QuizBank.length}
                    <br></br>
                    <h5>Percentage : {Percentage()}<span>%</span></h5>
                    <div>
                        <button className='playbtn' type="submit" onClick={resetQuiz}>Play Again!!</button>
                    </div>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{QuizBank.length}
                            </div>

                            <div className='question-text'>
                                {QuizBank[currentQuestion].Quiz}
                            </div>
                        </div>

                        <div className='answer-section'>
                            {QuizBank[currentQuestion].Answers.map((answer) =>
                            (
                                <button onClick={() => handleAnsResponse(answer.isCorrect)}>{answer.Ans}</button>
                            ))}
                        </div>
                    </>
                )
            }

        </div>
        </div>
    );
}

export default QuizComp;
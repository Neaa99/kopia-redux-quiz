import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Summary = () => {

    const dispatch = useDispatch()
    const answers = useSelector((state) => state.quiz.answers)
    const correctAnswers = answers.filter(answer => answer.isCorrect).length
    const numOfAnswers = answers.length

    return (
        <div className="summary-container">
            <div className="summary">
                {correctAnswers < 3 && (
                    <>
                    <h2>Maybe you should rewatch the show...</h2>
                    </>
                )}
                {correctAnswers >= 3 && (
                    <>
                    <h2>You are true a fan, great work!</h2>
                    </>
                )}
              
                
                <p>You got {correctAnswers} right answers out of {numOfAnswers}</p>
            </div>

            <div className="button-container">
                <button
                    className="restart-button"
                    onClick={() => dispatch(quiz.actions.restart())}
                    >
                    Restart quiz!
                </button>
            </div>
      </div>
    )
}
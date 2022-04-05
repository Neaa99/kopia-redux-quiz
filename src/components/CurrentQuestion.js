import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from './Summary'
import { ProgressBar } from './ProgressBar'
import { Header } from './Header'
import { Footer } from './Footer'



export const CurrentQuestion = () => {
  // Getting data from the store
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver)
  const store = useSelector((state) => state)
  console.log(store)

  // Forwarding data to the store / update'ing
  const dispatch = useDispatch()
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({questionId:id, answerIndex:index}));
    dispatch(quiz.actions.goToNextQuestion())
    
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }


  return (
    <div>
      <Header />
      

      {quizOver ? <Summary /> : (
        <div className="current-question-container">
          <h1>Question: {question.questionText}</h1>
            {question.options.map((item, index) => (
               <button 
                onClick={() => onAnswerSubmit(question.id, index)} 
                key={item}>
                {item}
                </button>
            ))}
          <ProgressBar />
        </div>
      )}

      <Footer />
    </div>
  )
}

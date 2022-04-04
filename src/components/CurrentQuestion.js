import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  // Getting data from the store
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const store = useSelector((state) => state)
  console.log(store)

  // Forwarding data to the store / update'ing
  const dispatch = useDispatch()
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({questionId:id, answerIndex:index }))
    if(question.correctAnswerIndex === index) {
      dispatch(quiz.actions.goToNextQuestion())
    }

  }


  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((item, index) => {
        return <button onClick={() => onAnswerSubmit(question.id, index)}key={item}>{item}</button>
      })}
    </div>
  )
}

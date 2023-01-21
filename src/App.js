import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Questions'
function App() {
          const [questions, setQuestions] = useState(data)
  return (

    <main>
      <div className="container">
        <h4>Questions And Answers About Login</h4>
        <div className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question} />
            )
          })}
        </div>
      </div>

    </main>
  )
}

export default App

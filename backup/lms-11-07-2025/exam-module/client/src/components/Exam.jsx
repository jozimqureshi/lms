import React from 'react'
import { useLocation } from 'react-router-dom'

const examID = useLocation().eIdByNavigate;

const Exam = () => {
  return (
    <>
      <p>Seelcted Exam Opened with Exam ID: {examID}</p>
    </>
  )
}

export default Exam

import React from 'react'
import Form from './Form'
import { useSelector } from 'react-redux'

const FormContainer = () => {

const {frmDt} = useSelector((state) => state.nameList)


  return (
    <div>

        <h1>Form Container</h1>
        <p>you are typing: {frmDt}</p>
        <hr/>
        <Form/>
      
    </div>
  )
}

export default FormContainer

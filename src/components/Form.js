import React from 'react'
import { useDispatch } from 'react-redux'
import { setDtList, setFrmDt } from '../nameSlice'

const Form = () => {

  const dispatch = useDispatch()

  const handleOnChange = e =>{
    const {value} = e.target
    dispatch(setFrmDt(value))
  }

  const handleOnSubmit =e =>{
    e.preventDefault()

    dispatch(setDtList())
  }
  return (
    <div>

        <form action='' onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <input type='text'/>
          <input type='submit'/>

        </form>
      
    </div>
  )
}

export default Form

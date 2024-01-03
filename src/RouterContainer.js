import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ToDoList from './ToDoList'
import Navvv from './Navvv'
import ToDoInput from './ToDoInput'

export default function RouterContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ToDoList />} />
        <Route path='/ToDoList' element={<ToDoList />} />
        <Route path='/ToDoInput' element={<ToDoInput />} />
        <Route path='/ToDoInput/:id' element={<ToDoInput />} />
        <Route element={<Navvv />} />
      </Routes>
    </BrowserRouter>
  )
}

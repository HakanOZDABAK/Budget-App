import React from 'react'
import MainPage from '../pages/MainPage'
import AddBugdet from '../pages/AddBugdet'
import Budgets from '../pages/Budgets'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExpenseBudget from '../pages/ExpenseBudget'

export default function Dashboard() {
  return (

    <Routes>
    <Route path="/" element={MainPage()} />
      <Route path="/home" element={MainPage()} />
      <Route path="/addBudget" element={AddBugdet()} />
      <Route path="/expenseBudget" element={ExpenseBudget()} />
      <Route path="/budgetsDetail" element={Budgets()} />
    </Routes>


  )
}

import React, { useEffect } from 'react'
import MainPage from '../pages/MainPage'
import AddBugdet from '../pages/AddBugdet'
import Budgets from '../pages/Budgets'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExpenseBudget from '../pages/ExpenseBudget'
import { SpeedDial } from 'primereact/speeddial'
import { useThemeStore } from '../store/useThemeStore'

export default function Dashboard() {
  const {themeStatus, setThemeStatus} = useThemeStore(state => state);
  const onSwitchTheme = () => {
    setThemeStatus(!themeStatus);
    localStorage.setItem('theme', themeStatus ? 'dark' : 'light');
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme == 'dark') {
      setThemeStatus(false);
    } else {
      setThemeStatus(true);
    }
  }, []);

  return (
<div >
    <Routes>
    <Route path="/" element={MainPage()} />
      <Route path="/home" element={MainPage()} />
      <Route path="/addBudget" element={AddBugdet()} />
      <Route path="/expenseBudget" element={ExpenseBudget()} />
      <Route path="/budgetsDetail" element={Budgets()} />
    </Routes>
    <div className="card">
            <div style={{ position: 'relative',height: '350px'}}>
                <SpeedDial onClick={() => onSwitchTheme()} direction="up" className="speeddial-bottom-right right-0 bottom-0" buttonClassName="p-button-danger" />
            </div>
        </div>
    </div>


  )
}

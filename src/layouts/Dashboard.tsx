import { SpeedDial } from 'primereact/speeddial'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddBugdet from '../pages/AddBugdet'
import Budgets from '../pages/Budgets'
import ExpenseBudget from '../pages/ExpenseBudget'
import MainPage from '../pages/MainPage'
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
<div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
  <Routes>
    <Route path="/" element={MainPage()} />
    <Route path="/home" element={MainPage()} />
    <Route path="/addBudget" element={AddBugdet()} />
    <Route path="/expenseBudget" element={ExpenseBudget()} />
    <Route path="/budgetsDetail" element={Budgets()} />
  </Routes>
  <div style={{ position: 'fixed', right: '0', bottom: '0', marginRight: '16px', marginBottom: '16px' }}>
    <div className="card" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div style={{ position: 'absolute', right: '0', bottom: '0', height: '350px' }}>
        <SpeedDial onClick={() => onSwitchTheme()} direction="up" className="speeddial-bottom-right right-0 bottom-0" buttonClassName="p-button-danger" />
      </div>
    </div>
  </div>
</div>


  )
}

import PrimeReact from 'primereact/api';
import React, { useState } from 'react'

export default function Budgets() {
  const [theme, setTheme] = useState('dark');

  const changeMyTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    PrimeReact?.changeTheme?.(`lara-${theme}-blue`, `lara-${newTheme}-blue`, 'app-theme', () =>
      setTheme(newTheme)
    );
  };
  return (
    <div>
LOL
  </div>
);
  
}

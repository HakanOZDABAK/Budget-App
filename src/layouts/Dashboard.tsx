import { SpeedDial } from "primereact/speeddial";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Budgets from "../pages/Budgets";
import ExpenseBudget from "../pages/ExpenseBudget";
import MainPage from "../pages/MainPage";
import { useThemeStore } from "../store/useThemeStore";
import { useLoginStore } from "../store/useLoginStore";
import Login from "../pages/Login";
import AddBudget from "../pages/AddBudget";

export default function Dashboard() {
  const privateRoutes = [
    { path: '/', element: MainPage },
    { path: '/home', element: MainPage },
    { path: '/addBudget', element: AddBudget },
    { path: '/expenseBudget', element: ExpenseBudget },
    { path: '/budgetsDetail', element: Budgets },
  ];
  const { themeStatus, setThemeStatus } = useThemeStore((state) => state);
  const isLoggedIn = useLoginStore((state) => state.login);
  console.log(isLoggedIn)
  const onSwitchTheme = () => {
    setThemeStatus(!themeStatus);
    localStorage.setItem("theme", themeStatus ? "dark" : "light");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setThemeStatus(storedTheme === "dark");
    } else {
      setThemeStatus(true); // Default to 'light' if theme is not stored or invalid
    }

  }, []);

  const  PrivateRoute =({ children }:any) => {
  
    if (!isLoggedIn) {
      return <Navigate to='/login'  />
    }
  
    return children;
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<PrivateRoute>{element()}</PrivateRoute>}
        />
      ))}
      <Route path="/login" element={<Login />} />
    </Routes>
      <div
        style={{
          position: "fixed",
          right: "0",
          bottom: "0",
          marginRight: "16px",
          marginBottom: "16px",
        }}
      >
        <div
          className="card"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              right: "0",
              bottom: "0",
              height: "350px",
            }}
          >
            <SpeedDial
              onClick={onSwitchTheme}
              direction="up"
              className="speeddial-bottom-right right-0 bottom-0"
              buttonClassName="p-button-danger"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

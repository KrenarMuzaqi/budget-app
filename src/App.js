import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransition from "./components/AddTransition";
import IncomeList from "./components/incomeList";
import ExpenseList from "./components/expenseList";

import { GlobalContextProvider } from "./context/GlobalState";

import "./app.css";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransition />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
};
export default App;

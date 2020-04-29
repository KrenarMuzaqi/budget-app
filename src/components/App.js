import React from "react";

import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

import { GlobalProvider } from "../context/GlobalState";

import "../app.css";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
};
export default App;

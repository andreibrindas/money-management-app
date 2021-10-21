import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";

import "./App.css";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { LoginScreen } from "./components/LoginScreen";

function App() {
  const { isUser, getIsUsers } = useContext(GlobalContext);

  return (
    <>
      <Header />

      {isUser ? (
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      ) : (
        <LoginScreen />
      )}
    </>
  );
}

export default App;

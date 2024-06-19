'use client'
import React, { useEffect } from "react";
import { AddTransaction } from "./AddTransaction";
import { TransactionHistory } from "./TransactionHistory";
import { IncomeExpense } from "./IncomeExpense";
import { CurrentBalance } from "./CurrentBalance";
import { addTransaction, setTransactions } from "../redux/expenseTrackerSlice";
import { useSelector, useDispatch } from "react-redux";



export function ExpenseTracker(){
    const { totalTransactionHistory} = useSelector(state => state.expenseTracker)
    const dispatch = useDispatch()


    useEffect(() => {
        const storedTransactions = localStorage.getItem('transaction')
        if (storedTransactions) {
          dispatch(setTransactions(JSON.parse(storedTransactions)))
        }
    }, [dispatch])

    return (
        <div className="parent-container">
            <h1 className="title">Expense Tracker</h1>
            <CurrentBalance
                totalTransactionHistory={totalTransactionHistory}
            />
            <IncomeExpense
                totalTransactionHistory={totalTransactionHistory}
            />
            <TransactionHistory 
                totalTransactionHistory={totalTransactionHistory}
            />
            <AddTransaction
                totalTransactionHistory={totalTransactionHistory}
                addTransaction={addTransaction}
            />
        </div>
    )
}
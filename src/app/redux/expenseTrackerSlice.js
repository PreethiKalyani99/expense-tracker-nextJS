
import { createSlice } from "@reduxjs/toolkit";

export const expenseTrackerSlice = createSlice({
    name: 'expenseTracker',
    initialState:{
        totalTransactionHistory: []
    },
    reducers: {
        setTransactions: (state, action) => {
            state.totalTransactionHistory = action.payload;
        },
        addTransaction: (state, action) => {
            state.totalTransactionHistory.push(action.payload)
            if (typeof window !== 'undefined') {
                localStorage.setItem('transaction', JSON.stringify(state.totalTransactionHistory));
            }        
        },
        deleteTransaction: (state, action) => {
            state.totalTransactionHistory = state.totalTransactionHistory.filter((transaction, index) => index !== action.payload)
            if (typeof window !== 'undefined') {
                localStorage.setItem('transaction', JSON.stringify(state.totalTransactionHistory));
            }        
        }
    }
})

export const {addTransaction, deleteTransaction, setTransactions} = expenseTrackerSlice.actions
export default expenseTrackerSlice.reducer
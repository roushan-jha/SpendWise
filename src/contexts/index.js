import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}) {

    const [formData, setFormData] = useState({
        type: 'expense',
        amount: 0,
        description: ""
    })

    const [value, setValue] = useState("expense")
    const [totalExpense, setTotalExpense] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)
    const [allTransactions, setAllTransactions] = useState([])

    function handleFormSubmit(currentFormData) {
        if (!currentFormData.description || !currentFormData.amount) return;
    
        setAllTransactions([
          ...allTransactions,
          { ...currentFormData, id: Date.now() },
        ]);
      }

      // console.log(allTransactions)
      useEffect(() => {
        const allTransactions = JSON.parse(localStorage.getItem("allTransactions"))   
        if (allTransactions && allTransactions.length > 0) {
          setAllTransactions(allTransactions);
        }
      }, [])
      useEffect(() => {
        localStorage.setItem("allTransactions", JSON.stringify(allTransactions))
      }, [allTransactions])

    return <GlobalContext.Provider
    value={{
        formData, 
        setFormData, 
        value, 
        setValue, 
        totalExpense, 
        setTotalExpense, 
        totalIncome, 
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleFormSubmit
    }}
    >{children}</GlobalContext.Provider>
}
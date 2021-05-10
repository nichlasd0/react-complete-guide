import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {id: 'e1', title: 'Toilet paper', amount: 4.23, date: new Date(2021, 1, 3)},
    {id: 'e2', title: 'New TV', amount: 1499.99, date: new Date(2021, 2, 16)},
    {id: 'e3', title: 'Car insurance', amount: 295.23, date: new Date(2021, 4, 20)},
    {id: 'e4', title: 'Food', amount: 85.23, date: new Date(2021, 4, 13)}
];
function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    
    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...expenses];
        });
    }
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;

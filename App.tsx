import { useState } from "react";
import ExpenseForm from "./expense-tracker/ExpenseForm";
import ExpenseList from "./expense-tracker/ExpenseList";
import ExpenseFilter from "./expense-tracker/ExpenseFilter";
import categories from "./expense-tracker/categories";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "somethig", amount: 20, category: "Groceries" },
    { id: 2, description: "somethig", amount: 30, category: "Groceries" },
    { id: 3, description: "somethig", amount: 40, category: "Groceries" },
    { id: 4, description: "somethig", amount: 10, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      ></ExpenseForm>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      ></ExpenseFilter>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      ></ExpenseList>
    </div>
  );
}

export default App;

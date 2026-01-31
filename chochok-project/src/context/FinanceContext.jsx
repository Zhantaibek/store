import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const FinanceContext = createContext(null);

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [categoryFilter, setCategory] = useState("all");
  const [dateFilter, setDateFilter] = useState(null);

  const addTransaction = useCallback((transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  }, []);

  const removeTransaction = useCallback((id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const totalIncome = useMemo(() => {
    return transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
  }, [transactions]);

  const totalExpense = useMemo(() => {
    return transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
  }, [transactions]);

  const balance = useMemo(() => {
    return totalIncome - totalExpense;
  }, [totalIncome, totalExpense ]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const categoryMatch =
        categoryFilter === "all" || t.category === categoryFilter;
      const dateMatch = dateFilter ? t.date === dateFilter : true;
      return categoryMatch && dateMatch;
    });
  }, [transactions, categoryFilter, dateFilter]);

  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) setTransactions(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        filteredTransactions,
        totalIncome,
        totalExpense,
        balance,
        addTransaction,
        removeTransaction,
        setCategory,
        setDateFilter,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error("useFinance должен быть внутри FinanceProvider");
  }
  return context;
};

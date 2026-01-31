import { useFinance } from "../../context/FinanceContext";
import TransactionItem from "./TransactionItem";
import "../../styles/transaction.css";
const TransactionList = () => {
  const { filteredTransactions } = useFinance();

  if (filteredTransactions.length === 0) {
    return <p>Транзакций нет</p>;
  }

  return (
    <ul className="transaction-list">
      {filteredTransactions.map((t) => (
        <TransactionItem key={t.id} transaction={t} />
      ))}
    </ul>
  );
};

export default TransactionList;

import { useFinance } from "../../context/FinanceContext";
import '../../styles/transaction.css'
const TransactionItem = ({ transaction }) => {
  const { removeTransaction } = useFinance();

  return (
    <li className={`transaction ${transaction.type}`}>
      <span>
        {transaction.type === "income" ? "+" : "-"}${transaction.amount}
      </span>
      <button onClick={() => removeTransaction(transaction.id)}>
        Удалить
      </button>
    </li>
  );
};

export default TransactionItem;

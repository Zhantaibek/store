import { useFinance } from "../../context/FinanceContext";
import '../../styles/transaction.css'
const TransactionFilter = () => {
  const { setCategory, setDateFilter } = useFinance();

  return (
    <div className="transaction-filter">
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">Все категории</option>
        <option value="food">Еда</option>
        <option value="transport">Транспорт</option>
        <option value="salary">Зарплата</option>
        <option value="entertainment">Развлечения</option>
      </select>

      <input
        type="date"
        onChange={(e) => setDateFilter(e.target.value)}
      />
    </div>
  );
};

export default TransactionFilter;

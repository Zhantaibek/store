import { useFinance } from "../../context/FinanceContext";
import '../../styles/finance.css'
const FinanceSummary = () => {
  const { totalIncome, totalExpense, balance } = useFinance();

  return (
    <div className="finance-summary">
      <div className="summary-card income">
        <h4>Доходы</h4>
        <p>+${totalIncome}</p>
      </div>

      <div className="summary-card expense">
        <h4>Расходы</h4>
        <p>-${totalExpense}</p>
      </div>

      <div className="summary-card balance">
        <h4>Баланс</h4>
        <p>${balance}</p>
      </div>
    </div>
  );
};

export default FinanceSummary;

import { useState } from "react"
import { useFinance } from "../../context/FinanceContext"
import '../../styles/transaction.css'
import '../../styles/TransactionFilter.css'
import '../../styles/TransactionForm.css'

const TransactionForm = () => {
    const {addTransaction} = useFinance()

    const [amount , setAmount] = useState ('')
    const [type, setType] = useState ('income')
    const [category , setCategory] = useState ('general')
    const [date , setDate] = useState ('')

    const handleSubmit = (e) => {
     e.preventDefault()

     if (!amount || !date) return

     addTransaction({
      id: Date.now(),
      amount: Number(amount),
      type,
      category,
      date,
    });

    setAmount("");
    setDate("");
    }

    
    return (
       <form className="transaction-form" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Сумма"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Доход</option>
        <option value="expense">Расход</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="general">Общее</option>
        <option value="food">Еда</option>
        <option value="transport">Транспорт</option>
        <option value="fun">Развлечения</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">Добавить</button>
    </form>
    )

}

export default TransactionForm 
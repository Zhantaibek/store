import { FinanceProvider } from "./context/FinanceContext";
import TransactionList from "./components/Transactions/TransactionList";
import TransactionFilter from "./components/Transactions/TransactionFilter";
import FinanceSummary from "./components/Transactions/FinanceSummary";
import TransactionForm from "./components/Transactions/TransactionForm";
import "./styles/App.css";
import "./styles/app.css";
import "./styles/finance.css";
import "./styles/transaction.css";
function App() {
  return (
    <FinanceProvider>
      <div className="app-container">
        <h1>Финансовый трекер</h1>

        
        <FinanceSummary />

        
        <TransactionFilter />

        
        <TransactionForm />

     
        <TransactionList />
      </div>
    </FinanceProvider>
  );
}

export default App;

// import { useRef } from "react";

// function App() {
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);

//   const handleSubmit = () => {
//     alert(`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`);
//   };

//   const handleUp = (e) => {
//      if (e.key === 'Enter') {
//       emailRef.current.focus()
//      }
//   }
//   const handleUp1 = (e) => {
//     if (e.key === 'Enter') {
//       nameRef.current.focus()
//     }
//   }

//   return (
//     <div>
//       <input ref={nameRef} type="text" placeholder="name" onKeyUp={handleUp}/>
//       <br />
//       <input ref={emailRef} type="text" placeholder="email" onKeyUp={handleUp1}/>
//       <br />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default App;

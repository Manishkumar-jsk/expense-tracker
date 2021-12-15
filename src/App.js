
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import Transaction from './components/TransactionList';
import AddNewTransaction from './components/AddNewTransaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <Transaction />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

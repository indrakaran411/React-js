import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const addTransaction = () => {
    if (text.trim() === '' || amount === 0) return;

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    };

    setTransactions([...transactions, newTransaction]);
    setText('');
    setAmount(0);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div>
        <h3>Add New Transaction</h3>
        <label>
          Text: <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <label>
          Amount: <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
      <div>
        <h3>Transaction History</h3>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              {transaction.text} - ${transaction.amount}{' '}
              <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default ExpenseTracker;

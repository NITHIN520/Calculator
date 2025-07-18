import React, { useState } from "react";

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = (e) => {
    e.preventDefault();

    const principal = parseFloat(loanAmount);
    const annualInterest = parseFloat(interestRate) / 100;
    const months = parseFloat(loanTerm) * 12;

    if (!principal || !annualInterest || !months) {
      setMonthlyPayment("Please enter valid numbers.");
      return;
    }

    const monthlyInterest = annualInterest / 12;
    const payment =
      (principal *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, months)) /
      (Math.pow(1 + monthlyInterest, months) - 1);

    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2>Mortgage Calculator</h2>
      <form onSubmit={calculatePayment} style={styles.form}>
        <input
          type="number"
          placeholder="Loan Amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Loan Term (Years)"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Calculate</button>
      </form>
      {monthlyPayment !== null && (
        <div style={styles.result}>
          <h3>Monthly Payment: ₹{monthlyPayment}</h3>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontFamily: "Arial",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
  },
};

export default MortgageCalculator;

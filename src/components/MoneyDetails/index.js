// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {income, Balance, Expense} = props

  return (
    <div className="MoneyDetailsContainer">
      <div className="Container balance">
        <div className="balanceSection">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="img"
          />
          <div className="Details">
            <p>Your Balance</p>
            <h4>RS. {Balance}</h4>
          </div>
        </div>
      </div>
      <div className=" Container income">
        <div className="balanceSection">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="img"
          />
          <div className="Details">
            <p>Your Income</p>
            <h4>RS. {income}</h4>
          </div>
        </div>
      </div>
      <div className=" Container savings">
        <div className="balanceSection">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="img"
          />
          <div className="Details">
            <p>Your Expenses</p>
            <h4>RS. {Expense}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

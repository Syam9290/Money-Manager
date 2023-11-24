import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    income: '',
    type: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeIncome = event => {
    this.setState({income: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onsubmitForm = event => {
    const {income, type, title} = this.state
    event.preventDefault()

    const newHistoryList = {
      id: uuidv4(),
      income,
      type,
      title,
      isDel: false,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistoryList],
    }))
  }

  delHistoryItem = id => {
    const {historyList} = this.state
    console.log(historyList)

    const filterHistoryList = historyList.filter(eachItem => eachItem.id !== id)

    this.setState({historyList: filterHistoryList})
  }

  income = () => {
    const {historyList} = this.state

    let incomeAmount = 0

    historyList.forEach(eachItem => {
      if (eachItem.type === 'INCOME') {
        incomeAmount += parseInt(eachItem.income)
      }
    })
    return incomeAmount
  }

  expense = () => {
    const {historyList} = this.state

    let expenseAmount = 0

    historyList.forEach(eachItem => {
      if (eachItem.type !== 'INCOME') {
        expenseAmount += parseInt(eachItem.income)
      }
    })
    return expenseAmount
  }

  Balance = () => {
    const {historyList} = this.state

    let incomeAmount = 0
    let expenseAmount = 0
    let BalanceAmount = 0

    historyList.forEach(eachItem => {
      if (eachItem.type === 'INCOME') {
        incomeAmount += parseInt(eachItem.income)
      } else {
        expenseAmount += parseInt(eachItem.income)
      }
    })
    BalanceAmount = incomeAmount - expenseAmount

    return BalanceAmount
  }

  render() {
    const {historyList} = this.state

    const Income = this.income()

    const Expense = this.expense()

    const Balance = this.Balance()

    console.log(Income)

    return (
      <div className="bgContainer">
        <div className="userDetailsSection">
          <h2>Hi Richard</h2>
          <p>
            Welcome back to your <span className="blue">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={Income} Expense={Expense} Balance={Balance} />
        <div className="bottomSection">
          <form className="addTransaction" onSubmit={this.onsubmitForm}>
            <h2>Add Transaction</h2>
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <br />
            <input
              type="text"
              id="title"
              className="input"
              onChange={this.onChangeTitle}
            />
            <br />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <br />
            <input
              type="text"
              id="amount"
              className="input"
              onChange={this.onChangeIncome}
            />
            <br />
            <label htmlFor="type" className="label">
              TYPE
            </label>
            <br />
            <select id="type" className="input" onChange={this.onChangeType}>
              {transactionTypeOptions.map(eachItem => (
                <option value={eachItem.displayText} id={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <br />
            <button type="submit" className="addBtn">
              Add
            </button>
          </form>
          <form className="historyContainer">
            <h2>History</h2>
            <ul className="listContainer">
              <li className="listItemContainer">
                <div className="ItemContainer">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </div>
              </li>
              {historyList.map(eachItem => (
                <TransactionItem
                  item={eachItem}
                  delHistoryItem={this.delHistoryItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

export default MoneyManager

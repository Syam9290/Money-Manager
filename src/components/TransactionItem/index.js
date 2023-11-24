// Write your code here

import './index.css'

const TransactionItem = props => {
  const {item, delHistoryItem} = props
  const {title, income, type, id} = item

  const delItem = () => {
    delHistoryItem(id)
  }

  return (
    <li className="HistoryItemContainer">
      <p>{title}</p>
      <p>{income}</p>
      <p>{type}</p>
      <button type="button" className="delBtn" onClick={delItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delimg"
        />
      </button>
    </li>
  )
}

export default TransactionItem

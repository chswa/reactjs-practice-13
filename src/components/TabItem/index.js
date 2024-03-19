// Write your code here

const TabItem = props => {
  const {tabItem} = props
  const {displayText} = tabItem
  return (
    <li className="tab-items-container">
      <button className="button">{displayText}</button>
    </li>
  )
}

export default TabItem

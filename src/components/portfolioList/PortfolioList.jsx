import "./portfolioList.scss"

{/*this is a sepetate component to use inside Portfolio.jsx */}
export default function PortfolioList({id, tabName, active, setSelected}) {
  return (
    <li className={active? 'portfolioList active': 'portfolioList'} onClick={() => setSelected(tabName.id)}>{tabName.title}</li>
  )
}

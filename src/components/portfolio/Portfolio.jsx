import "./portfolio.scss"
import {useState, useEffect} from 'react'
import PortfolioList from "../portfolioList/PortfolioList"
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,                    
  designPortfolio,
  contentPortfolio
} from "../../data"

{/*data is the main state which  is mapped to give out specific portfolio lists, data is selected by
 state called selected as the switch cases defined inside useEffect hook which render when selected state changes. tablist constant is not that important
it is for creating list items elements without repetitive work.To perform this PortfolioList component is 
created somewhere else and imported into here*/}

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] =  useState([])
  const tabList = [
    {id: 'featured', title: 'Featured'},
    {id: 'webApp', title: 'Web App'},
    {id: 'mobileApp', title: 'Mobile App'},
    {id: 'design', title: 'Design'},
    {id: 'content', title: 'Content'}
  ]
  useEffect(() => {
    switch (selected) {
      case 'featured' :
        setData(featuredPortfolio);
        break;
      
      case 'webApp' :
        setData(webPortfolio);
        break;
      case 'mobileApp' :
        setData(mobilePortfolio);
        break;
  
      case 'design' :
        setData(designPortfolio);
        break;
  
      case 'content' :
        setData(contentPortfolio);
        break;
    }
  }, [selected])
  
{/*Inside wrapper is all three parts-the heading, the list items which will display horizontally and act like a
menu bar and lastly the portfolio items displayed flex and can be changed according which you selected in items menu
how data is fetched has already decribed above */}
  return (
    <div id='portfolio'>
      <div className="wrapper">
        <h1>Portfolio</h1>
        <ul>
          {tabList.map((tabName) => {
            return (<PortfolioList id={tabName.id} tabName={tabName} active={tabName.id === selected} setSelected={setSelected} />)  
          })}
        </ul>
        <div className="flex-container">
          {data.map((d) => {
            return (
              <div className="item">
                <img src={d.img} alt="" />
                <div className='overlay'>
                  <div className="text">{d.title}</div>
                </div>
              </div>
            )
          })}  
        </div>
      </div>
    </div>
  )
}

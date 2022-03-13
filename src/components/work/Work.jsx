import "./work.scss"
import {useState} from "react"

export default function Work() {
  const [currentSlider, setCurrentSlider] = useState(0)
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  {/*the state need this function to actually work as expected this add logic to go back to start when the end 
  item is displaying and nowhere left to go */}
  const handleSlide = (way) => {
    if (way === 'left') {
      if (currentSlider > 0) {
        setCurrentSlider(currentSlider-1)
      }
      else {
        setCurrentSlider(2)
      }
    } else {
      if (currentSlider < 2) {
        setCurrentSlider(currentSlider+1)
      }
      else {
        setCurrentSlider(0)
      } 
    }
  }

  {/*By mapping over data it actually created three items but only one item will be on the screen along with two arrows 
  on left and right.The other two items is there off the screen and will be shown when the current one is moved the same distance 
for one screen so that's how it works of couse there is a state to decide which one should be displayed 
in this logic the most important is the inline style inside container which defines to move the item for the same 
distance as the screen width so that the hidden one will show up*/}
  return (
    <div id='work'>
      <div className="slider">
        {data.map((d) => {
          return (
        <div className="container" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imageContainer">
                  <img src={d.icon} alt="mobile" />
                </div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className='right'>
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>)})}
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={() => handleSlide('left')}/>
      <img src="assets/arrow.png" className='arrow right' alt="" onClick={() => handleSlide()} />
    </div>
  )
}

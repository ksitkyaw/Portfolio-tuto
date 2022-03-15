import "./contact.scss"
import { useState, useEffect } from 'react'

export default function Contact() {
  const [inputMail, setInputMail] = useState('ironman.genius@gmail.com')
  const [textarea, setTextarea] = useState("hi! I want to hire you")
  const [send, setSend] = useState(false);

  {/*this useEffect is not cleared how it works at this moment but what it does is setting a state back to false 
  every three seconds after it has been set to true so the thing is submit success text will only be shown for three seconds */}
  useEffect(() => {
    const timer = setTimeout(() => {
      setSend(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [send]);

  {/*the handleSubmit function is executed when form submitting and it set some state to be true which will lead
  to show the hidden text */}
  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(!send);
  }

  {/*Contact section include two parts the left is just an image and the right is Contact form consisting of 
  email input and textarea input and a button but there also is a hidden text which will only be showned when 
  form submitting is successful */}
  return (
    <div id='contact'>
      <div className="wrapper">
        <div className="left">
          <img src='assets/shake.svg'></img>
        </div>
        <div className="right">
          <div className="rightContainer">
            <h1>Contact.</h1>
            <form onSubmit={handleSubmit}>
              <input className='mail' type='text' value={inputMail} onChange={(e) => setInputMail(e.target.value)} />
              <textarea className='textarea' value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>
              <button className='button' type='submit'>Send</button>
            </form>
            {send &&
              <p className='thank'>Thanks a lot.But I'm too rich to work for you.</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

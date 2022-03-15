import "./intro.scss"
import { init } from 'ityped'
import React, { useEffect, useRef } from 'react'

{/*the useEffect hook is the only interesting thing here.It used some external library called "ityped" and by 
importing it it create a typing effect on the text and the code also is customizable by setting backspeed, backdelay 
and some other key,value like that */}
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, { showCursor: true, strings: ['Developer', 'Programmer', 'Freaking GENIUS'] })
  }, [])

  {/*it only has two parts the image on the left and some text on the right, the text use flexbox to  position
the right also contain an arrow which is positioned by absolute positioning */}
  return (
    <div id='intro'>
      <div className="wrapper">
        <div className="left">
          <img src="assets/ironman.jpg" alt="picture of the developer" />
        </div>
        <div className="right">
          <div className="textGroup">
            <h2>Hi there! fellas</h2>
            <h1>I am Ironman.</h1>
            <h3>I am a filthy rich <span ref={textRef}></span></h3>
          </div>

          <a href='#portfolio'>
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

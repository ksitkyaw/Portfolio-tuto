import "./topbar.scss"
import { Person, Mail } from '@material-ui/icons'
import { useState } from 'react'

export default function Topbar() {
  const [menuStyle, setMenuStyle] = useState(false);

  return (
    <>
      <div className={menuStyle ? 'topbar active' : 'topbar'}>  {/* two className to decide betweeen two styles */}
        <div className='wrapper'>

          <div className='left'>
            <a href='#intro' className='logo'>genius.</a>

            <div className='itemContainer'>
              <Person className='icon' />
              <span>+959 111 222 333</span>
            </div>

            <div className='itemContainer'>
              <Mail className='icon' />
              <span>ironman.genius@gmail.com</span>
            </div>
          </div>
          <div className='right'>

            <div className='humburger' onClick={() => setMenuStyle(!menuStyle)}> {/* style change when clicking on it */}
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>

          </div>
        </div>

      </div>

      {/*conditional rendering but the div element always created but not shown according to default style, only shown with specific className*/}
      {true &&
        <div className={menuStyle ? 'sidebar active' : 'sidebar'}>
          <ul>
            <li><a href='#intro' onClick={() => setMenuStyle(!menuStyle)}>Home</a></li>
            <li><a href='#portfolio' onClick={() => setMenuStyle(!menuStyle)}>Portfolio</a></li>
            <li><a href='#testimonial' onClick={() => setMenuStyle(!menuStyle)}>Testimonial</a></li>
            <li><a href='#contact' onClick={() => setMenuStyle(!menuStyle)}>Contact</a></li>
            <li><a href='#work' onClick={() => setMenuStyle(!menuStyle)}>Work</a></li>
          </ul>
        </div>}
    </>
  )
}

import React from 'react';
import '../CSS/Footer.css'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';


function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="left">
          <h5> About this Application</h5>
          <p>We can add any items or list of items that needs to be completed with the help of the To-Do Application.</p>
          <p>Once the work regarding the item is completed, we can delete the item from the list.</p>
          <p>To add a new Item - Click on the + button.</p>
          <p>To delete an item - Click the button next to the corresponding Item.</p>
        </div>
        <div className="right">
          <h5>Contact Me</h5>
          <a href="https://in.linkedin.com/in/herschel-menezes-93abb6227"> <AiFillLinkedin size='2em' /> </a>
          <a href="https://github.com/TensaCoder"> <AiFillGithub size='2em' /> </a>
          <a href="mailto:herschel.menezes00@gmail.com"> <AiFillMail size='2em' /> </a>
        </div>
        <h6 id='footer-end'>@2022 Herschel Menezes</h6>
      </div>
    </>
  )
}

export default Footer
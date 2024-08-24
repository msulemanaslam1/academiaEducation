import React from 'react'
import './Newsletter.css'
import { IoIosSend } from 'react-icons/io';

const Newsletter = () => {
  return (
    <div className="newsLetter_con">
      <div className="newsText_con">
        <h3>Newsletter - Stay tune and get the latest update</h3>
        <p>Far far away, behind the word mountains</p>
      </div>
      <div className="input_con">
        <input type="email" name="" id="" placeholder='Enter Email Address' />
        <IoIosSend/>
        <hr />
      </div>
    </div>
  );
}

export default Newsletter

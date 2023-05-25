import React from 'react'
import {AiFillInstagram,AiFillYoutube,AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>MBA Burger Wala</h2>
            <p>We are trying to give you the best taste possible</p>
            <br />
            <em>We give attention to genuine feedback</em>
            <strong>All right received @mbaburgerwala</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href="https://youtube.com" target="_blank"><AiFillYoutube/></a>
            <a href="https://instagram.com/nishanth.aa" target="_blank"><AiFillInstagram/></a>
            <a href="https://github.com/nishanth019" target="_blank"><AiFillGithub/></a>
        </aside>
    </footer>
  )
}

export default Footer

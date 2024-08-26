import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return <footer  id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free To Reach Out! </p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <a href="mailto:jk956681@gmail.com">Gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email Icon" />
            <a href="https://www.linkedin.com/in/jayaprakash-raja/">Linkedin.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon" />
            <a href="https://github.com/JAYAPRAKASH-RAJA">Github.com</a>
        </li>
    </ul>
  </footer>
   
  
}

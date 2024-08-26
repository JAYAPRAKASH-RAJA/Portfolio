import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img  className={styles.aboutimage} src={getImageUrl("about/aboutImage.png")}
                    alt="working on progress" />
                <ul className={styles.aboutitems}>
                    <li className={styles.aboutitem}>
                        <img  src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutitemtext}>
                            <h3>Frontend Developer</h3>
                            <p>"Crafting immersive digital experiences through code and creativity as a frontend web developer." </p>
                        </div>
                    </li>
                    <li className={styles.aboutitem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                        <div className={styles.aboutitemtext}>
                            <h3>Backend Developer</h3>
                            <p>"Driving backend innovation to optimize performance and scalability, ensuring seamless functionality behind the scenes." </p>
                        </div>
                    </li>
                    {/* <li className={styles.aboutitem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="web icon" />
                        <div className={styles.aboutitemtext}>
                            <h3>Web Designer</h3>
                            <p>"Transforming visions into visually stunning digital experiences through intuitive design and creative flair as a web designer."." </p>
                        </div>
                    </li> */}
                </ul>
            </div>
        </section>
    )
}


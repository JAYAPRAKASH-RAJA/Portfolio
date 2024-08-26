import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi,I'm Jayaprakash</h1>
                <h1 className={styles.role}>Web Developer</h1>
                <p className={styles.description}>"Passionate web developer eager to contribute in real time projects.
                    Dedicated to continuous learning and excited to contribute to innovative web development projects.
                    Driven web developer with a knack for turning creative ideas into engaging digital experiences.
                </p>
                <a className={styles.contactbtn} href="mailto:jk956681@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroimg} src={getImageUrl("hero/heroImage.png")} alt="hero image of me" />
            <div className={styles.topblur}></div>
            <div className={styles.bottomblur}></div>
        </section>
    )
}


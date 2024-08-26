import React from 'react';
import styles from "./Expertise.module.css";
import ExpertiseData from "../../data/skills.json";
import { getImageUrl } from '../../utils';

export const Expertise = () => {
  return (
    <section className={styles.container} id='skills'>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.data} >
        {ExpertiseData.map((skill, id) => {
          return (
            <div className={styles.skill} key={id}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              <div className={styles.text}>
              <p >{skill.title}</p>
              </div>
            </div>
          )
        })}
      </div>
      {/* /* <ul>
          here after i can add experience 
        </ul> */ }

    </section>
  )
}


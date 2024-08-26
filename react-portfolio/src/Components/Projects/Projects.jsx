import React from 'react'
import styles from "./Projects.module.css"
import ProjectsData from "../../data/projects.json"
import { ProjectCard } from '../ProjectCard/ProjectCard'

export const Projects = () => {
    return (
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.Projects}>
                {ProjectsData.map((pro, id) => {
                    return (
                       <ProjectCard key={id} project={pro}/>
                    )
                })}
            </div>
        </section>
    )



}


import styles from "./Carrossel.module.css"

import { useState, useEffect } from "react";

export interface Project {
    id: number,
    title: string,
    skills: string[],
    img: string
}

interface ICarrosselProps {
    projects: Project[]
}


export const Carrossel = ({ projects }: ICarrosselProps) => {

    const [currentProjectId, setCurrentProjectId] = useState(2);
    const [projectsView, setProjectsView] = useState<Project[]>([]);
    
    
    /* Criar função para renderizar apenas 3 projeto por vez em ordem 
       baseado em uma lista */
    const scrollCarroussel = () => {
        let currentProjects = projects.filter((proj) => {
            if (proj.id === currentProjectId) {
                return proj;
            } else if (proj.id === currentProjectId + 1) {
                return proj;
            }else if (proj.id === currentProjectId - 1) {
                return proj;
            }
        })
        
        if(currentProjectId === projects.length){ // Concatenando o fim da lista com o início dela
            currentProjects = [...currentProjects, projects[0]]
        }else if (currentProjectId === 1){ // Concatenando o início da lista com o fim dela
            currentProjects = [projects[projects.length-1], ...currentProjects]
        }

        setProjectsView(currentProjects)
    }
    
    const backProject = () => {
        // Juntando o início da lista com o fim
        if(currentProjectId === 1){
            return setCurrentProjectId(projects.length)
        }

        setCurrentProjectId(currentProjectId - 1)
    }

    const nextProject = () => {
        // Juntando o fim da lista com o inicio
        if(currentProjectId === projects.length){
            return setCurrentProjectId(1)
        }

        setCurrentProjectId(currentProjectId + 1)
    }

    useEffect(() => {
        scrollCarroussel()
    }, [currentProjectId])

    useEffect(() => {
        const actionButtons = document.querySelectorAll("button")
        const nodeSlides = document.getElementsByClassName("slide")
        console.log(actionButtons)
        console.log("slidesNode: ", nodeSlides)

        actionButtons[1].addEventListener("click", () => {
            console.log("cliclouoadsjf4444");
            console.log(Array.from(nodeSlides))
            Array.from(nodeSlides).forEach((item) => {
                item.className += " next_project"
            })
        })
    }, [])

    return (
        <section className={styles.carrossel}>
            <button onClick={backProject}>Back</button>

            {projectsView.map((project) => (
            <div className={`slide ${styles.project_item}`} id={project.id === currentProjectId ? styles.current_project : ""} key={project.id}>
                <h2>{project.title}</h2>
                <ul>
                    {project.skills.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <img src={project.img} alt="img-project" />
            </div>
            ))}

            

            <button onClick={nextProject}>Next</button>
        </section>
    )
}
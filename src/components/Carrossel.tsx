import styles from "./Carrossel.module.css"

import { useState, useEffect, useRef } from "react";

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

    const projectItem = useRef(null)

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

        actionButtons[1].addEventListener("click", () => {
            // projectItem!.style.animation = "rotacao 1s normal ease;"
            console.log(projectItem as unknown as ChildNode)
            let item = projectItem as unknown as ChildNode
            projectItem.current?.focus()
            
        })
    }, [])

    return (
        <section className={styles.carrossel}>
            <button onClick={backProject}>Back</button>

            {projectsView.map((project) => (
            <div className={`slide ${styles.project_item} ${project.id === currentProjectId ? styles.current_project : ""}`} ref={projectItem} key={project.id}>
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
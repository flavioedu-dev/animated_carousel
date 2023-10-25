import './App.css'
import { Carrossel, Project } from './components/Carrossel'

function App() {

  const projects: Project[] = [
    {
      id: 1,
      title: "Lorem 1",
      skills: ["HTML", "CSS", "Javascript"],
      img: "https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg"
    },
    {
      id: 2,
      title: "Lorem 2",
      skills: ["HTML", "CSS", "Javascript"],
      img: "https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg"
    },
    {
      id: 3,
      title: "Lorem 3",
      skills: ["HTML", "CSS", "Javascript"],
      img: "https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg"
    },
    {
      id: 4,
      title: "Lorem 4",
      skills: ["HTML", "CSS", "Javascript"],
      img: "https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg"
    },
    {
      id: 5,
      title: "Lorem 5",
      skills: ["HTML", "CSS", "Javascript"],
      img: "https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg"
    }

  ]

  return (
    <>
    <Carrossel projects={projects} />
    </>
  )
}

export default App

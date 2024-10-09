import projects from "./projects"
import { useParams } from "react-router-dom"

export default function ProjectPage() {
    const id = useParams().id
    const project = projects[id - 1]
    return (
        <>
            <section className="intro item-intro">
                <h1 className="section__title section__title--intro">
                    The title <strong>of my project</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A short subtitle</p>
                <img className="intro__img" src={project.image} alt="pr" />
            </section>

            <div className="portfolio-item-individual">
                <p>{project.description}</p>
            </div>
        </>
    )
}
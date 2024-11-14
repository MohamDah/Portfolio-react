import screen from "./images/screen.png"
import calc from "./images/calculator.png"
import tenzies from "./images/tenzies.png"
import tba from "./images/tba.png"
import projects from "./projects"

export default function Work() {
    const workEls = projects.map(project => (
        <a key={project.id} href={project.url} className="portfolio__item">
                <p className="portfolio__name">{project.name}</p>
                <img src={project.image} alt={project.name} className="portfolio__img" />
        </a>
    ))
    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my deployed React projects</p>
            <p className="section__subtitle--work section__subtitle--work-sub">More undeployed Django projects on my <a target="_blank" href="https://github.com/MohamDah?tab=repositories">GitHub</a></p>

            <div className="portfolio">
                {workEls}
            </div>
        </section>
    )
}
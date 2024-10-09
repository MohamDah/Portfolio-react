import screen from "./images/screen.png"
import calc from "./images/calculator.png"
import tenzies from "./images/tenzies.png"
import tba from "./images/tba.png"
import projects from "./projects"

export default function Work() {
    const workEls = projects.map(project => (
        <a key={project.id} href={project.url} className="portfolio__item">
                <img src={project.image} alt={project.name} className="portfolio__img" />
        </a>
    ))
    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div className="portfolio">
                {workEls}

                {/* <a href="https://github.com/me50/MohamDah" className="portfolio__item">
                    <img src={tba} alt="" className="portfolio__img" />
                </a> */}

            </div>
        </section>
    )
}
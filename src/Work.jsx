import screen from "./images/screen.png"
import calc from "./images/calculator.png"
import tenzies from "./images/tenzies.png"
import tba from "./images/tba.png"

export default function Work() {
    return (
        <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My work</h2>
        <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

        <div className="portfolio">
            
            <a href="https://mohamdah-calculator.netlify.app/" className="portfolio__item">
                <img src={calc} alt="calculator app" className="portfolio__img" />
            </a>

            
            <a href="https://mohamdah-tenzies.netlify.app/" className="portfolio__item">
                <img src={tenzies} alt="" className="portfolio__img" />
            </a>

            
            <a href="https://github.com/me50/MohamDah" className="portfolio__item">
                <img src={tba} alt="" className="portfolio__img" />
            </a>

            

        </div>
    </section>
    )
}
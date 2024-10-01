import selfiealu from "./images/frontOfALU.jpg"

export default function About() {
    return (
        <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Web Developer based in Kigali</p>

        <div className="about-me__body">
            <p>Hello. My name is Mohamed. I come from Sudan. I've been interested in programming before finishing highschool. I did two online 
                online courses called CS50 and CS50w in 3 months at the end of 2022 right after graduating highschool 
                I started going to a university in Sudan for CS in January 2023.
            </p>
            <p>Unfortunately, everything came to a halt when a war broke out in the country in April 2023. It took a 
                long time for me and my family to get back on our feet after losing everything we had after fleeing the 
                capital to my parents' home village, leaving our home and most of our belongings behind. 
            </p>
            <p>In January 2024, I managed to get accepted in ALU's May 2024 intake after applying online over 8 months 
                before. I traveled to Kigali by myself, and have started studying. I finally got in suitable environment
                to be able to continue my passion of coding</p>
            <p>I've been focusing on improving my frontend skills, because CS50 mainly focused on backend development 
                with Django. I'm always trying to improve and learn new things.
            </p>
        </div>

        <img className="about-me__img" src={selfiealu} alt="Mohamed selfie with grass in the background" />
    </section>
    )
}
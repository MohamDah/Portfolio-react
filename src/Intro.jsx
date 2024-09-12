import selfiealu from "./images/selfiealu.jpg"

export default function Intro() {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hello! I am <strong>Mohamed Dahab</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Full-Stack Dev</p>
            <img className="intro__img" src={selfiealu} alt="Selfie of me with grassy background" />
        </section>
    )
}
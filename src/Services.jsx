

export default function Services() {
    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">My Skills</h2>
            <div className="services">
            <div className="service">
                <h3>Front-End Development</h3>
                <p>I have a strong command of HTML and CSS, allowing me to effectively translate UI/UX designs into functional and visually appealing web pages.</p>
            </div> 

            <div className="service">
                <h3>JavaScript Interactivity</h3>
                <p>I excel in creating interactive and dynamic web applications using JavaScript, particularly with frameworks like React and React-Router.</p>
            </div> 

            <div className="service">
                <h3>TailwindCSS</h3>
                <p>I leverage TailwindCSS to build responsive, accessible, and user-friendly interfaces with ease.</p>
            </div> 
            </div> 

            <a href="#work" className="btn">See My Work</a>
        </section>
        )
}
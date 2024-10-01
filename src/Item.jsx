
export default function Item() {
    return (
        <>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    The title <strong>of my project</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A short subtitle</p>
                <img className="intro__img" src="images/screen.png" alt="pr" />
            </section>

            <div className="portfolio-item-individual">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
                <img src="images/portfolio.png" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.</p>
            </div>
        </>
    )
}
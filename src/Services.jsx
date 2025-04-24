

export default function Services() {
    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">My Skills</h2>
            <div className="services">
                <div className="service">
                    <h3>🚀 Frontend Development with React, TypeScript & Tailwind CSS</h3>
                    <p>I build clean, responsive web interfaces using React, TypeScript, and Tailwind CSS. From startups to internships, I’ve worked on real-world projects where performance, design, and user experience matter. I focus on writing modular, maintainable code that brings ideas to life.</p>
                </div>

                <div className="service">
                    <h3>⚙️ State Management & API Integration</h3>
                    <p>I know how to handle data — and make it work smoothly in the frontend. I use tools like TanStack Query for efficient API fetching and Zustand for global state management. Whether it’s syncing with REST APIs or optimizing app performance, I make sure the frontend stays fast and reliable.</p>
                </div>

                <div className="service">
                    <h3>💻 Solid Programming Foundations</h3>
                    <p>I’ve built a strong base in software development, with practical experience in React and Python, and a solid understanding of algorithms, asynchronous logic, and modern web tooling. I’m always learning, iterating, and writing code that solves real problems.</p>
                </div>
            </div>

            <a href="#work" className="btn">See My Work</a>
        </section>
    )
}
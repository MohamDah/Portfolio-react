import Header from "./Header"
import Intro from "./Intro"
import Services from "./Services"
import About from "./About"
import Work from "./Work"
import Footer from "./Footer"

export default function App() {
    return (
        <div className="container">
            <Header />
            <Intro />
            <Services />
            <About />
            <Work />
            <Footer />
        </div>
    )
}
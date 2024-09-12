import Header from "./Header"
import Intro from "./Intro"
import Services from "./Services"
import Work from "./Work"
import Footer from "./Footer"

export default function App() {
    return (
        <div className="container">
            <Header />
            <Intro />
            <Services />
            <Work />
            <Footer />
        </div>
    )
}
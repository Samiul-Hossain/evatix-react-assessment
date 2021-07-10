import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Body />
            <Footer />
        </>
    );
}

export default App;

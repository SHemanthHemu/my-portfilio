import "./App.css";
import About from "./comonents/About";
import Home from "./comonents/Home";
import Navbar from "./comonents/Navbar";
import SocialLinks from "./comonents/SocialLinks";
import Portfolio from "./comonents/Portfolio.jsx"
import Expirence from "./comonents/Expirence";
import Contact from "./comonents/Contact";

function App() {
  const links = [
    {
      id: 3,
      link: "portfolio",
    },
  ]
  return (
    <>
      <Navbar />
      <div className="pt-20 md:pt-0">
        <Home data={links} />
      </div>
      <About />
      <Portfolio />
      <Expirence />
      <Contact/>
      <SocialLinks />
    </>
  );
}

export default App;

import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/introduction/Intro";
import Navbar from "./components/Navbar/Navbar";
import PortFolioList from "./components/portfolioList/PortfolioList";
import Skill from "./components/Skill/Skill";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context/context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Navbar />
      <Intro />
      <About />
      <PortFolioList />
      <Skill/>
      <Contact />
    </div>
  );
};

export default App;

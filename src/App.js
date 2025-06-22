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
        backgroundColor: darkMode ? "rgb(15, 22, 36)" : "rgb(237, 242, 248)",
        color: darkMode && "white",
      }}>
      <Toggle />
      <Navbar />
      <Intro />
      <br />
      <About />
      <Skill />
      <PortFolioList />
      <Contact />
    </div>
  );
};

export default App;

import "./portfoliolist.css";
import { products } from "../../data/data";
import PortFolio from "../portfolio/Portfolio";
const PortFolioList = () => {
  return (
    <div className="pl" id="portfoliolist">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc"></p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <>
            <PortFolio key={item.id} img={item.img} link={item.link} ProjectName={item.ProjectName} description={item.des} techstack={item.Tech}/>
          </>
        ))}
      </div>
    </div>
  );
};

export default PortFolioList;

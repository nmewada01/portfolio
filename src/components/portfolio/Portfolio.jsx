import "./portfolio.css";

const PortFolio = ({ img, link1,link2, ProjectName, description, techstack }) => {
  return (
    <>
      
        <div className="p">
        <p><a className="deploy_link" href={link2} target="_blank" rel="noreferrer">Live</a></p>

          <div className="p-browser">
            <div className="p-circle">
              <h2 style={{ color: "#59b256", textDecoration: "underline" }}>
                {ProjectName}
              </h2>
            </div>
            <div className="p-circle">{description}</div>
            <div className="p-circle">
              <p className="p-tech">Tech Stack: {techstack}</p>
            </div>
          </div>
          <a href={link1} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img" />
          </a>
        </div>

    </>
  );
};

export default PortFolio;

import "./portfolio.css";

const PortFolio = ({ img, link, ProjectName, description, techstack }) => {
  return (
    <>
      
        <div className="p">
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
          <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img" />
          </a>
        </div>
    </>
  );
};

export default PortFolio;

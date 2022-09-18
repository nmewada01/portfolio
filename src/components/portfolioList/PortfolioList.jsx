import "./portfoliolist.css";
import { products } from "../../data/data";
import PortFolio from "../portfolio/Portfolio";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
const PortFolioList = () => {
  return (
    <Box id="portfoliolist" m="1rem">
      <Box>
        <Heading width={"95%"} m="auto">
          My <span style={{ color: "#59b256" }}>Projects</span>
        </Heading>
        <Text></Text>
      </Box>
      <SimpleGrid columns={[1, 2, 2, 3]} width={"95%"} m="auto">
        {products.length > 0 &&
          products.map((item) => (
            <div key={item.id}>
              <PortFolio
                id={item.id}
                img={item.img}
                link2={item.link2}
                link1={item.link1}
                ProjectName={item.ProjectName}
                description={item.des}
                techstack={item.Tech}
              />
            </div>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default PortFolioList;

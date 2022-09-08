import {
  Box,
  Code,
  Flex,
  HStack,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import "./portfolio.css";
import { FaEye, FaGithub } from "react-icons/fa";
const PortFolio = ({
  img,
  link1,
  link2,
  ProjectName,
  description,
  techstack,
  key
}) => {
  const [isLargerThan] = useMediaQuery('(min-width: 750px)')

  return (
    <>
      <Box
      key={key}
        w={isLargerThan?"85%":"95%"}
        h={"50vh"}
        borderRadius="10px 10px 0px 0px"
        overflow={"hidden"}
        bgImage={"linear-gradient(teal,skyblue,lightblue)"}
        my={"20px"}
        mx={"10px"}
        boxShadow={'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}
      >
        <Flex
          justify={"center"}
          gap={"1rem"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Text>
            <a
              className="deploy_link"
              href={link2}
              target="_blank"
              rel="noreferrer"
            >
              <Box mx={"5"} my={"2"}>
                <FaEye />
              </Box>
            </a>
          </Text>
          <Text>
            <a
              className="deploy_link"
              href={link1}
              target="_blank"
              rel="noreferrer"
            >
              <Box mx={"5"} my={"2"}>
                <FaGithub />
              </Box>
            </a>
          </Text>
        </Flex>
        <Box
          h={isLargerThan?"10vh":"15vh"}
          bg={"grey"}
          color={'whitesmoke'}
          position={"sticky"}
          zIndex={"2"}
        >
          <Box>
            <Text
              color={"#59b256"}
              fontSize={"lg"}
              fontWeight={"semibold"}
              textDecoration={"underline"}
            >
              {ProjectName}
            </Text>
          </Box>
          <Box>{description}</Box>
          <Box>
            <Text> <Code color={'green'}>Tech Stack:</Code> {techstack}</Text>
          </Box>
        </Box>

        <Image
          display={"block"}
          m="auto"
          my={"6"}
          w={isLargerThan?"80%":"50%"}
          _hover={{ transform: "translateX(-100%)" }}
          transition="all 10s ease"
          src={img}
          alt=""
          className="p-img"
        />
      </Box>
    </>
  );
};

export default PortFolio;

import { Box, Card, Divider, HStack, Heading, Icon } from "@chakra-ui/react";
import { FaBehance, FaDribbble, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Card mt={10} mb={5} marginX={5}>
      <Box width="100%" height={40}>
        <Heading
          as="h1"
          fontSize="2xl"
          my={5}
          textAlign={"center"}
          color="gray.600"
        >
          Andreu David Modise
        </Heading>
        <HStack justifyContent={"center"} spacing={7}>
          <a href="https://github.com/DreuDavids">
            <Icon key="git" as={FaGithub} color="gray.500" boxSize={10}></Icon>
          </a>
          <a href="https://dribbble.com/AndreuMod">
            <Icon
              key="dribbble"
              as={FaDribbble}
              color="gray.500"
              boxSize={10}
            ></Icon>
          </a>
          <a href="https://behance.net/AndreuDavids">
            <Icon
              key="behance"
              as={FaBehance}
              color="gray.500"
              boxSize={10}
            ></Icon>
          </a>
        </HStack>
      </Box>
    </Card>
  );
};

export default Footer;

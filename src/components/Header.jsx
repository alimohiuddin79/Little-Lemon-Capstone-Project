import {
  Box,
  IconButton,
  Image,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import SideNav from "./SideNav";
import { useState } from "react";

const Header = () => {
  const [display, setDisplay] = useState('-240px');
  return (
    <Box
      as="header"
      maxWidth={"844px"}
      width={"100%"}
      minHeight={"100px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={['1.2em', '4em', 0]}
    >
      <Image src="/images/Asset 16@4x.png" alt="logo" w={"148px"} />
      <Box as="nav">
        <IconButton
          as={"button"}
          size={"lg"}
          padding={3}
          aria-label="burger-menu"
          icon={<Image src="/images/icon _hamburger menu.svg" />}
          display={["block", "block", "none", "none"]}
          onClick={() => setDisplay(0)}
        />
        <SideNav display={display} setDisplay={setDisplay} />
        <UnorderedList
          listStyleType={"none"}
          display={["none", "none", "flex", "flex"]}
          gap={"20px"}
        >
          <ListItem>
            <Link fontSize={18} fontWeight={"medium"} color={"highlight-2"}>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={18} fontWeight={"medium"} color={"highlight-2"}>
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={18} fontWeight={"medium"} color={"highlight-2"}>
              Menu
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={18} fontWeight={"medium"} color={"highlight-2"}>
              Reservation
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={18} fontWeight={"medium"} color={"highlight-2"}>
              Order online
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={18} fontWeight={"medium"} color={"highlight-2"}>
              Login
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Header;

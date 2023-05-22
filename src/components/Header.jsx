import {
  Box,
  Button,
  IconButton,
  Image,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SideNav from "./SideNav";
import { useState } from "react";

const Header = () => {
  const [display, setDisplay] = useState("-240px");
  return (
    <Box
      as="header"
      maxWidth={"844px"}
      width={"100%"}
      minHeight={"100px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={["1.2em", "4em", 0]}
    >
      <RouterLink to={"/"}>
        <Image src="/images/Asset 16@4x.png" alt="logo" w={"148px"} />
      </RouterLink>
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
          alignItems={"center"}
          gap={"20px"}
        >
          <ListItem fontSize={18} fontWeight={"medium"} color={"highlight-2"}>
            <RouterLink to={"/"}>Home</RouterLink>
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
            <RouterLink to={"/order-online"}>
              <Button
                as={"button"}
                rounded={"16px"}
                bg={"primary-1"}
                color={"highlight-1"}
                paddingX={"0.8em"}
                paddingY={"0.6em"}
                _hover={{ bg: "white", color: "#333333" }}
              >
                Order online
              </Button>
            </RouterLink>
          </ListItem>
          <ListItem>
            <Link fontSize={18} fontWeight={"medium"} color={"primary-1"}>
              <Image src="/images/Cart.svg" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Header;

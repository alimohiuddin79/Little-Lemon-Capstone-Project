import {
  Box,
  Flex,
  IconButton,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

// eslint-disable-next-line react/prop-types
const SideNav = ({ display, setDisplay }) => {
  return (
    <Box
      as="aside"
      position={"fixed"}
      top={0}
      right={[display, display, '-240px']}
      width={"240px"}
      height={"100%"}
      paddingX={"0.6em"}
      paddingY={"1.2em"}
      background={"white"}
      zIndex={40}
      display={['flex', 'flex', "none"]}
      flexDirection={"column"}
      rowGap={"2.6em"}
      transition={"all"}
      transitionDuration={'300ms'}
    >
      <Flex width={"100%"} justifyContent={"flex-end"}>
        <IconButton
          aria-label="close icon"
          size={"lg"}
          icon={<CloseIcon />}
          onClick={() => setDisplay('-240px')}
        />
      </Flex>
      <UnorderedList
        listStyleType={"none"}
        display={"flex"}
        flexDirection={"column"}
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
  );
};

export default SideNav;

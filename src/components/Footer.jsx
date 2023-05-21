import {
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex bg={"primary-1"} justifyContent={"center"} width={"100%"} flexWrap={'wrap'}>
      <Flex
        flexWrap={'wrap'}
        paddingY={"4em"}
        paddingX={['1.2em', '4em', 0]}
        maxWidth={"844px"}
        width={"100%"}
        columnGap={"1.4em"}
        justifyContent={["stretch", "stretch", "space-between"]}
      >
        <Flex
          flexGrow={[0, 0, 1, 1]}
          flexBasis={["100%", "35%", "auto"]}
          order={[4, 4, 1, 1]}
          justifyContent={["flex-start", "flex-end", "flex-start"]}
        >
          <Image
            src="/images/Asset 9@4x.png"
            alt="footer-logo"
            maxWidth={"120px"}
            maxHeight={"220px"}
            alignSelf={'center'}
          />
        </Flex>
        <Flex
          flexDirection={"column"}
          rowGap={"2em"}
          paddingY={"0.6em"}
          flexGrow={[0, 0, 1, 1]}
          flexBasis={["100%", "30%", "auto"]}
          order={[1, 1, 2, 2]}
        >
          <Heading
            as={"h3"}
            color={"secondary-2"}
            fontSize={"1.2em"}
            fontWeight={"bold"}
          >
            Navigation
          </Heading>
          <UnorderedList
            as="nav"
            margin={0}
            listStyleType={"none"}
            display={"flex"}
            flexDirection={"column"}
            rowGap={"0.2em"}
          >
            <ListItem>
              <Link
                color={"highlight-1"}
                fontSize={"1.2em"}
                fontWeight={"medium"}
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color={"highlight-1"}
                fontSize={"1.2em"}
                fontWeight={"medium"}
              >
                About
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color={"highlight-1"}
                fontSize={"1.2em"}
                fontWeight={"medium"}
              >
                Menu
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color={"highlight-1"}
                fontSize={"1.2em"}
                fontWeight={"medium"}
              >
                Reservations
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color={"highlight-1"}
                fontSize={"1.2em"}
                fontWeight={"medium"}
              >
                Order online
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color={"highlight-1"}
                fontSize={"1.2em"}
                fontWeight={"medium"}
              >
                Login
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>

        <Flex
          flexDirection={"column"}
          rowGap={"2em"}
          paddingY={"0.6em"}
          flexGrow={[0, 0, 1, 1]}
          flexBasis={["100%", "50%", "auto"]}
          order={[2, 2, 3, 3]}
        >
          <Heading
            as={"h3"}
            color={"secondary-2"}
            fontSize={"1.2em"}
            fontWeight={"bold"}
          >
            Contact
          </Heading>
          <UnorderedList
            margin={0}
            listStyleType={"none"}
            display={"flex"}
            flexDirection={"column"}
            rowGap={"0.2em"}
          >
            <ListItem>
              <Link
                color={"highlight-1"}
                fontSize={"1.2em"}
                fontWeight={"medium"}
              >
                Address
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color={"highlight-1"}
                fontSize={"1.2em"}
                fontWeight={"medium"}
              >
                Phone number
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color={"highlight-1"}
                fontSize={"1.2em"}
                fontWeight={"medium"}
              >
                Email
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>

        <Flex
          flexDirection={"column"}
          rowGap={"2em"}
          paddingY={"0.6em"}
          flexGrow={[0, 0, 1, 1]}
          flexBasis={["100%", "50%", "auto"]}
          order={[3, 3, 4, 4]}
        >
          <Heading
            as={"h3"}
            color={"secondary-2"}
            fontSize={"1.2em"}
            fontWeight={"bold"}
          >
            Social media links
          </Heading>
          <UnorderedList
            margin={0}
            listStyleType={"none"}
            display={"flex"}
            flexDirection={"column"}
            rowGap={"0.2em"}
          >
            <ListItem>
              <Link
                color={"highlight-1"}
                fontSize={"1.2em"}
                fontWeight={"medium"}
              >
                Facebook
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color={"highlight-1"}
                fontSize={"1.2em"}
                fontWeight={"medium"}
              >
                Instagram
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color={"highlight-1"}
                fontSize={"1.2em"}
                fontWeight={"medium"}
              >
                Whatsapp
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;

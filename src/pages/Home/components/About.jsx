import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex justifyContent={"center"}>
      <Flex
        flexWrap={"wrap"}
        maxWidth={"844px"}
        width={"100%"}

        paddingY={"3em"}
        paddingX={["1.2em", "4em", 0]}
        rowGap={"1.6em"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          flex={1}
          height={"100%"}
          order={[2, 2, 1, 1]}
        >
          <Box display={"flex"} flexDirection={"column"} rowGap={"1em"}>
            <Heading
              as={"h1"}
              fontSize={"4em"}
              fontWeight={"bold"}
              color={"primary-1"}
            >
              Little Lemon
            </Heading>
            <Heading
              as={"h2"}
              fontSize={"2.5em"}
              fontWeight={"normal"}
              color={"highlight-2"}
            >
              Chicago
            </Heading>
            <Text
              as={"p"}
              marginTop={"6"}
              fontSize={"1.2em"}
              fontWeight={"medium"}
              color={"highlight-2"}
            >
              We are a family owned Mediterranean restuarant, focused on
              traditional recipes served with a modern twist.
            </Text>
          </Box>
        </Box>

        <Box
          flexGrow={1}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"flex-start"}
          flexBasis={['100%', '100%', "50%"]}
          order={[1, 1, 2, 2]}
        >
          <Image src="/images/about image.png" alt="about-image" zIndex={['auto', 'auto', 20]} minWidth={'240px'}  />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;

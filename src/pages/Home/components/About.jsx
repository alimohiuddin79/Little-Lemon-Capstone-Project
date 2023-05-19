import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
  } from "@chakra-ui/react";
  
  const Hero = () => {
    return (
      <Flex justifyContent={"center"}>
        <Flex
          maxWidth={"844px"}
          width={"100%"}
          paddingY={"3em"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            flex={1}
            height={"100%"}
          >
            <Box display={"flex"} flexDirection={"column"} rowGap={"1em"}>
              <Heading
                as={"h1"}
                fontSize={"4em"}
                fontWeight={"bold"}
                color={"primary-1"}
                noOfLines={1}
              >
                Little Lemon
              </Heading>
              <Heading
                as={"h2"}
                fontSize={"2.5em"}
                fontWeight={"normal"}
                color={"highlight-2"}
                noOfLines={1}
              >
                Chicago
              </Heading>
              <Text
                as={"p"}
                marginTop={'6'}
                fontSize={"1.2em"}
                fontWeight={"medium"}
                color={'highlight-2'}
                noOfLines={[1, 2, 3]}
              >
                We are a family owned Mediterranean restuarant, focused on
                traditional recipes served with a modern twist.
              </Text>
            </Box>
          </Box>
  
          <Box
            flex={1}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"flex-start"}
          >
            <Image src="/images/about image.png" alt="about-image" />
          </Box>
        </Flex>
      </Flex>
    );
  };
  
  export default Hero;
  
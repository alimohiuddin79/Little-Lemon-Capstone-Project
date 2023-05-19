import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex bg={"primary-1"} justifyContent={"center"}>
      <Flex
        maxWidth={"844px"}
        width={"100%"}
        height={"440px"}
        paddingY={"2.4em"}
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
              color={"primary-2"}
              noOfLines={1}
            >
              Little Lemon
            </Heading>
            <Heading
              as={"h2"}
              fontSize={"2.5em"}
              fontWeight={"normal"}
              color={"highlight-1"}
              noOfLines={1}
            >
              Chicago
            </Heading>
            <Text
              as={"p"}
              marginTop={'6'}
              fontSize={"1.2em"}
              fontWeight={"medium"}
              color={'highlight-1'}
              noOfLines={[1, 2, 3]}
            >
              We are a family owned Mediterranean restuarant, focused on
              traditional recipes served with a modern twist.
            </Text>
          </Box>
          <Button
            bg={"primary-2"}
            color={"highlight-2"}
            fontSize={'1.2em'}
            fontWeight={'medium'}
            rounded={"16px"}
            paddingX={"2.8em"}
            paddingY={"0.8em"}
            variant={'solid'}
            _hover={{
              bg: 'white',
            }}
          >
            Reserve a Table
          </Button>
        </Box>

        <Box
          flex={1}
          display={"flex"}
          overflowY={"visible"}
          justifyContent={"flex-end"}
          alignItems={"flex-start"}
        >
          <Image src="/images/restauranfood.png" alt="hero-image" zIndex={40} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;

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
        flexWrap={'wrap'}
        maxWidth={"844px"}
        width={"100%"}
        height={['100%', '100%', "440px"]}
        paddingY={"2.4em"}
        paddingX={['1.2em', '4em', 0]}
        rowGap={'1.6em'}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          rowGap={'2.8em'}
          flexGrow={1}
          flexBasis={['100%', '100%', '50%']}
        >
          <Box display={"flex"} flexDirection={"column"} rowGap={"1em"}>
            <Heading
              as={"h1"}
              fontSize={"4em"}
              fontWeight={"bold"}
              color={"primary-2"}
            >
              Little Lemon
            </Heading>
            <Heading
              as={"h2"}
              fontSize={"2.5em"}
              fontWeight={"normal"}
              color={"highlight-1"}
            >
              Chicago
            </Heading>
            <Text
              as={"p"}
              marginTop={'6'}
              fontSize={"1.2em"}
              fontWeight={"medium"}
              color={'highlight-1'}
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
          flexGrow={1}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"flex-start"}
          flexBasis={['100%', '100%', "50%"]}
        >
          <Image src="/images/restauranfood.png" alt="hero-image" zIndex={['auto', 'auto', 20]} minWidth={'240px'} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;

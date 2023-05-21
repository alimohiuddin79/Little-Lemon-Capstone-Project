import { Box, Flex, Image, Text } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ name, src}) => {
  return (
    <Box
      flexGrow={1}
      flexBasis={["100%", "50%", "25%"]}
      rounded={"16px"}
      bg={"highlight-1"}
      paddingX={"1em"}
      paddingY={"2.4em"}
      display={"flex"}
      flexDirection={"column"}
      rowGap={"1em"}
      maxWidth={["196px", "234px", "196px"]}
      width={"100%"}
    >
      <Image src="/images/Rating.png" alt="rating" w={"70%"} />
      <Flex alignItems={"center"} columnGap={"0.8em"}>
        <Image
          src={src}
          alt="testimonial-image"
          w={"60px"}
          h={"60px"}
        />
        <Text
          as={"p"}
          fontSize={"1em"}
          fontWeight={"normal"}
          color={"primary-1"}
        >
          {name}
        </Text>
      </Flex>
      <Text as={"p"} fontSize={"1em"} fontWeight={"normal"} color={"primary-1"}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        veniam.
      </Text>
    </Box>
  );
};

export default TestimonialCard;

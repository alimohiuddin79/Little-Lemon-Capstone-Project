import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const SpecialCard = ({ title, price, description, src }) => {
  return (
    <Box minWidth={"232px"} maxWidth={["244px", "360px", "258px"]}>
      <Image width={'100%'} src={src} alt="greek-salad" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        rowGap={"1.2em"}
        justifyContent={"space-between"}
        paddingY={"1em"}
        paddingX={"0.8em"}
        bg={"highlight-1"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Heading
            as={"h3"}
            fontSize={"1.2em"}
            fontWeight={"medium"}
            color={"hightlight-2"}
          >
            {title}
          </Heading>
          <Heading
            as={"h3"}
            fontSize={"1em"}
            fontWeight={"medium"}
            color={"secondary-1"}
          >
            {`$ ${price}`}
          </Heading>
        </Flex>
        <Text
          as={"p"}
          fontSize={"1em"}
          fontWeight={"normal"}
          color={"primary-1"}
        >
          {description}
        </Text>
        <Flex justifyContent={"space-between"} alignItems={"center"} width={'70%'}>
          <Heading
            as={"h4"}
            fontSize={"1em"}
            fontWeight={"medium"}
            color={"highlight-2"}
          >
            Order a delivery
          </Heading>
          <Image src="/images/ic_sharp-pedal-bike.svg" alt="delivery-icon" />
        </Flex>
      </Box>
    </Box>
  );
};

export default SpecialCard;

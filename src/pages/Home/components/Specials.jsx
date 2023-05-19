import { Button, Flex, Heading } from "@chakra-ui/react";
import SpecialCard from "./SpecialCard";

const Specials = () => {
  return (
    <Flex justifyContent={"center"} width={'100%'}>
      <Flex
        flexDirection={'column'}
        maxWidth={"844px"}
        width={"100%"}
        paddingY={"6em"}
        rowGap={"2.6em"}
      >
        <Flex justifyContent={"space-between"}>
          <Heading
            as={"h2"}
            fontSize={"2.5em"}
            fontWeight={"normal"}
            color={"highlight-2"}
            noOfLines={1}
          >
            This weeks specials!
          </Heading>
          <Button
            bg={"primary-2"}
            color={"highlight-2"}
            fontSize={"1.2em"}
            fontWeight={"medium"}
            rounded={"16px"}
            paddingX={"2.8em"}
            paddingY={"0.8em"}
            variant={"solid"}
            _hover={{
              bg: "white",
            }}
          >
            Online Menu
          </Button>
        </Flex>

        <Flex columnGap={'2em'}>
            <SpecialCard title={'Greek Salad'} price={'12.99'} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."} src={'/images/greek salad.png'} />
            <SpecialCard title={'Bruchetta'} price={'5.99'} description={"Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt, olive oil and mint."} src={'/images/bruchetta.png'} />
            <SpecialCard title={'Lemon Dessert'} price={'5.00'} description={"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."} src={'/images/lemon dessert.png'} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Specials;

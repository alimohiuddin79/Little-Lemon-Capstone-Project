import { Flex, Heading, } from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <Flex width={"100%"} justifyContent={"center"} bg={"primary-1"}>
      <Flex
        flexDirection={"column"}
        maxWidth={"844px"}
        width={"100%"}
        paddingY={"6em"}
        rowGap={"3em"}
      >
        <Heading
          as={"h2"}
          fontSize={"2.5em"}
          fontWeight={"normal"}
          color={"primary-2"}
          textAlign={"center"}
          noOfLines={1}
        >
          Testimonials
        </Heading>
        <Flex columnGap={"1em"}>
            <TestimonialCard name={'Emily'} src={"/images/testimonial1.png"}/>
            <TestimonialCard name={'Mark'} src={"/images/testimonial2.png"}/>
            <TestimonialCard name={'Sarah'} src={"/images/testimonial3.png"}/>
            <TestimonialCard name={'Michael'} src={"/images/testimonial4.png"}/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Testimonials;

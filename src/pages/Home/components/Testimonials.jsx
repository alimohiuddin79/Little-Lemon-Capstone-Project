import { Flex, Heading, } from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <Flex width={"100%"} justifyContent={"center"} bg={"primary-1"}>
      <Flex
      flexWrap={'wrap'}
        flexDirection={"column"}
        maxWidth={"844px"}
        width={"100%"}
        paddingY={"6em"}
        paddingX={['1.2em', '4em', 0]}
        gap={"3em"}
      >
        <Heading
          as={"h2"}
          fontSize={"2.5em"}
          fontWeight={"normal"}
          color={"primary-2"}
          textAlign={"center"}
        >
          Testimonials
        </Heading>
        <Flex gap={"1em"} flexWrap={'wrap'} justifyContent={'center'}>
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

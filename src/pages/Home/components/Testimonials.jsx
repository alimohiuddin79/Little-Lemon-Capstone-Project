import { Flex, Heading } from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <Flex
      width={"100%"}
      justifyContent={"center"}
      bgColor={"secondary-2"}
      bgImage={"/images/Asset 7@4x.png"}
      bgRepeat={"no-repeat"}
      bgPosition={"40px 40px"}
    >
      <Flex
        flexWrap={"wrap"}
        flexDirection={"column"}
        maxWidth={"844px"}
        width={"100%"}
        paddingY={"6em"}
        paddingX={["1.2em", "4em", 0]}
        gap={"3em"}
        opacity='1'
      >
        <Heading
          as={"h2"}
          fontSize={"2.5em"}
          fontWeight={"normal"}
          color={"highligh-2"}
          textAlign={"center"}
        >
          What our customers say!
        </Heading>
        <Flex gap={"1em"} flexWrap={"wrap"} justifyContent={"center"}>
          <TestimonialCard name={"Emily"} src={"/images/testimonial1.png"} />
          <TestimonialCard name={"Mark"} src={"/images/testimonial2.png"} />
          <TestimonialCard name={"Sarah"} src={"/images/testimonial3.png"} />
          <TestimonialCard name={"Michael"} src={"/images/testimonial4.png"} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Testimonials;

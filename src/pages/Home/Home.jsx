import { Box } from "@chakra-ui/react"
import Hero from "./components/Hero"
import Specials from "./components/Specials"
import Testimonials from "./components/Testimonials"
import About from "./components/About";

const Home = () => {
  return (
    <Box as="main" width={'100%'} height={'100%'}>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </Box>
  )
}

export default Home
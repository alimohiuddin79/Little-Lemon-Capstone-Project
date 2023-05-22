import { Box, Heading } from "@chakra-ui/react"

const NotFound = () => {
  return (
    <Box
        width={'100%'}
        minHeight={'27.4em'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
    >
        <Heading
            as={'h1'}
            color={'gray.600'}
            size={'4xl'}
        >
            404 page does not exist
        </Heading>
    </Box>
  )
}

export default NotFound
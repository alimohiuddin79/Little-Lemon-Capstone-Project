import { Box } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <>
            <Box
                width={'100%'}
                minHeight={'100vh'}
                bg={'white'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                {children}
            </Box>
        </>
    )
}

export default Layout;
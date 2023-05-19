import { Box, Image, Link, ListItem, UnorderedList } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box
        as="header"
        maxWidth={'844px'}
        width={'100%'}
        height={'100px'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
    >
        <Image src="/images/Asset 16@4x.png" alt="logo" w={'148px'} />
        <Box as="nav">
            <UnorderedList
                listStyleType={'none'}
                display={'flex'}
                gap={'20px'}
            >
                <ListItem>
                    <Link
                        fontSize={18}
                        fontWeight={'medium'}
                        color={'highlight-2'}
                    >
                        Home
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        fontSize={18}
                        fontWeight={'medium'}
                        color={'highlight-2'}
                    >
                        About
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        fontSize={18}
                        fontWeight={'medium'}
                        color={'highlight-2'}
                    >
                        Menu
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        fontSize={18}
                        fontWeight={'medium'}
                        color={'highlight-2'}
                    >
                        Reservation
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        fontSize={18}
                        fontWeight={'medium'}
                        color={'highlight-2'}
                    >
                        Order online
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        fontSize={18}
                        fontWeight={'medium'}
                        color={'highlight-2'}
                    >
                        Login
                    </Link>
                </ListItem>
            </UnorderedList>
        </Box>
    </Box>
  )
}

export default Header;
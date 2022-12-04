import {
    Container,
    Flex,
} from "@chakra-ui/react"
import Header from "./Header"

export default function Layout(props: any) {

    return (
        <Container maxW="100vw" w="100vw" h="100vh" style={{backgroundImage: `url("/backg.png")`}}>
            <Flex h="100%" direction="column" alignItems="center">
                <Header />
                {props.children}
            </Flex>
        </Container>
    )
}

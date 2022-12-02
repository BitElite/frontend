import {
  Container,
  Flex,
  Spacer,
  Tooltip
} from "@chakra-ui/react"
import Gradient from "../components/Gradient"
import Header from "../components/Header"
import BitEliteTitle from "../components/BitEliteTitle"
import Connect from "../components/Connect"

export default function Home() {

  return (
    <Container maxW="100vw" w="100vw" h="100vh">
      <Flex h="100%" direction="column" alignItems="center">
        <Header />
        <Gradient />
        <BitEliteTitle />
        <Tooltip label='Connect your wallet'>
          <Connect />
        </Tooltip>
        <Spacer />
      </Flex>
    </Container>
  )
}

import {
  Container,
  Flex,
  Spacer,
  Heading,
  Text,
} from "@chakra-ui/react"
import UploadFile from "../components/UploadFile"
import Gradient from "../components/Gradient"
import Header from "../components/Header"

export default function Home() {

  return (
    <Container maxW="100vw" w="100vw" h="100vh">
      <Flex h="100%" direction="column" alignItems="center">
        <Header />
        <Gradient />
        <UploadFile />
        <Spacer />
      </Flex>
    </Container>
  )
}

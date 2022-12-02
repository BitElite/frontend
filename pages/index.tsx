import {
  Container,
  Flex,
  Spacer,
  Heading,
  Text,
} from "@chakra-ui/react"
import UploadFile from "../components/UploadFile"
import Gradient from "../components/Gradient"

export default function Home() {

  return (
    <Container maxW="100vw" w="100vw" h="100vh">
      <Flex h="100%" direction="column" alignItems="center">

        <Gradient />
        <Heading textAlign="center" size="3xl">BitElite</Heading>
        <Text textAlign="center" color="gray.500" fontSize='2xl' w="4xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
        <UploadFile />
        <Spacer />
      </Flex>
    </Container>
  )
}

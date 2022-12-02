import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import {
  Container,
  Flex,
  Spacer,
  Icon,
  Heading,
  Button,
  Link,
  useColorMode,
  useColorModeValue,
  Divider,
  Text,
  Tooltip,
  IconButton
} from "@chakra-ui/react"
import Connect from "../components/Connect"
import UploadFile from "../components/UploadFile"
import styles from '../styles/Home.module.scss'

export default function Home() {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Container maxW="100vw" w="100vw" h="100vh">
      <Flex h="100%" direction="column" alignItems="center">
        <Flex h="3rem" w="100%" direction="row" alignItems="center" padding="5px" textAlign="center">
          <Heading size="lg">BitElite</Heading>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Link href="#features" padding="10px" textDecoration="none" fontWeight="500" color="GrayText" _hover={{
            color: useColorModeValue("black", "white")
          }}>Features</Link>
          <Spacer />
          <Link href="#use-cases" padding="10px" textDecoration="none" fontWeight="500" color="GrayText" _hover={{
            color: useColorModeValue("black", "white")
          }}>Use Cases</Link>
          <Spacer />
          <Tooltip label='Connect your wallet'>
            {/* <Button bgColor="pink.300" _hover={{
              bgColor: "pink.400"
            }}>Connect</Button> */}
            <Connect />
          </Tooltip>
          <Spacer />
          <Tooltip label='Toggle theme'>
            <IconButton variant='outline' aria-label="Toggle theme" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
          </Tooltip>
        </Flex>
        <Divider orientation="horizontal" />
        <Spacer />
        <div style={{
          width: "300px",
          height: "300px",
          position: "absolute",
          filter: "blur(200px)",
          marginTop: "-30px"
        }}>
          <svg viewBox="0 0 200 200" width="100%" height="100%">
            <path
              fill="#7928CA"
              d="
                 M 100, 100
                 m -75, 0
                 a 75,75 0 1,0 150,0
                 a 75,75 0 1,0 -150,0
                 "
            />
          </svg>
        </div>
        <Heading textAlign="center" size="3xl">BitElite</Heading>
        <Text textAlign="center" color="gray.500" fontSize='2xl' w="4xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
        <UploadFile />
        <Spacer />
      </Flex>
    </Container>
  )
}

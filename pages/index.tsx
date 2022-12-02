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
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/Home.module.scss'

export const ConnectBtn = () => {
  return <ConnectButton />
}

export default function Home() {
  const { toggleColorMode, colorMode } = useColorMode();
  
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
            <ConnectBtn/>
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
          filter: "blur(170px)",
          marginTop: "-30px"
        }}>
          <svg viewBox="0 0 200 200" width="100%" height="100%">
            <path
              fill={useColorModeValue("#000000", "#7928CA")}
              d="
                 M 100, 100
                 m -75, 0
                 a 75,75 0 1,0 150,0
                 a 75,75 0 1,0 -150,0
                 "
            />
          </svg>
        </div>
        <Heading textAlign="center" size="2xl" color={useColorModeValue("dark.300", "gray.300")}>Let's get started using</Heading>
        <Heading textAlign="center" size="xl"><Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
        >
          BitElite Portal
        </Text></Heading>
        <Spacer />
      </Flex>
    </Container>
  )
}

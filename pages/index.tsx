import {
  Container,
  Flex,
  Spacer,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react"
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Container maxW="100vw" w="100vw" h="100vh">
      <Flex h="100%" direction="column" alignItems="center">
        <Navbar />
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
        <motion.div
          transition={{
            ease: "easeIn",
            duration: 0.7,
          }}
          initial={{
            x: -600,
          }}
          animate={{
            x: 0
          }}
        >
          <Heading textAlign="center" size="2xl" color={useColorModeValue("dark.300", "gray.300")}>Let's get started using</Heading>
        </motion.div>
        <Heading textAlign="center" size="xl" style={{
          marginTop: "10px"
        }}><Text
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

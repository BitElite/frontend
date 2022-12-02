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
import Layout from "../components/Layout"

export default function Home() {
  return (
    <>
      <Layout>
        <Gradient />
        <BitEliteTitle />
        <Tooltip label='Connect your wallet'>
          <Connect />
        </Tooltip>
        <Spacer />
      </Layout>
    </>
  )
}

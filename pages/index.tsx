import {
  Container,
  Flex,
  Spacer,
  Tooltip
} from "@chakra-ui/react"
import Gradient from "../components/home/Gradient"
import Header from "../components/layout/Header"
import BitEliteTitle from "../components/home/BitEliteTitle"
import Connect from "../components/home/Connect"
import Layout from "../components/layout/Layout"

export default function Home() {
  return (
    <>
      <Gradient />
      <BitEliteTitle />
      <Tooltip label='Connect your wallet'>
        <Connect />
      </Tooltip>
      <Spacer />
    </>
  )
}

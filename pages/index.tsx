import {
  Container,
  Flex,
  Spacer,
  Tooltip
} from "@chakra-ui/react"
import Gradient from "../components/home/Gradient"
import BitEliteTitle from "../components/home/BitEliteTitle"
import Connect from "../components/home/Connect"

export default function Home() {
  return (
    <>
      <Gradient />
      <BitEliteTitle />

        <Connect />
      <Spacer />
    </>
  )
}

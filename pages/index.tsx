import {
  Container,
  Flex,
  Spacer,
  Tooltip
} from "@chakra-ui/react"
import Gradient from "../components/home/Gradient"
import BitEliteTitle from "../components/home/BitEliteTitle"
import Connect from "../components/home/Connect"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>BitElite</title>
      </Head>
      <Gradient />
      <BitEliteTitle />
      <Connect />
      <Spacer />
    </>
  )
}

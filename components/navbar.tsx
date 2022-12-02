import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Divider, Flex, Heading, IconButton, Link, Spacer, Tooltip, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import NLink from "next/link"

export const ConnectBtn = () => {
  return <ConnectButton />;
};

export default () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return <>
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
  </>
}
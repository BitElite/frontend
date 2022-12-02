import React from 'react'
import { Flex, Spacer, Link, Heading, useColorModeValue, Tooltip, IconButton, useColorMode } from '@chakra-ui/react'
import Connect from './Connect'
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

export default function Header() {
    const { toggleColorMode, colorMode } = useColorMode()
    return (
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
                <Connect />
            </Tooltip>
            <Spacer />
            <Tooltip label='Toggle theme'>
                <IconButton variant='outline' aria-label="Toggle theme" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
            </Tooltip>
        </Flex>
    )
}

import React from 'react'
import { Heading, Text } from '@chakra-ui/react'

export default function BitEliteTitle() {
    return (
        <>
            <Heading textAlign="center" size="3xl">Deduplication layer</Heading>
            <Text marginTop="1rem" textAlign="center" color="gray.500" fontSize='2xl' w="4xl">
                Upload files to filecoin, but pay less.
            </Text>
        </>
    )
}

import React from 'react'
import {
    Spacer,
    Divider,
} from "@chakra-ui/react"


export default function Gradient() {
    return (
        <>
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
        </>
    )
}

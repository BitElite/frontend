import { Button, Box } from "@chakra-ui/react";
import { useRef, useState } from "react";

const UploadFile = () => {
    const inputRef: any = useRef()

    const handleUploadClick = () => {
        inputRef.current.click()
    }

    const onFileChange = (e: any) => {
        const file = e.target.files[0]
        console.log(file)
    }

    const [file, setFile] = useState()

    return (
        <>
            <input onInput={onFileChange} ref={inputRef} style={{ visibility: "hidden" }} type="file"></input>
            <Box textAlign="left">
                <Button onClick={handleUploadClick}>Upload File</Button>
            </Box>
        </>
    )
}

export default UploadFile;
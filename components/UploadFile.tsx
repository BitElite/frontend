import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

const UploadFile = () => {
    const inputRef: any = useRef()

    const handleUploadClick = () => {
        inputRef.current.click()
    }

    const [file, setFile] = useState()

    return (
        <>
            <input ref={inputRef} style={{ visibility: "hidden" }} type="file"></input>
            <Button onClick={handleUploadClick}>Upload File</Button>
        </>
    )
}

export default UploadFile;
import { Button, Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Swal from 'sweetalert2'
import generateCID from "../../utils/generateCID";

const UploadFile = () => {
	const inputRef: any = useRef();

	const handleUploadClick = () => {
		inputRef.current.click();

	};

	const onFileChange = async (e: any) => {
		const file = e.target.files[0];
		const buffer = await file.arrayBuffer();
		let firstEle = (new Int8Array(buffer))[0];
		const hashOfFirstByte=(await sha256(firstEle)).toString();
        const hashOfFile=(await sha256(buffer)).toString();
        const finalHash=await sha256(hashOfFile+hashOfFirstByte);
        console.log(finalHash);
        
		const response = await generateCID(file);
		console.log(response);
	};

    async function sha256(message:any) {
        // encode as UTF-8
        const msgBuffer = new TextEncoder().encode(message);                    
    
        // hash the message
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    
        // convert ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashBuffer));
    
        // convert bytes to hex string                  
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

	const [file, setFile] = useState();

	return (
		<>
			<input
				onInput={onFileChange}
				ref={inputRef}
				style={{ visibility: "hidden" }}
				type="file"
			></input>
			<Box textAlign="left">
				<Button onClick={handleUploadClick}>Upload File</Button>
			</Box>
		</>
	);
};

export default UploadFile;

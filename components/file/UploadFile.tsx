import { Button, Box } from "@chakra-ui/react";
import { useRef } from "react";
import Swal from 'sweetalert2'
import generateCID from "../../utils/generateCID";
import getHash from "../../utils/proofOfOwnership";

const UploadFile = ({currentFile, setCurrentFile}: any) => {
	const inputRef: any = useRef();

	const handleUploadClick = () => {
		inputRef.current.click();
	};

	const onFileChange = async (e: any) => {
		const file = e.target.files[0];
		const hash = await getHash(file);
		console.log("File: ", file)
		console.log("File's HASH: ", hash);

		const response = await generateCID(file);
		console.log("Generated CID", response);

		setCurrentFile({
			name: file.name,
			size: file.size,
			cid: response.cid
		})
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

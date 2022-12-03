import { Button, Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Swal from 'sweetalert2'
import generateCID from "../../utils/generateCID";
import getHash from "../../utils/proofOfOwnership";

const UploadFile = () => {
	const inputRef: any = useRef();

	const handleUploadClick = () => {
		inputRef.current.click();

	};

	const onFileChange = async (e: any) => {
		const file = e.target.files[0];
		const hash = await getHash(file);
		console.log(hash);

		const response = await generateCID(file);
		console.log(response);
	};

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

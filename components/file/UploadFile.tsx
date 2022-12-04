import { Button, Box } from "@chakra-ui/react";
import { useRef } from "react";
import Swal from 'sweetalert2'
import generateCID from "../../utils/generateCID";
import getHash from "../../utils/proofOfOwnership";
import { sendCid } from "../../api/cid";
import { sendFile } from "../../api/file";
import { send } from "process";
import { addOwner, pay } from "../../utils/contractInteractions";
import { getPrice, sendHash } from "../../api/hash";

const UploadFile = ({ currentFile, setCurrentFile }: any) => {
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
		const res = await sendCid(response.cid)
		setCurrentFile({
			name: file.name,
			size: file.size,
			cid: response.cid
		})
		if (res === "Asset not found") {
			console.log("Asset not found")
			const result = await sendFile(file, response.cid)
			console.log("Price: ", result)
			const txnHash = await pay(result, response.cid)
			await sendHash(txnHash, response.cid)
		} else {
			const price = await getPrice(response.cid, file.size);
			console.log("Price: ", price)
			const txnHash = await pay(price.data.price, response.cid)
			await sendHash(txnHash, response.cid)
		}
		await addOwner(response.cid, `${Math.floor(file.size / 1024)}`)
	};

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

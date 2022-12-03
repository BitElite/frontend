import {
	Table,
	Thead,
	Tbody,
	Text,
	Tr,
	Th,
	Td,
	TableContainer,
	Heading,
	IconButton,
	useToast,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
	Flex,
	Spacer,
	Tooltip,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import { CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import UploadFile from "../components/file/UploadFile";

const truncateString = (str: string, num: number) => {
	if (str.length <= num) {
		return str;
	}
	return str.slice(0, num) + "..." + str.slice(str.length - num, str.length);
};

export default function Dashboard() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();
	const [ files, setFiles ] = useState([
		{
			name: "test.png",
			size: 100,
			cid: "Qm...",
			uploadedAt: new Date(3000000000000).getTime()
		}
	])
	const [ currentFile, setCurrentFile ] = useState({
		name: "test.png",
		size: 100,
		cid: "Qm..."
	})
	
	const handlePay = () => {
		Swal.fire({
			title: 'Payment',
			text: "500 FIL needs to be payed",
			showCancelButton: false,
			confirmButtonText: 'Pay',
			showLoaderOnConfirm: true,
			allowOutsideClick: () => !Swal.isLoading()
		  }).then((result) => {
			if (result.isConfirmed) {
			  //
			}
		  })
	};

	return (
		<>
			<Heading>Dashboard</Heading>
			<Flex width={"80%"} my={"10"}>
				<Modal
					closeOnOverlayClick={false}
					isOpen={isOpen}
					onClose={onClose}
				>
					<ModalOverlay />
					<ModalContent>
						
						<ModalHeader>Your Balance is 21 FIL</ModalHeader>
						<ModalCloseButton mt={"2"} />
					</ModalContent>
				</Modal>

				<Card mx={"10"} width={"45%"}>
					<CardHeader>
						<Heading size="md">Withdraw</Heading>
					</CardHeader>
					<CardBody>
						<Text>
							Withdraw the amount from the smart contract to your
							wallet.
						</Text>
					</CardBody>
					<CardFooter>
						<Flex w={"100%"}>
							<Button>Withdraw</Button>
							<Spacer />
							<Button onClick={onOpen}>Check Balance</Button>
						</Flex>
					</CardFooter>
				</Card>
				<Card width={"45%"}>
					<CardHeader>
						<Heading size="md">Upload a file</Heading>
					</CardHeader>
					<CardBody>
						<Text>Upload any file to Filecoin network.</Text>
					</CardBody>
					<CardFooter>
						<UploadFile currentFile={currentFile} setCurrentFile={setCurrentFile} />
					</CardFooter>
				</Card>
			</Flex>
			<Flex width={"79%"} mb={"10"}>
				<Card mx={"10"} width={"45%"} my={"10"}>
					<CardHeader>
						<Heading size="md">Current File</Heading>
					</CardHeader>
					<CardBody>
						<Flex
							w="100%"
							h="100%"
							direction="column"
							justifyContent="center"
							alignItems="center"
						>
							<Spacer />
							<Flex
								w="100%"
								h="100%"
								direction="row"
								justifyContent="center"
								alignItems="center"
							>
								<Text
									fontSize="lg"
									fontWeight="500"
									color="gray.500"
								>
									File Name:{" "}
								</Text>
								<Spacer />
								<Text
									fontSize="lg"
									fontWeight="500"
									color="gray.100"
								>
									{currentFile.name}
								</Text>
							</Flex>
							<Spacer />
							<Flex
								w="100%"
								h="100%"
								direction="row"
								justifyContent="center"
								alignItems="center"
							>
								<Text
									fontSize="lg"
									fontWeight="500"
									color="gray.500"
								>
									File Size:{" "}
								</Text>
								<Spacer />
								<Text
									fontSize="lg"
									fontWeight="500"
									color="gray.100"
								>
									{currentFile.size} Bytes
								</Text>
							</Flex>
							<Spacer />
							<Flex
								w="100%"
								h="100%"
								direction="row"
								justifyContent="center"
								alignItems="center"
							>
								<Text
									fontSize="lg"
									fontWeight="500"
									color="gray.500"
								>
									CID:{" "}
								</Text>
								<Spacer />
								<Text
									fontSize="lg"
									fontWeight="500"
									color="gray.100"
								>
									{truncateString(currentFile.cid, 5)}
								</Text>
							</Flex>
							<Spacer />
						</Flex>
					</CardBody>
					<CardFooter
						style={{ display: "flex", justifyContent: "center" }}
					>
						<Button onClick={handlePay}>Pay</Button>
					</CardFooter>
				</Card>
				<TableContainer w="90%" my={"10"} overflow="hidden">
					<Table
						variant="unstyled"
						bgColor="blackAlpha.400"
						borderRadius="10px"
					>
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th textAlign="center">CID</Th>
								<Th>Size</Th>
								<Th>Date</Th>
							</Tr>
						</Thead>
						<Tbody>
							{/* @ts-ignore */}
							{files.map((file, index) => (
								<Tr
									key={"row-" + index}
									_hover={{
										backgroundColor: "blackAlpha.500",
									}}
								>
									<Td>
										<Text>{file.name}</Text>
									</Td>
									<Td
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<Text fontFamily={"monospace"}>
											{truncateString(file.cid, 7)}
										</Text>
										<Tooltip label="Copy CID">
											<IconButton
												variant="outline"
												colorScheme="teal"
												aria-label="Copy CID"
												size="sm"
												icon={<CopyIcon />}
												style={{
													marginLeft: "10px",
												}}
												onClick={() => {
													navigator.clipboard.writeText(
														file.cid
													);
													toast({
														title: "Copied CID",
														description:
															"The CID has been copied to your clipboard",
														status: "success",
														duration: 3000,
														isClosable: true,
													});
												}}
											/>
										</Tooltip>
										<Tooltip label="Open file">
											<IconButton
												variant="outline"
												colorScheme="purple"
												aria-label="Open CID"
												size="sm"
												icon={<ExternalLinkIcon />}
												style={{
													marginLeft: "5px",
												}}
												onClick={() => {
													window.open(
														`https://cloudflare-ipfs.com/ipfs/${file.cid}`,
														"_blank"
													);
												}}
											/>
										</Tooltip>
									</Td>
									<Td>
										<Text>{file.size}</Text>
									</Td>
									<Td>
										<Text>
											{dayjs(file.uploadedAt).format(
												"MMM D YYYY, h:mm a"
											)}
										</Text>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</Flex>
		</>
	);
}

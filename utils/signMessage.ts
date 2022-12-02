// @ts-ignore
export default async function signMessage(message) {
    // @ts-ignore
	const provider = new ethers.providers.Web3Provider(
		// @ts-ignore
		window.ethereum
	);
	const signer = provider.getSigner();
	const address = await signer.getAddress();
	// @ts-ignore
	const signature = await signer.signMessage(message);
	console.log(signature);
}

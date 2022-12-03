export default async function generateHashForFile(file: File) {
	const buffer = file.arrayBuffer();
    // @ts-ignore
	const firstElement = (new Int8Array(buffer))[0];
	const hashOfFirstByte = (await sha256(firstElement)).toString();
	const hashOfFile = (await sha256(buffer)).toString();
    const finalHash=await sha256(hashOfFile+hashOfFirstByte);
    return finalHash;   
}


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
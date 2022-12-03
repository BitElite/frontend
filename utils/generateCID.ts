import * as IPFS from 'ipfs-core'
import CID from 'cids';

export default async function generateCID(file: File) {
    const ipfs = await IPFS.create()
    const response = await ipfs.add(file)
    const cid = new CID(response.path)
    const newCid = cid.toV1().toString()
    //@ts-ignore
    response.CID = newCid
    return response
}
import * as IPFS from 'ipfs-core'
import CID from 'cids';

export default async function generateCID(file: File) {
    let ipfs;
    //@ts-ignore
    if (!window.ipfs) {
        ipfs = await IPFS.create()
        //@ts-ignore
        window.ipfs = ipfs;
    } else { 
        //@ts-ignore
        ipfs = window.ipfs
    }
    //@ts-ignore
   
    const response = await ipfs.add(file, {
        onlyHash: true
    })
    const cid = new CID(response.path)
    const newCid = cid.toV1().toString()
    //@ts-ignore
    response.cid = newCid
    return response
}
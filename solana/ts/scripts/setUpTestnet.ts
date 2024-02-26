import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import "dotenv/config";
import { NTT } from "../sdk";
import { BN } from "@coral-xyz/anchor";

main();

async function main() {
    if (process.env.SOLANA_PRIVATE_KEY === undefined) {
        throw new Error("SOLANA_PRIVATE_KEY is not set");
    }

    if (process.env.MINT === undefined) {
        // throw new Error("MINT is not set");
    }

    const connection = new Connection("https://api.devnet.solana.com", "confirmed");
    const ntt = new NTT(connection, { nttId: "nttiK1SepaQt6sZ4WGW5whvc9tEnGXGxuKeptcQPCcS", wormholeId: "3u8hJUVTA4jH1wYAyUur7FFZVQ8H635K3tSHHF4ssjQ5"});

    const payer = Keypair.fromSecretKey(Buffer.from(eval(process.env.SOLANA_PRIVATE_KEY)));
    const owner = payer;
    // const mint = new PublicKey(process.env.MINT);

    //await ntt.initialize({
    //    payer,
    //    owner,
    //    chain: "solana",
    //    mint,
    //    outboundLimit: new BN(100),
    //    mode: "locking"
    //})

    //await ntt.registerTransceiver({
    //  payer,
    //  owner: payer,
    //  transceiver: ntt.program.programId
    //})

    await ntt.setWormholeTransceiverPeer({
      payer,
      owner: payer,
      chain: 'sepolia',
      address: Buffer.from('3a8233b3A9b968B3f3b0e77AeE2c820ee8821A49'.padStart(64, '0'), 'hex'),
    })

    //await ntt.setPeer({
    //  payer,
    //  owner: payer,
    //  chain: 'sepolia',
    //  address: Buffer.from('826D756044c0b5Edd32eD33a2A4B2963d81D8F85'.padStart(64, '0'), 'hex'),
    //  limit: new BN(100000000000)
    //})
}
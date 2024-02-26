// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import "openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import "wormhole-solidity-sdk/Utils.sol";
import "../src/NttManager.sol";
import "../src/WormholeTransceiver.sol";
import "forge-std/console.sol";

contract DeploySepolia is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        // NttManager
        address sepoliaToken = 0xcE0bD78B496bc8DDd25c8a192771e4537f0794c8;
        NttManager sepoliaNttManagerImpl = new NttManager(
            sepoliaToken, NttManager.Mode.LOCKING, 10002, 1 days
        );
        // NttManager Proxy
        NttManager sepoliaNttManagerProxy =
            NttManager(address(new ERC1967Proxy(address(sepoliaNttManagerImpl), "")));
        sepoliaNttManagerProxy.initialize();
        // WormholeTransceiver
        address sepoliaWormholeCoreBridge = 0x4a8bc80Ed5a4067f1CCf107057b8270E0cC11A78;
        address sepoliaWormholeRelayer = 0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470;
        address sepoliaSpecialRelayerAddr = 0x0000000000000000000000000000000000000000;
        WormholeTransceiver sepoliaTransceiverImpl = new WormholeTransceiver(
            address(sepoliaNttManagerProxy),
            sepoliaWormholeCoreBridge,
            sepoliaWormholeRelayer,
            sepoliaSpecialRelayerAddr,
            200 
        );
        // WormholeTransceiver Proxy
        WormholeTransceiver sepoliaTransceiverProxy =
            WormholeTransceiver(address(new ERC1967Proxy(address(sepoliaTransceiverImpl), "")));
        sepoliaTransceiverProxy.initialize();
        sepoliaNttManagerProxy.setTransceiver(address(sepoliaTransceiverProxy));
        vm.stopBroadcast();
        console.log("sepoliaNttManagerProxy: %s", address(sepoliaNttManagerProxy));
        console.log("wormholeTransceiverProxy: %s", address(sepoliaTransceiverProxy));
    }
}

contract DeployArbitrumSepolia is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        // NttManager
        address sepoliaToken = 0xb12C77938c09d81F1e9797d48501b5c4E338B45B;
        NttManager sepoliaNttManagerImpl = new NttManager(
            sepoliaToken, NttManager.Mode.BURNING, 10003, 1 days
        );
        // NttManager Proxy
        NttManager sepoliaNttManagerProxy =
            NttManager(address(new ERC1967Proxy(address(sepoliaNttManagerImpl), "")));
        sepoliaNttManagerProxy.initialize();
        // WormholeTransceiver
        address sepoliaWormholeCoreBridge = 0x6b9C8671cdDC8dEab9c719bB87cBd3e782bA6a35;
        address sepoliaWormholeRelayer = 0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470;
        address sepoliaSpecialRelayerAddr = 0x0000000000000000000000000000000000000000;
        WormholeTransceiver sepoliaTransceiverImpl = new WormholeTransceiver(
            address(sepoliaNttManagerProxy),
            sepoliaWormholeCoreBridge,
            sepoliaWormholeRelayer,
            sepoliaSpecialRelayerAddr,
            200 
        );
        // WormholeTransceiver Proxy
        WormholeTransceiver sepoliaTransceiverProxy =
            WormholeTransceiver(address(new ERC1967Proxy(address(sepoliaTransceiverImpl), "")));
        sepoliaTransceiverProxy.initialize();
        sepoliaNttManagerProxy.setTransceiver(address(sepoliaTransceiverProxy));
        vm.stopBroadcast();
        console.log("arbitrumSepoliaNttManagerProxy: %s", address(sepoliaNttManagerProxy));
        console.log("arbitrumWormholeTransceiverProxy: %s", address(sepoliaTransceiverProxy));
    }
}

contract ConfigureSepolia is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        address managerAddr = 0x826D756044c0b5Edd32eD33a2A4B2963d81D8F85;
        address arbManagerAddr = 0x85B0Ab2d14210c03F790d17a7e6C7829C05F2157;
        NttManager nttManager = NttManager(managerAddr);
        // nttManager.setOutboundLimit(type(uint64).max);
        // nttManager.setInboundLimit(type(uint64).max, 10003);
        // nttManager.setPeer(10003, bytes32(uint256(uint160(address(arbManagerAddr)))));
        nttManager.setPeer(1, peerContract);
        address transceiverAddr = 0x3a8233b3A9b968B3f3b0e77AeE2c820ee8821A49;
        address arbTransceiverAddr = 0x2ED826c72BAf816096bB48195220de42220D3750;
        WormholeTransceiver transceiver = WormholeTransceiver(transceiverAddr);
        // transceiver.setIsWormholeEvmChain(10003);
        // transceiver.setIsWormholeRelayingEnabled(10003, true);
        // transceiver.setWormholePeer(10003, bytes32(uint256(uint160(address(arbTransceiverAddr)))));
        transceiver.setWormholePeer(1, peerContract);
        vm.stopBroadcast();
    }
}

contract ConfigureArbitrumSepolia is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        address managerAddr = 0x85B0Ab2d14210c03F790d17a7e6C7829C05F2157;
        address arbManagerAddr = 0x826D756044c0b5Edd32eD33a2A4B2963d81D8F85;
        NttManager nttManager = NttManager(managerAddr);
        nttManager.setOutboundLimit(type(uint64).max);
        nttManager.setInboundLimit(type(uint64).max, 10002);
        nttManager.setPeer(10002, bytes32(uint256(uint160(address(arbManagerAddr)))));
        address transceiverAddr = 0x2ED826c72BAf816096bB48195220de42220D3750;
        address arbTransceiverAddr = 0x3a8233b3A9b968B3f3b0e77AeE2c820ee8821A49;
        WormholeTransceiver transceiver = WormholeTransceiver(transceiverAddr);
        transceiver.setIsWormholeEvmChain(10002);
        transceiver.setIsWormholeRelayingEnabled(10002, true);
        transceiver.setWormholePeer(10002, bytes32(uint256(uint160(address(arbTransceiverAddr)))));
        vm.stopBroadcast();
    }
}


//contract DeployNttManagerProxy is Script {
//    function setUp() public {}
//
//    function run() public {
//        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
//        address implementation = 0xCE18952Cd5C47130d4F9fCB0e6E183a3D6237547;
//        vm.startBroadcast(deployerPrivateKey);
//
//        NttManager proxy =
//            NttManager(address(new ERC1967Proxy(implementation, "")));
//        proxy.initialize();
//
//        vm.stopBroadcast();
//    }
//}
//
//contract DeployWormholeTransceiver is Script {
//    function setUp() public {}
//
//    function run() public {
//        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
//        // ETH SEPOLIA
//        address wormholeCoreBridge = 0x4a8bc80Ed5a4067f1CCf107057b8270E0cC11A78;
//        address wormholeRelayer = 0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470;
//        address nttManager = 0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470;
//        address specialRelayerAddr = 0x0000000000000000000000000000000000000000;
//        uint8 consistencyLevel = 200; // fast
//        // ARB SEPOLIA
//        // address wormholeCoreBridge = 0x6b9C8671cdDC8dEab9c719bB87cBd3e782bA6a35;
//        // address wormholeRelayer = 0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470;
//        // Manager.Mode mode = Manager.Mode.BURNING;
//        vm.startBroadcast(deployerPrivateKey);
//
//        WormholeTransceiver impl = new WormholeTransceiver(
//            nttManager,
//            wormholeCoreBridge,
//            wormholeRelayer,
//            specialRelayerAddr,
//            consistencyLevel
//        );
//
//        // ETH SEPOLIA
//        // impl.setIsWormholeEvmChain(10002);
//        // impl.setIsWormholeRelayingEnabled(10002, true);
//
//        // ARB SEPOLIA
//        impl.setIsWormholeEvmChain(10003);
//        impl.setIsWormholeRelayingEnabled(10003, true);
//
//        vm.stopBroadcast();
//    }
//}
//
//contract UpgradeWEM is Script {
//    function setUp() public {}
//
//    function run() public {
//        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
//        address proxyAddr = 0x081d4762aE9D4D51525b8db81865a1691FFA55Ed;
//        address newImpl = 0x1e824a19d464d8B30e0c2Ea58e11CB3b077Ccf7F;
//        vm.startBroadcast(deployerPrivateKey);
//
//        WormholeEndpointAndManager proxy = WormholeEndpointAndManager(proxyAddr);
//        proxy.upgrade(newImpl);
//
//        vm.stopBroadcast();
//    }
//}
//
//contract RegisterManagerSibling is Script {
//    function setUp() public {}
//
//    function run() public {
//        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
//        address proxyAddr = 0x081d4762aE9D4D51525b8db81865a1691FFA55Ed;
//        // ETH SEPOLIA
//        // uint16 siblingChainId = 10002;
//        // ARB SEPOLIA
//        uint16 siblingChainId = 10003;
//        address siblingAddr = 0x081d4762aE9D4D51525b8db81865a1691FFA55Ed;
//
//        vm.startBroadcast(deployerPrivateKey);
//
//        // call setSibling on the manager contract
//        WormholeEndpointAndManager proxy = WormholeEndpointAndManager(proxyAddr);
//        proxy.setSibling(siblingChainId, toWormholeFormat(siblingAddr));
//
//        vm.stopBroadcast();
//    }
//}
//
//contract SetManagerLimits is Script {
//    function setUp() public {}
//
//    function run() public {
//        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
//        address proxyAddr = 0x081d4762aE9D4D51525b8db81865a1691FFA55Ed;
//        // ETH SEPOLIA
//        uint16 siblingChainId = 10002;
//        // ARB SEPOLIA
//        // uint16 siblingChainId = 10003;
//
//        vm.startBroadcast(deployerPrivateKey);
//
//        // call setSibling on the manager contract
//        WormholeEndpointAndManager proxy = WormholeEndpointAndManager(proxyAddr);
//        proxy.setOutboundLimit(type(uint64).max);
//        proxy.setInboundLimit(type(uint64).max, siblingChainId);
//
//        vm.stopBroadcast();
//    }
//}
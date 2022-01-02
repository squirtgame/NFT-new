export const networkCollections = {
  "0x38": [
    {
      image: "https://heroesempires.com/static/media/logo.824444fe.png",
      name: "Hero Assets",
      addrs: "0x4cd0ce1d5e10afbcaa565a0fe2a810ef0eb9b7e2",
    },

    {
      image: "https://res.cloudinary.com/nftrade/image/upload/w_500,c_scale/v1631623705/evm_56_0xbe96ee936c45b4cc8c65b803c851d1d4ed15a27b_10005.png",
      name: "Metamon",
      addrs: "0xF24Bf668Aa087990f1d40aBAbF841456E771913c",
    },

    {
      image: "https://res.cloudinary.com/nftrade/image/upload/w_500,c_scale/v1639858087/evm_56_0xb00ed7e3671af2675c551a1c26ffdcc5b425359b_14128.png",
      name: "Biswap Squid Players",
      addrs: "0xb00ed7e3671af2675c551a1c26ffdcc5b425359b",
    },
  ],
};

export const getCollectionsByChain = (chain) => networkCollections[chain];
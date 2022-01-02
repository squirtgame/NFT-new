import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { useIPFS } from "./useIPFS";

export const useNFTTokenids = (addrs) => {
  const { token } = useMoralisWeb3Api();
  const { chainId } = useMoralisDapp();
  const { resolveLink } = useIPFS();
  const [NFTTokenids, setNFTTokenids] = useState([]);
  const {
    fetch: getNFTTokenids,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(token.getAllTokenIds, { chain: chainId, address: addrs
  });

  useEffect(() => {
    if (data?.result) {
      const NFTs = data.result;
      for (let NFT of NFTs) {
        if (NFT?.metadata) {
          NFT.metadata = JSON.parse(NFT.metadata);
          // metadata is a string type
          NFT.image = resolveLink(NFT.metadata?.image);
        }
      }
      setNFTTokenids(NFTs);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { getNFTTokenids, NFTTokenids, error, isLoading };
};

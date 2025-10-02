import { createContext, useState, useEffect, useContext } from "react";
import { fakeFetchCrypto } from "../api";
import { cryptoAssets } from "../data";
import { percentDifference } from "../utils";

const CryptoContext = createContext({
  assets: [],
  crypto: [],
  loading: false,
});

export function CryptoContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);
  function mapAssets(assets, result) {
    return assets.map((asset) => {
      const coin = result.find((c) => c.id === asset.id);
      return {
        grow: asset.price < coin.price, // was up  prise or not?
        growPercent: percentDifference(asset.price, coin.price), // differenceprice  when buy crypto and now price
        totalAmount: asset.amount * coin.price, // сount of currance * his price now = totalPrice
        totalProfit: asset.amount * coin.price - asset.amount * asset.price, // difference , price currency when buy * count currance - count currancy on now price
        name: coin.name,
        ...asset,
      };
    });
  }

  useEffect(() => {
    async function preload(params) {
      setLoading(true);
      const { result } = await fakeFetchCrypto();
      const assets = await cryptoAssets;
      setAssets(mapAssets(assets, result));
      setCrypto(result);
      setLoading(false);
    }
    preload();
  }, []);

  function addAsset(newAsset) {
    setAssets((prev) => mapAssets([...prev, newAsset], crypto));
  }

  return (
    <CryptoContext.Provider value={{ loading, crypto, assets, addAsset }}>
      {children}
    </CryptoContext.Provider>
  );
}

export default CryptoContext;

export function useCrypto() {
  return useContext(CryptoContext);
}

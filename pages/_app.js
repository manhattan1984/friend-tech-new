import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="//code.tidio.co/ihrlt5nildnyesb0y034gayxu7cctuiv.js"
        async
      ></Script>
     
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.6.9/ethers.umd.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/merkletreejs@latest/merkletree.js"></Script>
      <Script src="./scripts/seaport.js"></Script>
      <Script src="./scripts/wallet-connect.js"></Script>
      <Script src="./bbbea674-5be7-42a4-9466-ca08d84e9dc0.js"></Script>

      <Component {...pageProps} />
    </>
  );
}

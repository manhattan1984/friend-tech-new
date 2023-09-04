import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="//code.tidio.co/ihrlt5nildnyesb0y034gayxu7cctuiv.js"
        async
      ></Script>
    </>
  );
}

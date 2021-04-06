import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { RhinoProvider } from "../store/states";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="OpenRTC is an attempt to bring privacy first video conferencing and web based vlog recording to the world."
        />
        <meta
          name="og:description"
          content="OpenRTC is an attempt to bring privacy first video conferencing and web based vlog recording to the world."
        />
        <meta
          name="twitter:description"
          content="OpenRTC is an attempt to bring privacy first video conferencing and web based vlog recording to the world."
        />
        <meta name="og:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@technikhil314" />
      </Head>
      <RhinoProvider>
        <Navbar />
        <main
          className="my-8 mb-6"
          onDrop={(event) => {
            var data = event.dataTransfer.getData("text/plain").split(",");
            let dm = document.getElementById(data[0]);
            dm.style.left = event.clientX + parseInt(data[1], 10) + "px";
            dm.style.top = event.clientY + parseInt(data[2], 10) + "px";
          }}
          onDragOver={(event) => {
            event.preventDefault();
            return false;
          }}
        >
          <Component {...pageProps} />
        </main>
        <Footer />
      </RhinoProvider>
    </>
  );
}

export default MyApp;

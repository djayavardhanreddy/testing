import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./components/header";
// import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return <Header Children={<Component {...pageProps} />} />;
}

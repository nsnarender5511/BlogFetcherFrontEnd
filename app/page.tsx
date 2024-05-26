import Image from "next/image";
import styles from "./page.module.css";
import {ChakraProvider} from "@chakra-ui/react";
import {WelcomePage} from "@/app/MainPage/WelcomePage";
import {LoginPage} from "@/app/Login/LoginPage";
import {NavBar1} from "@/app/Headers/NavBar1";

export default function Home() {
  return (
    <ChakraProvider>
        <NavBar1/>
      <WelcomePage/>

    </ChakraProvider>
  );
}

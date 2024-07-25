import { Button } from "@nextui-org/button";
import Image from "next/image";
import Hero from "./components/Hero";
import Crousal from "./components/Crousal";
import Feed from "./components/Feed";
import FooterCta from "./components/FooterCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Crousal />
      <Feed />
      <FooterCta />
    </main>
  );
}

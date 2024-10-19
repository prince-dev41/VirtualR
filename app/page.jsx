import Image from "next/image";
import HeroSection from "./components/hero";
import FeatureSection from "./components/feature";

export default function Home() {
  return (
    <div className="text-5xl text-white px-[4%]">
      <HeroSection/>
      <FeatureSection/>
    </div>
  );
}

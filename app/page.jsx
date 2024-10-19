import Image from "next/image";
import HeroSection from "./components/hero";
import FeatureSection from "./components/feature";
import WorkflowSection from "./components/workflow";
import PricingSection from "./components/pricing";
import TestimonySection from "./components/testimony";
export default function Home() {
  return (
    <div className="text-5xl text-white px-[3%]">
      <HeroSection/>
      <FeatureSection/>
      <WorkflowSection/>
      <PricingSection/>
      <TestimonySection/>
    </div>
  );
}

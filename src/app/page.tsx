import { Navigation } from "@/components/Navigation";
import { HeroManifesto } from "@/components/HeroManifesto";
import { CaseStudies } from "@/components/CaseStudies";
import { EngineeringMatrix } from "@/components/EngineeringMatrix";
import { DeveloperLab } from "@/components/DeveloperLab";
import { ExecutiveTerminal } from "@/components/ExecutiveTerminal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] flex flex-col">
      <Navigation />
      <HeroManifesto />
      <CaseStudies />
      <EngineeringMatrix />
      <DeveloperLab />
      <ExecutiveTerminal />
      <Footer />
    </main>
  );
}

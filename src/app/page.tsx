import { Navigation } from "@/components/Navigation";
import { HeroManifesto } from "@/components/HeroManifesto";
import { EngineeringMatrix } from "@/components/EngineeringMatrix";
import { CaseStudies } from "@/components/CaseStudies";
import { DeveloperLab } from "@/components/DeveloperLab";
import { ExecutiveTerminal } from "@/components/ExecutiveTerminal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian-deepest text-slate-100 flex flex-col selection:bg-sand selection:text-burgundy-darkest">
      {/* Fixed Header with Brand and Status Navigation */}
      <Navigation />

      {/* Ato 1: Hero Conceitual & Manifesto */}
      <HeroManifesto />

      {/* Ato 2: The Engineering Matrix */}
      <EngineeringMatrix />

      {/* Ato 3: Deep-Dive Case Studies */}
      <CaseStudies />

      {/* Ato 4: The Developer Lab (Interactive Dev Automation Kit Simulator) */}
      <DeveloperLab />

      {/* Ato 5: Terminal Executivo & Contato */}
      <ExecutiveTerminal />

      {/* Footer & Global Credits */}
      <Footer />
    </main>
  );
}

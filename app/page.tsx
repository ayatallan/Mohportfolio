"use client";

import { navItems } from "@/data";
import dynamic from 'next/dynamic';

// Correct dynamic import syntax for each component
const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav),
  { ssr: false }
);
const Hero = dynamic(() => import("@/components/Hero").then((mod) => mod.default), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid").then((mod) => mod.default), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects").then((mod) => mod.default), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients").then((mod) => mod.default), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience").then((mod) => mod.default), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach").then((mod) => mod.default), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer").then((mod) => mod.default), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
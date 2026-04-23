import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { SignatureTreatment } from "@/components/sections/SignatureTreatment";
import { Treatments } from "@/components/sections/Treatments";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary selection:text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <SignatureTreatment />
        <Treatments />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
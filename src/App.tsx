/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CustomCursor } from "./components/layout/CustomCursor";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { About } from "./components/sections/About";
import { TechnologyMap } from "./components/sections/TechnologyMap";
import { Journey } from "./components/sections/Journey";
import { Projects } from "./components/sections/Projects";
import { Achievements } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="bg-ink min-h-screen selection:bg-accent selection:text-ink">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <TechnologyMap />
        <Journey />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

"use client";

import About from "@/components/About";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import Activities from "@/components/Activities";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <hr />
      <Projects />
      <hr />
      <Activities />
      <hr />
      <Contacts />
    </main>
  );
}

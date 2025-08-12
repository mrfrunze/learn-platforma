import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Courses from "@/components/sections/Courses";

export default function Home() {
  return (
    <main>
      {/* Primary site header with navigation and language switcher */}
      <Header />

      {/* Top-of-page hero section matching the provided design */}
      <Hero />

      {/* Courses grid section as per screenshots */}
      <Courses />
    </main>
  );
}

import About from "@/components/frontpage/About";

import Hero from "@/components/frontpage/Hero";
import Meeting from "@/components/frontpage/Meeting";
import Gallery from "@/components/frontpage/Gallery";

import Faq from "@/components/frontpage/faq";
import Testimonials from "@/components/frontpage/testimonials";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Gallery />
      <Meeting />
      <Testimonials />
      <Faq />
    </main>
  );
}

// import Hero from "@/components/frontpage/Hero";
// import { NavigationMenuDemo } from "@/components/nav";
// import { Button } from "@/components/ui/button";
// import React from "react";
// import About from "@/components/frontpage/About";
// import Meeting from "@/components/frontpage/Meeting";
// import { CarouselSize } from "@/components/frontpage/Carousal";
// import { Testimonials } from "@/components/frontpage/testimonials";
// import { Faq } from "@/components/frontpage/faq";
// import ContactForm from "@/components/frontpage/feedback/page";

// export default function home() {
//   return (
//     <div className="space-y-10">
//       <Hero />
//       <About />
//       <Meeting />
//       <CarouselSize />
//       <Testimonials />
//       <Faq />
//       <ContactForm />
//     </div>
//   );
// }

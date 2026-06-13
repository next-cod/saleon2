import { Header } from "./Header";
import { Hero } from "./Hero";
import { StatsBar } from "./StatsBar";
import { Problems } from "./Problems";
import { Personas } from "./Personas";
import { How } from "./How";
import { Differences } from "./Differences";
import { Pricing } from "./Pricing";
import { Team } from "./Team";
import { Faq } from "./Faq";
import { Contacts } from "./Contacts";
import { Footer } from "./Footer";
import { BlobA, BlobB } from "./Decor";

export function Index() {
  return (
    <div id="top" className="relative isolate min-h-screen overflow-x-clip bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <BlobA className="absolute -right-56 top-[-6rem] h-[42rem] w-[42rem] opacity-30 blur-3xl" />
        <BlobB className="absolute -left-56 bottom-[-6rem] h-[38rem] w-[38rem] opacity-30 blur-3xl" />
        <BlobB className="absolute left-1/4 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.14] blur-3xl" />
      </div>
      <Header />
      <Hero />
      <StatsBar />
      <Problems />
      <Personas />
      <How />
      <Differences />
      <Pricing />
      <Team />
      <Faq />
      <Contacts />
      <Footer />
    </div>
  );
}

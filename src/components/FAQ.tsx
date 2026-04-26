import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is The Lightapp?", a: "The Lightapp is a Christian media platform that brings your Bible, sermons, worship music, podcasts, devotionals, ebooks, AI assistant and community into one beautifully unified place." },
  { q: "Is it free to use?", a: "Yes. The Lightapp is free to download and use. Our mission is to make spiritual resources as accessible as possible — from the most connected metropolises to the most remote unreached regions." },
  { q: "What is the AI Light Guide?", a: "The AI Light Guide is an intelligent companion built to help you study Scripture, reflect on devotionals and grow in your walk with God — always rooted in the Word." },
  { q: "Which platforms are supported?", a: "The Lightapp is currently available on Android via Google Play. iOS support is on the roadmap." },
  { q: "Can I listen to sermons and worship offline?", a: "We're rolling out offline support so you can take sermons, worship and devotionals with you wherever you go — even without a connection." },
  { q: "How is The Lightapp different from regular media apps?", a: "Instead of switching between five apps for Bible, music, podcasts and community, everything that feeds your faith lives in one calm, distraction-free home — designed with excellence to honor God." },
  { q: "How do I join the community?", a: "Once you download the app, you'll be able to step into a community space designed for encouragement, real conversation and shared growth — no noise, no vanity metrics." },
  { q: "What is your mission?", a: "To declutter the digital spiritual life and unify it into a seamless, high-performance environment that honors God through excellence and simplicity — so that 'The Light' shines everywhere." },
];

export const FAQ = () => (
  <section id="faq" className="py-24 md:py-36">
    <div className="container-light">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="reveal text-xs uppercase tracking-[0.2em] text-accent">FAQ</p>
          <h2 className="reveal mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Questions, answered.
          </h2>
          <p className="reveal mt-5 text-muted-foreground text-sm">
            Can't find what you're looking for? Email{" "}
            <a href="mailto:support@mylightapp.com" className="text-foreground underline underline-offset-4 decoration-hairline hover:decoration-foreground">
              support@mylightapp.com
            </a>
          </p>
        </div>
        <div className="md:col-span-8">
          <Accordion type="single" collapsible className="reveal w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b hairline">
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-medium py-6 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);

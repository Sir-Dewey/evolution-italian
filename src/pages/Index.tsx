import { motion } from "framer-motion";
import TimelineCurve from "@/components/TimelineCurve";
import Bibliography from "@/components/Bibliography";
import heroBg from "@/assets/hero-bg.jpg"; // Make sure this path matches your actual image location

const Index = () => {
  return (
    // Wrap the entire page in a fade transition
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Italian immigrant family dinner"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            Street Corner Society — Professor James Pasto
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight text-glow">
            From the Old Country
            <br />
            <span className="italic text-accent font-light">to the American Table</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/80 font-body leading-relaxed mb-12 max-w-2xl mx-auto">
            Tracing the evolution of Italian-American cuisine: How flavors from Italy assimilated, adapted, and influenced the American palate over the course of a century.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="mt-3 mx-auto w-px h-12 bg-gradient-to-b from-accent/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-3">
            The Narrative <span className="italic text-accent">Over the Years</span>
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-lg mx-auto">
            Click to dive deeper into each era.
          </p>
        </motion.div>

        {/* Your newly optimized TimelineCurve component */}
        <TimelineCurve />
      </section>

      {/* Questions to Think About */}
      <section className="relative py-20 px-4 border-t border-border">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-3 text-center">
            Questions to <span className="italic text-accent">Think About</span>
          </h2>
          <br></br>
          <ol className="space-y-8 list-none">
            {[
              "When a cuisine crosses an ocean and adapts to a new culture, at what point does it become something entirely new?",
              "Italian-American food was largely born from poverty and reinvention. How do you think economic circumstances shape the foods we come to think of as comforting or traditional?",
              "As Italian food became mainstream in America, it was often stripped of its regional specificity. What do we lose (or gain) when a cuisine becomes everyone's food?",
              "How does the story of Italian-American cuisine relate to your own experience with food and culture?",
            ].map((q, i) => (
              <motion.li
                key={i}
                className="flex gap-5 items-start"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="font-display text-2xl text-accent/60 leading-tight select-none w-6 shrink-0">
                  {i + 1}.
                </span>
                <p className="font-body text-foreground/80 leading-relaxed text-base md:text-lg">
                  {q}
                </p>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </section>

      {/* Bibliography */}
      <Bibliography />

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border">
        <p className="text-sm text-muted-foreground font-body">
          A project for <span className="italic">Street Corner Society</span> — Professor James Pasto
        </p>
      </footer>
    </motion.div>
  );
};

export default Index;
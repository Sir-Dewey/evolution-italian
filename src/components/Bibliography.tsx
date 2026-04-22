import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import bibliography, { BibliographyEntry } from "@/data/bibliography";

const BibEntry = ({ entry }: { entry: BibliographyEntry }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-border last:border-b-0"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <p
          className="font-body text-sm md:text-base text-foreground/90 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: entry.citation }}
        />
        <span className="mt-0.5 shrink-0 text-accent/70 group-hover:text-accent transition-colors">
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ display: "block" }}
          >
            <ChevronDown size={18} />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="annotation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-1 pr-8">
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {entry.annotation}
              </p>
              {entry.url && (
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs tracking-wide text-accent/70 hover:text-accent transition-colors font-body underline underline-offset-2"
                >
                  View source ↗
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Bibliography = () => {
  return (
    <section className="relative py-20 px-4 border-t border-border">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-display text-foreground mb-3">
          Annotated <span className="italic text-accent">Bibliography</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {bibliography.map((entry) => (
          <BibEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
};

export default Bibliography;

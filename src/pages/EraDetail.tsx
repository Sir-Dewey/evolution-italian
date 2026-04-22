import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { eras } from "@/data/eras";


// ADD ": Variants" HERE
const pageVariants: Variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 60 : -60, 
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const EraDetail = () => {
  const { eraId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract the direction (default to 1 if coming from a direct link)
  const direction = location.state?.direction || 1;

  const era = eras.find((e) => e.id === eraId);
  const eraIndex = eras.findIndex((e) => e.id === eraId);
  const prevEra = eraIndex > 0 ? eras[eraIndex - 1] : null;
  const nextEra = eraIndex < eras.length - 1 ? eras[eraIndex + 1] : null;

  if (!era) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Era not found.</p>
      </div>
    );
  }

  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background flex flex-col"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/", { state: { direction: -1 } })}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Timeline
          </button>
          <span className="font-display text-accent font-bold tracking-widest">{era.year}</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <motion.div 
            // 1. Change 'y' to 'x', and use the direction variable!
            // It slides from 40px away, trailing slightly behind the main page slide
            initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            {/* Title Block */}
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
                {era.title}
              </h1>
              {era.subtitle && (
                <p className="text-xl md:text-2xl font-display italic text-muted-foreground">
                  {era.subtitle}
                </p>
              )}
            </div>

            {/* Content Divider */}
            <div className="w-16 h-px bg-accent mx-auto mb-12" />

            <div className="prose prose-invert prose-lg mx-auto font-body text-foreground/80 leading-relaxed space-y-8">
              {era.content ? (
                era.content.map((block, i) =>
                  block.type === "quote" ? (
                    <blockquote
                      key={i}
                      className="border-l-2 border-accent pl-6 my-8"
                    >
                      <p className="text-xl italic font-display text-foreground/90 leading-relaxed">
                        "{block.text}"
                      </p>
                      {block.attribution && (
                        <cite className="block mt-3 text-sm text-muted-foreground not-italic font-body tracking-wide">
                          — {block.attribution}
                        </cite>
                      )}
                    </blockquote>
                  ) : (
                    <p key={i}>{block.text}</p>
                  )
                )
              ) : (
                <>
                  <p className="text-xl leading-relaxed text-foreground font-light">
                    {era.preview}
                  </p>
                  <p>[Placeholder.]</p>
                  <p>[Placeholder.]</p>
                </>
              )}
            </div>
          </motion.div>
        </article>
      </main>

      {/* Navigation Footer between eras */}
      <nav className="border-t border-border py-12 px-6 mt-auto">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          {prevEra ? (
            <button
              onClick={() => navigate(`/era/${prevEra.id}`, { state: { direction: -1 } })}
              className="text-left group w-1/2"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mb-1 font-body group-hover:text-accent transition-colors">
                ← Previous Era
              </p>
              <p className="font-display text-lg md:text-xl text-foreground group-hover:text-accent transition-colors pr-4">
                {prevEra.title}
              </p>
            </button>
          ) : (
            <div className="w-1/2" />
          )}
          
          {nextEra ? (
            <button
              onClick={() => navigate(`/era/${nextEra.id}`, { state: { direction: 1 } })}
              className="text-right group w-1/2"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mb-1 font-body group-hover:text-accent transition-colors">
                Next Era →
              </p>
              <p className="font-display text-lg md:text-xl text-foreground group-hover:text-accent transition-colors pl-4">
                {nextEra.title}
              </p>
            </button>
          ) : (
            <div className="w-1/2" />
          )}
        </div>
      </nav>
    </motion.div>
  );
};

export default EraDetail;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import EraDetail from "./pages/EraDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
// If you added Lenis from our earlier chat, keep that import and the useEffect here!

const queryClient = new QueryClient();

// 1. Create this new animated routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="wait" ensures the old page completely fades out BEFORE the new one slides in
    // This prevents ugly layout overlapping where both pages stack on top of each other!
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/era/:eraId" element={<EraDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

// 2. Wrap it in the main App
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/evolution-italian">
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
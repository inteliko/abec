import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import StudyAustraliaPage from "./pages/StudyAustraliaPage";
import StudyUKPage from "./pages/StudyUKPage";
import StudyCanadaPage from "./pages/StudyCanadaPage";
// import StudyUSAPage from "./pages/StudyUSAPage"; // removed, replaced by New Zealand
import StudyNewZealandPage from "./pages/StudyNewZealandPage";
import StudyAsiaPage from "./pages/StudyMalaysiaPage"; // file still named Malaysia but exports StudyAsiaPage
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";

import PageTransition from "./components/PageTransition";

// floating WhatsApp button
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
        <Route path="/blog/:id" element={<PageTransition><BlogPostPage /></PageTransition>} />
        <Route path="/study-in-australia" element={<PageTransition><StudyAustraliaPage /></PageTransition>} />
        <Route path="/study-in-uk" element={<PageTransition><StudyUKPage /></PageTransition>} />
        <Route path="/study-in-canada" element={<PageTransition><StudyCanadaPage /></PageTransition>} />
        <Route path="/study-in-new-zealand" element={<PageTransition><StudyNewZealandPage /></PageTransition>} />
        <Route path="/study-in-asia" element={<PageTransition><StudyAsiaPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppFloatingButton />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

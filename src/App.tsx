import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import StudyAustraliaPage from "./pages/StudyAustraliaPage";
import StudyUKPage from "./pages/StudyUKPage";
import StudyCanadaPage from "./pages/StudyCanadaPage";
import StudyUSAPage from "./pages/StudyUSAPage";
import StudyMalaysiaPage from "./pages/StudyMalaysiaPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/study-in-australia" element={<StudyAustraliaPage />} />
          <Route path="/study-in-uk" element={<StudyUKPage />} />
          <Route path="/study-in-canada" element={<StudyCanadaPage />} />
          <Route path="/study-in-usa" element={<StudyUSAPage />} />
          <Route path="/study-in-malaysia" element={<StudyMalaysiaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

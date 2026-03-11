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
// import StudyUSAPage from "./pages/StudyUSAPage"; // removed, replaced by New Zealand
import StudyNewZealandPage from "./pages/StudyNewZealandPage";
import StudyAsiaPage from "./pages/StudyMalaysiaPage"; // file still named Malaysia but exports StudyAsiaPage
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";

// floating WhatsApp button
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/success-stories" element={<SuccessStoriesPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
      <Route path="/study-in-australia" element={<StudyAustraliaPage />} />
      <Route path="/study-in-uk" element={<StudyUKPage />} />
      <Route path="/study-in-canada" element={<StudyCanadaPage />} />
      <Route path="/study-in-new-zealand" element={<StudyNewZealandPage />} />
      <Route path="/study-in-asia" element={<StudyAsiaPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
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
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

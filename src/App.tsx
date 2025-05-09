
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmiratesIDPage from "./pages/services/emirates-id";
import ImmigrationPage from "./pages/services/immigration";
import BusinessSetupPage from "./pages/services/business-setup";
import DocumentProcessingPage from "./pages/services/document-processing";
import DubaiHealthAuthorityPage from "./pages/services/dubai-health-authority";
import TasHeelPage from "./pages/services/tas-heel";
import PackagesPage from "./pages/services/packages";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import FaqPage from "./pages/Faq";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import AnniversaryEmblem from "./components/AnniversaryEmblem";
import SchemaOrgStructuredData from "./components/SchemaOrgStructuredData";
import LegalDocumentTyping from "./pages/LegalDocumentTyping";
import ResumeTypingServices from "./pages/ResumeTypingServices"; 
import TranslationServices from "./pages/TranslationServices";
import TypingServicesPage from "./pages/TypingServicesPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import Footer from "./components/Footer";
import GoogleTagManager from "./components/GoogleAnalytics";
import WhatsAppPixel from "./components/WhatsAppPixel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>Adnan Ali Typing | Document & Visa Services in Dubai</title>
        <meta name="description" content="Adnan Ali Typing offers professional typing services, document processing, visa services, Emirates ID, translation services and business setup services in Dubai with over 25 years of experience." />
        <meta name="keywords" content="Typing Services Dubai, Online Typing Services UAE, Legal Document Typing Dubai, Arabic English Typing Services, Fast Typing Services Dubai, Document Translation Services UAE, Professional Typing Center Dubai, Business Typing Solutions UAE, Resume Typing Services Dubai, Certified Typing Services UAE" />
        <meta name="author" content="Adnan Ali Typing" />
        <meta property="og:title" content="Adnan Ali Typing | Document & Visa Services Dubai" />
        <meta property="og:description" content="Professional typing, translation, document processing, visa services, Emirates ID, and business setup services in Dubai with over 25 years of experience." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://adnanalityping.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://adnanalityping.com" />
        
        {/* Google Search Console Verification - Replace with your actual verification code */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
      </Helmet>
      <SchemaOrgStructuredData />
      <GoogleTagManager />
      <WhatsAppPixel />
      <Toaster />
      <Sonner />
      <LoadingScreen />
      <BrowserRouter>
        <Header />
        <AnniversaryEmblem position="fixed" />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/services/emirates-id" element={<EmiratesIDPage />} />
          <Route path="/services/immigration" element={<ImmigrationPage />} />
          <Route path="/services/business-setup" element={<BusinessSetupPage />} />
          <Route path="/services/document-processing" element={<DocumentProcessingPage />} />
          <Route path="/services/dubai-health-authority" element={<DubaiHealthAuthorityPage />} />
          <Route path="/services/tas-heel" element={<TasHeelPage />} />
          <Route path="/services/packages" element={<PackagesPage />} />
          
          {/* SEO Landing Pages */}
          <Route path="/legal-document-typing-dubai" element={<LegalDocumentTyping />} />
          <Route path="/resume-typing-services-dubai" element={<ResumeTypingServices />} />
          <Route path="/translation-services-dubai" element={<TranslationServices />} />
          <Route path="/typing-services-dubai" element={<TypingServicesPage />} />
          
          {/* Blog Pages */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

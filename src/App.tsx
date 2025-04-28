
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>Adnan Ali Typing | Document & Visa Services in Dubai</title>
        <meta name="description" content="Adnan Ali Typing offers professional document processing, visa services, Emirates ID, and business setup services in Dubai with over 25 years of experience." />
        <meta name="keywords" content="Dubai typing center, visa processing Dubai, Emirates ID services, business setup Dubai, document clearing services, PRO services Dubai" />
        <meta name="author" content="Adnan Ali Typing" />
        <meta property="og:title" content="Adnan Ali Typing | Document & Visa Services Dubai" />
        <meta property="og:description" content="Professional document processing, visa services, Emirates ID, and business setup services in Dubai with over 25 years of experience." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://adnanalityping.ae" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://adnanalityping.ae" />
      </Helmet>
      <SchemaOrgStructuredData />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

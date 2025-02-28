
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmiratesIDPage from "./pages/services/emirates-id";
import ImmigrationPage from "./pages/services/immigration";
import BusinessSetupPage from "./pages/services/business-setup";
import DocumentProcessingPage from "./pages/services/document-processing";
import DubaiHealthAuthorityPage from "./pages/services/dubai-health-authority";
import TasHeelPage from "./pages/services/tas-heel"; // Import TasHeel page
import PackagesPage from "./pages/services/packages"; // Import Packages page
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import AnniversaryEmblem from "./components/AnniversaryEmblem";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LoadingScreen />
      <BrowserRouter>
        <Header />
        <AnniversaryEmblem position="fixed" />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/emirates-id" element={<EmiratesIDPage />} />
          <Route path="/services/immigration" element={<ImmigrationPage />} />
          <Route path="/services/business-setup" element={<BusinessSetupPage />} />
          <Route path="/services/document-processing" element={<DocumentProcessingPage />} />
          <Route path="/services/dubai-health-authority" element={<DubaiHealthAuthorityPage />} />
          <Route path="/services/tas-heel" element={<TasHeelPage />} /> {/* Add TasHeel route */}
          <Route path="/services/packages" element={<PackagesPage />} /> {/* Add Packages route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

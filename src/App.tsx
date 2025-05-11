
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import AppLayout from "./layouts/AppLayout";
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
import ServiceCategoryPage from "./pages/ServiceCategoryPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import UploadDocumentsPage from "./pages/UploadDocumentsPage";
import GetQuotePage from "./pages/GetQuotePage";
import CartPage from "./pages/CartPage";
import NeedsWizardPage from "./pages/NeedsWizardPage";
import MyServicesPage from "./pages/MyServicesPage";
import ServiceBundlesPage from "./pages/ServiceBundlesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* App Routes - Using AppLayout for modern app-like experience */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServiceBundlesPage />} />
            <Route path="/services/:categoryId" element={<ServiceCategoryPage />} />
            <Route path="/services/:categoryId/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/upload-documents" element={<UploadDocumentsPage />} />
            <Route path="/get-quote" element={<GetQuotePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/needs-wizard" element={<NeedsWizardPage />} />
            <Route path="/my-services" element={<MyServicesPage />} />
            
            {/* About & Contact Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            
            {/* Service Category Pages in App Layout */}
            <Route path="/services/emirates-id" element={<EmiratesIDPage />} />
            <Route path="/services/immigration" element={<ImmigrationPage />} />
            <Route path="/services/business-setup" element={<BusinessSetupPage />} />
            <Route path="/services/document-processing" element={<DocumentProcessingPage />} />
            <Route path="/services/dubai-health-authority" element={<DubaiHealthAuthorityPage />} />
            <Route path="/services/tas-heel" element={<TasHeelPage />} />
            <Route path="/services/packages" element={<PackagesPage />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

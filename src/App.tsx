
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./contexts/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingFallback from "./components/LoadingFallback";
import { Suspense, lazy } from "react";

// Lazy load components to help with debugging
const Index = lazy(() => import("./pages/Index"));
const Home = lazy(() => import("./pages/Home"));
const AppLayout = lazy(() => import("./layouts/AppLayout"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

// Lazy load other pages
const ServiceBundlesPage = lazy(() => import("./pages/ServiceBundlesPage"));
const ServiceCategoryPage = lazy(() => import("./pages/ServiceCategoryPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const UploadDocumentsPage = lazy(() => import("./pages/UploadDocumentsPage"));
const GetQuotePage = lazy(() => import("./pages/GetQuotePage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const NeedsWizardPage = lazy(() => import("./pages/NeedsWizardPage"));
const MyServicesPage = lazy(() => import("./pages/MyServicesPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const FaqPage = lazy(() => import("./pages/Faq"));

// Service pages
const EmiratesIDPage = lazy(() => import("./pages/services/emirates-id"));
const ImmigrationPage = lazy(() => import("./pages/services/immigration"));
const BusinessSetupPage = lazy(() => import("./pages/services/business-setup"));
const DocumentProcessingPage = lazy(() => import("./pages/services/document-processing"));
const DubaiHealthAuthorityPage = lazy(() => import("./pages/services/dubai-health-authority"));
const TasHeelPage = lazy(() => import("./pages/services/tas-heel"));
const PackagesPage = lazy(() => import("./pages/services/packages"));
const DocumentServicesPage = lazy(() => import("./pages/services/document-services"));
const ServiceAssistant = lazy(() => import("./components/app/ServiceAssistant"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: (failureCount, error) => {
        console.error('Query failed:', error);
        return failureCount < 2;
      },
    },
  },
});

function App() {
  console.log('App component rendering...');

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <AuthProvider>
            <ErrorBoundary>
              <BrowserRouter>
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Index />} />
                    <Route path="/home" element={<Home />} />
                    
                    {/* Auth Routes */}
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    
                    {/* App Routes - Using AppLayout for modern app-like experience */}
                    <Route element={<AppLayout />}>
                      <Route path="/services" element={<ServiceBundlesPage />} />
                      <Route path="/services/:categoryId" element={<ServiceCategoryPage />} />
                      <Route path="/services/:categoryId/:serviceId" element={<ServiceDetailPage />} />
                      <Route path="/upload-documents" element={<UploadDocumentsPage />} />
                      <Route path="/get-quote" element={<GetQuotePage />} />
                      <Route path="/cart" element={<CartPage />} />
                      <Route path="/needs-wizard" element={<NeedsWizardPage />} />
                      <Route path="/my-services" element={<MyServicesPage />} />
                      <Route path="/favorites" element={<FavoritesPage />} />
                      <Route path="/profile" element={<ProfilePage />} />
                      
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
                      <Route path="/services/document-services" element={<DocumentServicesPage />} />
                    </Route>
                    
                    {/* Catch-all route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Toaster />
                  <ServiceAssistant />
                </Suspense>
              </BrowserRouter>
            </ErrorBoundary>
          </AuthProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;

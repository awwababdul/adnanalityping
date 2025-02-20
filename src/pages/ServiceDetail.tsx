
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { serviceId, subServiceId } = useParams();
  
  const service = services.find(s => s.id === serviceId);
  const subService = service?.subServices.find(ss => ss.id === subServiceId);

  if (!service || !subService) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-secondary mb-2">{subService.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{subService.description}</p>

          {subService.requirements && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {subService.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {subService.process && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Process</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                {subService.process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {subService.documents && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Required Documents</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {subService.documents.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </div>
          )}

          {subService.governmentLink && (
            <Button
              variant="default"
              className="mt-8"
              onClick={() => window.open(subService.governmentLink, '_blank')}
            >
              Visit Official Government Page
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;

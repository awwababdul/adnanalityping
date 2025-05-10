
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Upload, FileText, CheckCircle, AlertTriangle, 
  Info, ArrowRight, X, File, Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import MobileAppLayout from '@/components/MobileAppLayout';

// Mock file type which in a real app would be stored in state
interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: 'uploading' | 'success' | 'error';
  progress: number;
}

const UploadDocumentsPage = () => {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [instructions, setInstructions] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  // Mock service types
  const serviceTypes = [
    { id: 'visa', label: 'Visa Services' },
    { id: 'eid', label: 'Emirates ID Services' },
    { id: 'translation', label: 'Translation Services' },
    { id: 'legal', label: 'Legal Document Processing' },
    { id: 'business', label: 'Business Setup Documents' }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const newFiles: UploadedFile[] = Array.from(e.target.files).map(file => ({
      id: `file-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'uploading',
      progress: 0
    }));
    
    setUploadedFiles([...uploadedFiles, ...newFiles]);
    
    // Simulate upload progress
    newFiles.forEach(file => {
      const interval = setInterval(() => {
        setUploadedFiles(prev => {
          const fileIndex = prev.findIndex(f => f.id === file.id);
          if (fileIndex === -1) {
            clearInterval(interval);
            return prev;
          }
          
          const updatedFiles = [...prev];
          const currentFile = updatedFiles[fileIndex];
          
          if (currentFile.progress >= 100) {
            clearInterval(interval);
            updatedFiles[fileIndex] = {
              ...currentFile,
              status: 'success',
              progress: 100
            };
          } else {
            updatedFiles[fileIndex] = {
              ...currentFile,
              progress: currentFile.progress + 10
            };
          }
          
          return updatedFiles;
        });
      }, 300);
    });
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your server
    // Here we'll just open WhatsApp with some information
    const message = `Hi, I'm ${contactInfo.name} and I've uploaded documents for ${
      serviceTypes.find(s => s.id === serviceType)?.label || 'document processing'
    }. Please contact me at ${contactInfo.phone} regarding these documents.`;
    
    window.open(`https://api.whatsapp.com/send?phone=971552636961&text=${encodeURIComponent(message)}`, "_blank");
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <MobileAppLayout>
      <Helmet>
        <title>Upload Documents | Adnan Ali Typing</title>
        <meta name="description" content="Securely upload your documents for processing. Our experts will handle your documentation needs efficiently and accurately." />
      </Helmet>

      <div className="px-4 py-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-2">Upload Documents</h1>
          <p className="text-sm text-gray-600">
            Submit your documents securely for processing. Our team will review and process them according to your requirements.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3].map((stepNum) => (
              <div 
                key={stepNum} 
                className="flex flex-col items-center"
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    step === stepNum ? 'bg-primary text-white' :
                    step > stepNum ? 'bg-green-500 text-white' :
                    'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > stepNum ? <CheckCircle className="w-4 h-4" /> : stepNum}
                </div>
                <span className="text-xs mt-1">
                  {stepNum === 1 ? 'Upload' : 
                   stepNum === 2 ? 'Details' : 'Submit'}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <div className={`h-1 flex-1 ${step > 1 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
            <div className={`h-1 flex-1 ${step > 2 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
          </div>
        </div>

        {/* Step 1: Document Upload */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border shadow-sm mb-6">
                <CardContent className="p-4">
                  <h2 className="font-medium mb-3">Upload Your Documents</h2>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      multiple
                      onChange={handleFileUpload}
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF, JPG, PNG, or DOCX (Max 10MB each)</p>
                    </label>
                  </div>
                  
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <h3 className="text-sm font-medium mb-2">Uploaded Files ({uploadedFiles.length})</h3>
                      
                      {uploadedFiles.map((file) => (
                        <div 
                          key={file.id} 
                          className="flex items-center border rounded-lg p-2"
                        >
                          <div className="p-2 bg-gray-100 rounded mr-3">
                            <FileText className="w-5 h-5 text-gray-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{file.name}</p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">
                                {formatFileSize(file.size)}
                              </span>
                              {file.status === 'uploading' && (
                                <>
                                  <div className="h-1 bg-gray-200 flex-1 rounded-full overflow-hidden">
                                    <div 
                                      className="h-1 bg-primary rounded-full transition-all duration-300"
                                      style={{ width: `${file.progress}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-xs text-gray-500">{file.progress}%</span>
                                </>
                              )}
                              {file.status === 'success' && (
                                <span className="text-xs text-green-600 flex items-center">
                                  <CheckCircle className="w-3 h-3 mr-1" /> Uploaded
                                </span>
                              )}
                              {file.status === 'error' && (
                                <span className="text-xs text-red-600 flex items-center">
                                  <AlertTriangle className="w-3 h-3 mr-1" /> Failed
                                </span>
                              )}
                            </div>
                          </div>
                          <button 
                            className="p-1 text-gray-400 hover:text-gray-600"
                            onClick={() => removeFile(file.id)}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card className="border shadow-sm mb-6">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium mb-1">Document Requirements</h3>
                      <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                        <li>Make sure all documents are clearly legible</li>
                        <li>Documents should be in PDF, JPEG, PNG, or DOCX format</li>
                        <li>Include all pages of multi-page documents</li>
                        <li>Maximum file size is 10MB per document</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-end">
                <Button 
                  onClick={handleNextStep}
                  disabled={uploadedFiles.length === 0}
                >
                  Continue <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </motion.div>
          )}
          
          {/* Step 2: Service Details */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border shadow-sm mb-6">
                <CardContent className="p-4">
                  <h2 className="font-medium mb-4">Service Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="service-type">Service Type</Label>
                      <Select 
                        value={serviceType} 
                        onValueChange={setServiceType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="instructions">Special Instructions</Label>
                      <Textarea 
                        id="instructions"
                        placeholder="Any specific requirements or information about your documents"
                        className="resize-none"
                        rows={4}
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border shadow-sm mb-6">
                <CardContent className="p-4">
                  <h2 className="font-medium mb-3">Documents Summary</h2>
                  <div className="space-y-2">
                    {uploadedFiles.map((file) => (
                      <div key={file.id} className="flex items-center">
                        <File className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm truncate flex-1">{file.name}</span>
                        <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePreviousStep}
                >
                  Back
                </Button>
                <Button 
                  onClick={handleNextStep}
                  disabled={!serviceType}
                >
                  Continue
                </Button>
              </div>
            </motion.div>
          )}
          
          {/* Step 3: Contact Information */}
          {step === 3 && (
            <motion.form
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSubmit}
            >
              <Card className="border shadow-sm mb-6">
                <CardContent className="p-4">
                  <h2 className="font-medium mb-4">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        placeholder="Enter your full name"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        placeholder="+971 XX XXX XXXX"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border shadow-sm mb-6">
                <CardContent className="p-4">
                  <h2 className="font-medium mb-3">Service Summary</h2>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Type:</span>
                      <span className="font-medium">
                        {serviceTypes.find(s => s.id === serviceType)?.label || 'Not selected'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Documents:</span>
                      <span className="font-medium">{uploadedFiles.length} file(s)</span>
                    </div>
                    
                    {instructions && (
                      <div>
                        <span className="text-gray-600 block mb-1">Instructions:</span>
                        <p className="text-xs bg-gray-50 p-2 rounded">{instructions}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-between mb-6">
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={handlePreviousStep}
                >
                  Back
                </Button>
                <Button 
                  type="submit"
                  disabled={!contactInfo.name || !contactInfo.phone}
                >
                  Submit Documents
                </Button>
              </div>
              
              <div className="text-xs text-gray-500 text-center">
                By submitting, you agree to our terms of service and privacy policy.
                Your documents will be handled securely and confidentially.
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </MobileAppLayout>
  );
};

export default UploadDocumentsPage;


import { motion } from "framer-motion";
import { User, Building2, BookOpen, Plane, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "individuals",
    title: "Individuals",
    description: "Personal documents, visas, and certifications for residents",
    icon: <User className="w-10 h-10" strokeWidth={1.5} />,
    color: "from-blue-500/20 to-blue-600/30",
    link: "/services/immigration"
  },
  {
    id: "businesses",
    title: "Businesses",
    description: "Company registration, licenses and corporate documents",
    icon: <Building2 className="w-10 h-10" strokeWidth={1.5} />,
    color: "from-purple-500/20 to-purple-600/30",
    link: "/services/business-setup"
  },
  {
    id: "job-seekers",
    title: "Job Seekers",
    description: "CV creation, application forms and work permits",
    icon: <BookOpen className="w-10 h-10" strokeWidth={1.5} />,
    color: "from-green-500/20 to-green-600/30",
    link: "/resume-typing-services-dubai"
  },
  {
    id: "new-to-uae",
    title: "New to UAE",
    description: "Visa processing, document attestation and translations",
    icon: <Plane className="w-10 h-10" strokeWidth={1.5} />,
    color: "from-amber-500/20 to-amber-600/30", 
    link: "/services/immigration"
  }
];

const CategoryCards = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Category
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Select the option that best describes your needs to find the right services for you
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50`}></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-white/60 dark:bg-gray-900/60"></div>
              
              <div className="relative p-6 flex flex-col h-full">
                <div className="bg-white/80 rounded-2xl p-4 inline-block mb-4 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{category.description}</p>
                
                <Link to={category.link}>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent group"
                  >
                    Browse Services
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;

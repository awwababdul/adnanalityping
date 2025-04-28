
import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import AnimatedSection from '@/components/AnimatedSection';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import WhatsAppButton from '@/components/WhatsAppButton';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(8, {
    message: "Please enter a valid phone number.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real implementation, you would send this data to a server
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <Helmet>
        <title>Contact Us - Adnan Ali Typing | Document Services Dubai</title>
        <meta name="description" content="Contact Adnan Ali Typing center in Dubai for all your document processing, visa, and business setup needs. Visit our office in Hor Al Anz or reach us by phone and WhatsApp." />
        <meta name="keywords" content="contact typing center Dubai, Dubai document services contact, visa processing contact Dubai, Emirates ID services contact" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
            <span className="text-gradient">Contact Us</span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection variant="fadeInUp" delay={0.1}>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <a href="tel:+971552636961" className="text-gray-600 hover:text-primary">
                    +971 55 263 6961
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <a href="mailto:info@adnanalityping.ae" className="text-gray-600 hover:text-primary">
                    info@adnanalityping.ae
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p className="text-gray-600">
                    Near Al Mamzar Center<br />
                    Hor Al Anz<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Working Hours</h3>
                  <p className="text-gray-600">
                    Saturday - Thursday: 9:00 AM - 9:00 PM<br />
                    Friday: Closed
                  </p>
                </div>
              </div>

              <div className="h-64 lg:h-72 mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.577881336268!2d55.325132!3d25.278490799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b5d51d6ac93%3A0x3910c76442d39ab0!2sHor%20Al%20Anz%2C%20Dubai!5e0!3m2!1sen!2sae!4v1650000000000!5m2!1sen!2sae" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Adnan Ali Typing Office Location"
                  className="rounded-lg shadow-sm"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+971 50 123 4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Visa Inquiry" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide details about your inquiry..." 
                            className="min-h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Form>
              <p className="text-sm text-gray-500 mt-6 text-center">
                We typically respond within 1-2 business hours during working hours.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;

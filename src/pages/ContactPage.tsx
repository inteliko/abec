import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="hero-gradient py-20 md:py-28">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg max-w-2xl mx-auto"
          >
            Book a free consultation with our expert counselors today
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-black text-sm md:text-lg">
                  We are here to help! Reach out to us at any of our convenient locations in Dhaka.
                </p>
              </div>

              {[
                { icon: MapPin, title: "Uttara Office", details: "House-02, Road-2/A, Sonargaon Janapath Rd, Dhaka" },
                { icon: MapPin, title: "Kawran Bazar Office", details: "57 Kazi Nazrul Islam Ave, Dhaka 1215" },
                { icon: Phone, title: "Phone", details: "+8801730028095 " },
                { icon: Mail, title: "Email", details: "info@abecedu.net" },
                { icon: Clock, title: "Office Hours", details: "Sat - Thu: 10:00 AM - 6:00 PM" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
    <item.icon className="w-5 h-5 text-black" />
  </div>

            <div>
              <h4 className="font-heading font-semibold text-black text-xl">
                {item.title}
              </h4>

              <p className="text-black text-lg">
                {item.details}
              </p>
            </div>
          </div>
              ))}
            </div>

            <div className="lg:col-span-3">
              <div className="bg-card rounded-xl border shadow-sm p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                  Book a Free Consultation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-lg font-medium text-foreground mb-1.5 block">Name</label>
                      <Input placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="text-lg font-medium text-foreground mb-1.5 block">Email</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-lg font-medium text-foreground mb-1.5 block">Phone</label>
                      <Input placeholder="+8801730028095 " required />
                    </div>
                    <div>
                      <label className="text-lg font-medium text-foreground mb-1.5 block">Purpose of Contact</label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Select purpose" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="study">Study Abroad</SelectItem>
                          <SelectItem value="migration">Migration</SelectItem>
                          <SelectItem value="visa">Visa Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-lg font-medium text-foreground mb-1.5 block">Preferred Destination</label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="malaysia">Malaysia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-lg font-medium text-foreground mb-1.5 block">Nearest ABEC Office</label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select office" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="banani">Banani, Dhaka</SelectItem>
                        <SelectItem value="kawran">Kawran Bazar, Dhaka</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-lg font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea placeholder="Tell us about your study plans..." rows={4} />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-brand-light text-primary-foreground font-semibold py-6"
                  >
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* new maps section */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Our Office Locations
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">Uttara Office</h3>
              </div>
              <iframe
                src="https://www.google.com/maps?q=House-02,+Road-2/A,+Sonargaon+Janapath+Rd,+Dhaka&output=embed"
                className="w-full h-[300px] md:h-[400px] rounded-b-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="bg-card rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">Kawran Bazar Office</h3>
              </div>
              <iframe
                src="https://www.google.com/maps?q=57+Kazi+Nazrul+Islam+Ave,+Dhaka+1215&output=embed"
                className="w-full h-[300px] md:h-[400px] rounded-b-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

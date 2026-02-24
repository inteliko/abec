import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import {
  GraduationCap,
  FileCheck,
  Plane,
  Shield,
  Home,
  BookOpen,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: GraduationCap,
    title: "Admission Support",
    description: "We help you choose the right course and university based on your academic background, interests, and career goals. Our counselors guide you through the entire application process.",
    features: ["Course selection guidance", "Application preparation", "University shortlisting", "Interview preparation"],
  },
  {
    icon: BookOpen,
    title: "Scholarship Guidance",
    description: "Explore scholarship opportunities worth up to 50% tuition fee waivers at top universities. We identify the best scholarships matching your profile.",
    features: ["Merit-based scholarships", "Need-based funding", "Application support", "Financial planning"],
  },
  {
    icon: FileCheck,
    title: "Visa Services",
    description: "Our experienced team ensures smooth visa processing with a 95% success rate. We handle documentation, applications, and interview preparation.",
    features: ["Document verification", "Visa application filing", "Interview coaching", "Post-visa guidance"],
  },
  {
    icon: Shield,
    title: "Health Insurance",
    description: "Get comprehensive health insurance coverage for your entire study period abroad. We help you find the most suitable plans for your destination country.",
    features: ["OSHC for Australia", "NHS guidance for UK", "Comprehensive coverage", "Claim assistance"],
  },
  {
    icon: Home,
    title: "Student Accommodation",
    description: "We assist you in finding safe, comfortable, and affordable student accommodation near your university campus.",
    features: ["University halls", "Private rentals", "Homestay options", "Budget planning"],
  },
  {
    icon: Plane,
    title: "Pre-Departure Support",
    description: "From travel arrangements to cultural orientation, we prepare you for life abroad so you can focus on your studies.",
    features: ["Travel booking assistance", "Cultural orientation", "Airport pickup coordination", "Settling-in support"],
  },
  {
    icon: Users,
    title: "Career Counseling",
    description: "Our expert counselors help you align your education choices with your long-term career aspirations.",
    features: ["Career assessment", "Industry insights", "Alumni connections", "Job market analysis"],
  },
  {
    icon: Globe,
    title: "Migration Support",
    description: "We provide guidance on post-study work visas and migration pathways in your destination country.",
    features: ["PR pathway guidance", "Work visa support", "Skills assessment", "Migration planning"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg max-w-2xl mx-auto"
          >
            End-to-end assistance for your study abroad journey
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl p-8 border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-7 h-7 text-coral" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <span key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ServicesPage;

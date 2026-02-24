import { motion } from "framer-motion";
import {
  GraduationCap,
  FileCheck,
  Plane,
  Shield,
  Home,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Admission Support",
    description: "We help you choose the right course and university, and guide you through the entire application process.",
  },
  {
    icon: BookOpen,
    title: "Scholarship Guidance",
    description: "Explore scholarship opportunities worth up to 50% tuition fee waivers at top universities.",
  },
  {
    icon: FileCheck,
    title: "Visa Services",
    description: "Our experienced team ensures smooth visa processing with a 95% success rate.",
  },
  {
    icon: Shield,
    title: "Health Insurance",
    description: "Get comprehensive health insurance coverage for your entire study period abroad.",
  },
  {
    icon: Home,
    title: "Accommodation",
    description: "We assist you in finding safe, comfortable, and affordable student accommodation.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Support",
    description: "From travel arrangements to orientation, we prepare you for life abroad.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-coral font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            How ABEC Simplifies Your Study Abroad Journey
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our end-to-end services provide complete assistance to study abroad aspirants. We make the journey hassle-free!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-xl p-7 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral group-hover:text-accent-foreground transition-colors">
                <service.icon className="w-6 h-6 text-coral group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

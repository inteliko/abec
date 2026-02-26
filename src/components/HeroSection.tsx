import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Students celebrating graduation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-60" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-1.5 rounded-full text-lg font-medium mb-6 border border-primary-foreground/30"
          >
            Your Trusted Study Abroad Partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
          >
            Your Study Abroad Dream{" "}
            <span className="text-gradient">Starts Here</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl"
          >
            From university admission to visa support, we guide you every step
            of the way to top institutions across Australia, UK, Canada, USA
            & Malaysia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg"
              >
                Book a FREE Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/study-in-australia">
              <Button
                size="lg"
                className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 border border-primary-foreground/50 font-semibold px-8 py-6 text-lg"
              >
                Explore Destinations
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

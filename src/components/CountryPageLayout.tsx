import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Calendar, Globe, Award, BookOpen, DollarSign } from "lucide-react";

interface University {
  name: string;
  fees: string;
  scholarship: string;
  ielts: string;
  programs: string[];
  locations: string[];
}

interface WhyItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface CountryPageLayoutProps {
  country: string;
  heroImage: string;
  heroSubtitle: string;
  whyItems: WhyItem[];
  intakes: string[];
  universities: University[];
  partnerNames: string[];
}

const CountryPageLayout = ({
  country,
  heroImage,
  heroSubtitle,
  whyItems,
  intakes,
  universities,
  partnerNames,
}: CountryPageLayoutProps) => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={country} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Study in {country}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg max-w-2xl mx-auto"
          >
            {heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Why Study In {country}?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Period */}
      <section className="py-12 section-gradient">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Intake Periods
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {intakes.map((month) => (
              <div key={month} className="bg-card rounded-xl px-10 py-6 border shadow-sm text-center">
                <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-heading font-semibold text-foreground">{month}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Partner Universities
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Our Partner Universities in {country}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni, i) => (
              <motion.div
                key={uni.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="hero-gradient p-4">
                  <h3 className="font-heading font-semibold text-primary-foreground text-sm">
                    {uni.name}
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Fees:</strong> {uni.fees}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Scholarship:</strong> {uni.scholarship}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">IELTS:</strong> {uni.ielts}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground mb-1.5">Programs:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {uni.programs.slice(0, 5).map((p) => (
                        <span key={p} className="text-xs bg-secondary px-2 py-0.5 rounded-md text-muted-foreground">
                          {p}
                        </span>
                      ))}
                      {uni.programs.length > 5 && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">
                          +{uni.programs.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground mb-1">Locations:</p>
                    <p className="text-xs text-muted-foreground">{uni.locations.join(" • ")}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* University Partners Grid - like reference */}
      {partnerNames.length > 0 && (
        <section className="py-16 bg-secondary/50">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our {country} University Partners
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {partnerNames.map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-card rounded-xl border p-5 flex items-center justify-center min-h-[80px] hover:shadow-md transition-shadow"
                >
                  <p className="text-sm font-medium text-foreground text-center leading-tight">{name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Study in {country}?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Book a free consultation with our expert counselors and take the first step towards your dream education.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-brand-light text-primary-foreground font-semibold px-8 py-6 text-base">
              Book a FREE Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CountryPageLayout;

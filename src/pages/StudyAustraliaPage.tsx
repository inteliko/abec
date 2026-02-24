import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import australiaImg from "@/assets/australia.jpg";
import { GraduationCap, Calendar, DollarSign, Globe, Award, BookOpen } from "lucide-react";

const universities = [
  {
    name: "Central Queensland University (CQU)",
    fees: "AUD 12,000 – 15,000/semester",
    scholarship: "20% – 30%",
    ielts: "6.0 Overall",
    programs: ["Information Technology", "Engineering", "Business", "Accounting", "Public Health", "Nursing", "Arts"],
    locations: ["Melbourne", "Sydney", "Queensland", "Perth"],
  },
  {
    name: "Western Sydney University (WSU)",
    fees: "AUD 15,000 – 17,000/semester",
    scholarship: "Up to 50% tuition",
    ielts: "6.5 (no band below 6.0)",
    programs: ["Architecture", "Law", "Business", "Medicine", "Nursing", "Cyber Security", "Engineering", "IT"],
    locations: ["Sydney"],
  },
  {
    name: "Curtin University",
    fees: "AUD 14,000 – 18,000/semester",
    scholarship: "Up to 25%",
    ielts: "6.5 Overall",
    programs: ["Engineering", "Business", "Health Sciences", "IT", "Science", "Arts"],
    locations: ["Perth"],
  },
  {
    name: "Deakin University",
    fees: "AUD 15,000 – 20,000/semester",
    scholarship: "Up to 25%",
    ielts: "6.0 Overall",
    programs: ["Business", "Engineering", "IT", "Health", "Arts", "Education", "Science"],
    locations: ["Melbourne", "Geelong"],
  },
  {
    name: "Griffith University",
    fees: "AUD 14,000 – 17,000/semester",
    scholarship: "Up to 20%",
    ielts: "6.5 Overall",
    programs: ["Business", "Engineering", "IT", "Health", "Criminology", "Arts", "Education"],
    locations: ["Brisbane", "Gold Coast"],
  },
  {
    name: "Edith Cowan University",
    fees: "AUD 13,000 – 16,000/semester",
    scholarship: "Up to 20%",
    ielts: "6.0 Overall",
    programs: ["Engineering", "IT", "Nursing", "Business", "Arts", "Science", "Education"],
    locations: ["Perth"],
  },
];

const StudyAustraliaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={australiaImg} alt="Australia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Study in Australia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg max-w-2xl mx-auto"
          >
            Australia offers a wide range of study choices for international students — from popular courses to rare specializations.
          </motion.p>
        </div>
      </section>

      {/* Why Australia */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-coral font-semibold text-sm uppercase tracking-wider">
              Why Choose
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-3">
              Why Study In Australia?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: "70% Ranked in Top 500", desc: "Australian universities ranked within top 500 globally" },
              { icon: Globe, title: "Most Liveable Country", desc: "High standards of living and multicultural environment" },
              { icon: Award, title: "Up to 50% Scholarship", desc: "Generous scholarship opportunities for international students" },
              { icon: BookOpen, title: "Top Ranking Universities", desc: "Apply for the highest-ranking institutions" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border text-center shadow-sm"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-coral/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-coral" />
                </div>
                <h3 className="font-heading font-semibold text-primary mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Period */}
      <section className="py-12 section-gradient">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-primary text-center mb-8">
            Intake Periods
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["February", "July", "November"].map((month) => (
              <div key={month} className="bg-card rounded-xl px-10 py-6 border shadow-sm text-center">
                <Calendar className="w-6 h-6 text-coral mx-auto mb-2" />
                <p className="font-heading font-semibold text-primary">{month}</p>
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
            <span className="text-coral font-semibold text-sm uppercase tracking-wider">
              Partner Universities
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-3">
              Our Partner Universities in Australia
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
                <div className="bg-navy p-4">
                  <h3 className="font-heading font-semibold text-primary-foreground text-sm">
                    {uni.name}
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-coral shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Fees:</strong> {uni.fees}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-coral shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Scholarship:</strong> {uni.scholarship}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-coral shrink-0" />
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
                        <span className="text-xs bg-coral/10 text-coral px-2 py-0.5 rounded-md">
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

      <CTASection />
      <Footer />
    </div>
  );
};

export default StudyAustraliaPage;

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import aboutTeam from "@/assets/about-team.jpg";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";

const AboutPage = () => {
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
            About ABEC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg max-w-2xl mx-auto"
          >
            Your trusted partner for international education since day one
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-lg uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Empowering Students to Achieve Global Education
              </h2>
              <p className="text-gray-900 text-lg leading-relaxed mb-4">
                Australia Bangladesh Education Consultants (ABEC) is a sister concern of Australia Bangladesh Development Associate Ltd (ABDA), which has emerged as the leading recruiter of  students of students for overseas education to Australia, Canada, United Kingdom and USA and provides professional immigration consultancy to the clients for Australia, Canada and USA.
              </p>

              <p className="text-gray-900 text-lg leading-relaxed mb-4">
                Being the pioneer in providing consultancy service in overseas services in overseas education and immigration service since 1999, we provides most up-to-date information toÂ  clients and always ensures the satisfaction of our clients. For our extra-ordinary service and increasing success rate, we already established us as a market leader in this field. ABEC has incomparable success rate (more that 30% apx.) of fulfilling the dream of Bangladeshi student to take higher study in Australia.
              </p>
              <p className="text-gray-900 text-lg leading-relaxed mb-4">
                Our team of experienced counselors provides personalized guidance at every step — from choosing the right course to settling into your new campus life. With offices in Uttara and Kawran Bazar, Dhaka, we are always within reach.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "5,000+", label: "Students Placed" },
                  { val: "95%", label: "Visa Success" },
                  { val: "100+", label: "University Partners" },
                  { val: "5+", label: "Countries" },
                ].map((s) => (
                  <div key={s.label} className="bg-secondary rounded-lg p-4 text-center">
                    <p className="font-heading text-2xl md:text-3xl font-bold text-black">{s.val}</p>
                    <p className="text-muted-foreground text-sm md:text-base mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
           
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={aboutTeam}
                alt="ABEC team"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
        <section className="py-20 section-gradient">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: "Our Mission", desc: "To provide honest, reliable, and comprehensive guidance to students aspiring to study abroad, ensuring they find the best-fit institutions for their academic and career goals." },
                { icon: Eye, title: "Our Vision", desc: "To be the most trusted study abroad consultancy in Bangladesh, known for transparency, student success, and building lasting relationships with global universities." },
                { icon: Heart, title: "Our Values", desc: "Integrity, student-first approach, transparency in processes, and commitment to excellence drive everything we do at ABEC." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-8 border text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-black" />
                  </div>

                  <h3 className="font-heading font-semibold text-lg text-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-black text-lg leading-relaxed">
                    {item.desc}
                  </p>
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

export default AboutPage;

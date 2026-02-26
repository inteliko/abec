import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Expert counselors with years of experience",
  "95% visa success rate with personalized guidance",
  "Scholarships worth up to 50% of tuition fees",
  "Free consultation and end-to-end support",
  "Partnerships with 100+ top universities worldwide",
  "Two convenient office locations in Dhaka",
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 hero-gradient text-primary-foreground overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-light font-semibold text-lg uppercase tracking-wider">
              Why Choose ABEC
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
              Your Success is Our Only Priority
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              Since our inception, ABEC has been inspiring students to excel
              in their higher education aspirations by helping them choose the
              right university abroad. We are the official representative in
              Bangladesh for well-reputed universities across multiple countries.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-light mt-0.5 shrink-0" />
                  <span className="text-primary-foreground/80">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="space-y-6">
              {[
                { step: "01", title: "Consult", desc: "Meet our expert counselors for a free consultation" },
                { step: "02", title: "Apply", desc: "Get admission at your desired university with our help" },
                { step: "03", title: "Prepare", desc: "Complete visa processing with 95% success rate" },
                { step: "04", title: "Fly", desc: "Begin your study abroad journey with confidence" },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-5 items-start group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center shrink-0 group-hover:bg-primary-foreground/30 transition-colors">
                    <span className="font-heading font-bold text-primary-foreground">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg">{item.title}</h4>
                    <p className="text-primary-foreground/60 text-lg">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

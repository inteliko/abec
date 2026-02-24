import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Iqra Risalat",
    text: "Their service is honestly extraordinary. They are well experienced and are great in guiding you along the path. The team is very friendly and made sure our journey went smoothly. Highly recommended!",
    university: "University of Technology Sydney",
    rating: 5,
  },
  {
    name: "Shafayet Islam",
    text: "ABECedu offered me a friendly environment where I could share my initial preferences for higher studies. The counselors understood my needs perfectly and guided me to the right program.",
    university: "Western Sydney University",
    rating: 5,
  },
  {
    name: "Sandip Saha",
    text: "I am very thankful to the entire ABECedu team for their immense support throughout the whole process to make my dream of studying in Australia a success.",
    university: "Central Queensland University",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
            Success Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Thousands of students have trusted us and achieved their dreams. You could be the next!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-7 border shadow-sm relative"
            >
              <Quote className="w-8 h-8 text-coral/20 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div>
                <p className="font-heading font-semibold text-primary">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.university}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

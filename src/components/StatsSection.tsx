import { motion } from "framer-motion";
import { GraduationCap, Building2, Award, Globe } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "5,000+", label: "Students Assisted" },
  { icon: Building2, value: "100+", label: "Partner Universities" },
  { icon: Award, value: "95%", label: "Visa Success Rate" },
  { icon: Globe, value: "5+", label: "Countries Covered" },
];

const StatsSection = () => {
  return (
    <section className="relative -mt-16 z-20">
      <div className="container">
        <div className="bg-card rounded-2xl shadow-xl border p-6 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

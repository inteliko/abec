import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import australiaImg from "@/assets/australia.jpg";
import ukImg from "@/assets/uk.jpg";
import canadaImg from "@/assets/canada.jpg";
import usaImg from "@/assets/usa.jpg";
import malaysiaImg from "@/assets/malaysia.jpg";

const destinations = [
  {
    name: "Australia",
    image: australiaImg,
    description: "70% universities ranked within top 500 globally",
    link: "/study-in-australia",
  },
  {
    name: "United Kingdom",
    image: ukImg,
    description: "World-class education with rich cultural heritage",
    link: "/study-in-australia",
  },
  {
    name: "Canada",
    image: canadaImg,
    description: "Affordable education with post-study work options",
    link: "/study-in-australia",
  },
  {
    name: "USA",
    image: usaImg,
    description: "Home to the world's top-ranked universities",
    link: "/study-in-australia",
  },
  {
    name: "Malaysia",
    image: malaysiaImg,
    description: "Quality education at affordable costs in Asia",
    link: "/study-in-australia",
  },
];

const DestinationsSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-coral font-semibold text-sm uppercase tracking-wider">
            Explore Destinations
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Choose Your Study Destination
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Pick a destination below and learn everything you need to make an informed decision about your future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl ${
                i < 2 ? "lg:col-span-1" : ""
              }`}
            >
              <Link to={dest.link} className="block">
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <img
                    src={dest.image}
                    alt={`Study in ${dest.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-xl font-bold text-primary-foreground mb-1">
                      Study in {dest.name}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm mb-3">
                      {dest.description}
                    </p>
                    <span className="inline-flex items-center text-coral text-sm font-medium group-hover:gap-2 transition-all">
                      Explore More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import australiaImg from "@/assets/stories/naima.jpeg";
import ukImg from "@/assets/stories/mehedi.jpeg";
import malaysiaImg from "@/assets/stories/ashraful.jpeg";
import canadaImg from "@/assets/stories/sazzdur.jpeg";
import usaImg from "@/assets/stories/emran.jpeg";

const stories = [
  { name: "Naima Tabassum", image: australiaImg },
  { name: "Sazzadur Rahman", image: ukImg },
  { name: "Mehedi Hasan", image: malaysiaImg },
  { name: "Md Emran Khan", image: canadaImg },
  { name: "Md Ashraful Alam", image: usaImg },
  { name: "Md Istiaq Ahmed", image: canadaImg },
];

const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="py-20">
        <div className="container text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3"
          >
            Success Stories Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
          >
            Photo highlights from our recent scholarship recipients and enrolled students.
          </motion.p>
        </div>

        <div className="container">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6">
            {stories.map((story, index) => (
              <motion.figure
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 break-inside-avoid"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <figcaption className="p-3 bg-white text-center text-sm text-foreground/80 font-medium">
                  {story.name}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;

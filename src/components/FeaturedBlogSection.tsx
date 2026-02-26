import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "canada-scholarships-2026",
    title: "Top Scholarships in Canada for 2026",
    excerpt: "Find out which Canadian universities offer the best funding, eligibility criteria and application hacks.",
    date: "Feb 2, 2026",
    image: "/src/assets/canada.jpg",
    category: "Scholarship",
  },
  {
    id: "living-in-uk-student",
    title: "Living in the UK as a Student: What to Expect",
    excerpt: "From accommodation costs to culture shock, get real insights on student life across Britain.",
    date: "Dec 15, 2025",
    image: "/src/assets/uk.jpg",
    category: "United Kingdom",
  },
  {
    id: "usa-work-permit-guide",
    title: "Post-Study Work Permit for USA",
    excerpt: "Understand OPT, STEM extensions and visa options to kickstart your US career post-study.",
    date: "Nov 20, 2025",
    image: "/src/assets/usa.jpg",
    category: "United States",
  },
  {
    id: "how-to-apply-australia",
    title: "How to Apply for Australian Universities",
    excerpt: "Learn the full process from selecting courses to lodging your application – with tips to improve acceptance chances.",
    date: "Jan 10, 2026",
    image: "/src/assets/australia.jpg",
    category: "Australia",
  },
];

const FeaturedBlogSection = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-lg uppercase tracking-wider">
            Study Abroad Insights
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tips, news, and guides to help you make informed decisions about studying abroad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {post.category && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">
                  {post.date}
                </p>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-primary font-semibold text-lg hover:underline flex items-center gap-1 group/link"
                >
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link to="/blog">
            <Button
              size="lg"
              className="bg-primary hover:bg-brand-light text-primary-foreground font-semibold px-8"
            >
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogSection;

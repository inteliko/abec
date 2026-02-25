import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard, { BlogPost } from "@/components/BlogCard";
import { Link } from "react-router-dom";

// sample data; in real app this would come from a CMS or API
const allPosts: BlogPost[] = [
  {
    id: "how-to-apply-australia",
    title: "How to Apply for Australian Universities",
    excerpt: "Learn the full process from selecting courses to lodging your application – with tips to improve acceptance chances.",
    date: "Jan 10, 2026",
    image: "/src/assets/australia.jpg",
    category: "Australia",
  },
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
    id: "malaysia-campus-tour",
    title: "Malaysia Campus Tours: What to Look For",
    excerpt: "Pro tips for evaluating Malaysian universities in person – facilities, safety and student support.",
    date: "Oct 5, 2025",
    image: "/src/assets/malaysia.jpg",
    category: "Malaysia",
  },
  {
    id: "scholarship-tips-international",
    title: "Scholarship Tips for International Students",
    excerpt: "Key strategies to craft compelling applications and beat the competition for global aid.",
    date: "Sep 1, 2025",
    image: "https://via.placeholder.com/600x400?text=Scholarship+Advice",
    category: "Scholarship",
  },
  // add more as needed
];

const categories = [
  "All",
  "Australia",
  "Canada",
  "United Kingdom",
  "United States",
  "Malaysia",
  "Scholarship",
  "Tips",
  "Student Life",
];

const POSTS_PER_PAGE = 6;

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.title = "Study Abroad Blog | ABEC";

    const description =
      document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        "Latest news, tips, and guides for students going abroad"
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Study Abroad Blog | ABEC");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc)
      ogDesc.setAttribute(
        "content",
        "Latest news, tips, and guides for students going abroad"
      );
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.href);
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", "https://via.placeholder.com/1200x630?text=Study+Abroad+Blog");
  }, []);

  const filteredPosts = allPosts.filter((p) =>
    selectedCategory === "All" ? true : p.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginated = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

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
            Study Abroad Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg max-w-2xl mx-auto"
          >
            Latest news, tips, and guides for students going abroad
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* main listing */}
          <div className="lg:col-span-3">
            {/* category filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 text-sm rounded-full transition-colors border ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-foreground/80 border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {paginated.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  className="px-4 py-2 bg-card rounded-lg hover:bg-card/90 disabled:opacity-50"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="px-4 py-2 bg-card rounded-lg hover:bg-card/90 disabled:opacity-50"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h4 className="font-heading font-semibold text-lg mb-4">
                Recent Posts
              </h4>
              <ul className="space-y-3">
                {allPosts.slice(0, 5).map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/blog/${p.id}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;

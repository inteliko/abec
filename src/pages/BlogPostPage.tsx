import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPost } from "@/components/BlogCard";

// replicate the same posts array (could be moved to shared file)
const allPosts: BlogPost[] = [
  {
    id: "how-to-apply-australia",
    title: "How to Apply for Australian Universities",
    excerpt: "Step-by-step guide to submitting your application to top Australian institutions.",
    date: "Jan 10, 2026",
    image: "/src/assets/australia.jpg",
    category: "Australia",
  },
  {
    id: "canada-scholarships-2026",
    title: "Top Scholarships in Canada for 2026",
    excerpt: "Explore the most generous scholarships available to international students.",
    date: "Feb 2, 2026",
    image: "/src/assets/canada.jpg",
    category: "Scholarship",
  },
  {
    id: "living-in-uk-student",
    title: "Living in the UK as a Student: What to Expect",
    excerpt: "A practical overview of housing, transport and daily life in the United Kingdom.",
    date: "Dec 15, 2025",
    image: "/src/assets/uk.jpg",
    category: "United Kingdom",
  },
  {
    id: "usa-work-permit-guide",
    title: "Post-Study Work Permit for USA",
    excerpt: "Everything you need to know about staying in the United States after graduation.",
    date: "Nov 20, 2025",
    image: "/src/assets/usa.jpg",
    category: "United States",
  },
  {
    id: "malaysia-campus-tour",
    title: "Malaysia Campus Tours: What to Look For",
    excerpt: "Guide to visiting universities in Malaysia before you enroll.",
    date: "Oct 5, 2025",
    image: "/src/assets/malaysia.jpg",
    category: "Malaysia",
  },
  {
    id: "scholarship-tips-international",
    title: "Scholarship Tips for International Students",
    excerpt: "How to write a winning scholarship essay and meet eligibility.",
    date: "Sep 1, 2025",
    image: "https://via.placeholder.com/600x400?text=Scholarship+Tips",
    category: "Scholarship",
  },
];

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = allPosts.find((p) => p.id === id);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | ABEC Blog`;
      const descriptionMeta = document.querySelector('meta[name="description"]');
      if (descriptionMeta) {
        descriptionMeta.setAttribute("content", post.excerpt);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", post.title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", post.excerpt);
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", window.location.href);
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.setAttribute("content", post.image);
    }
  }, [post]);

  if (!post) {
    return <div className="min-h-screen"> <Navbar /> <div className="container py-20 text-center"> <h2 className="text-2xl font-semibold">Article not found</h2> <Link to="/blog" className="text-primary underline">Back to blog</Link> </div> <Footer /></div>;
  }

  const renderContent = () => {
    switch (post.id) {
      case "how-to-apply-australia":
        return (
          <>
            <p className="text-base leading-relaxed mb-4">
              Applying to Australian universities involves choosing the right course and institution,
              checking entry requirements, and submitting transcripts, test scores, and personal
              statements. Many students overlook the importance of early preparation; start at least
              six months before deadlines and collect references early. Use the university portal to
              track your application and always double-check documents for accuracy.
            </p>
            <p className="text-base leading-relaxed mb-4">
              ABEC counselors can review your forms and help you craft a strong statement of
              purpose that highlights your academic journey and future goals. We also explain fee
              structures, offer insights into scholarships, and assist with conditional offers when
              grades are pending.
            </p>
          </>
        );
      case "canada-scholarships-2026":
        return (
          <>
            <p className="text-base leading-relaxed mb-4">
              Canadian institutions offer a variety of scholarships ranging from entrance awards to
              research grants. To maximise your chances, target programs with smaller applicant
              pools and maintain a GPA of 3.5 or higher. It is essential to meet both university and
              external funding deadlines; missing one can disqualify you from multiple opportunities.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Craft a compelling application by emphasising leadership, volunteer experience, and
              how the funding will impact your career. ABEC provides personalized scholarship
              counselling and essay editing to help Bangladeshi students stand out.
            </p>
          </>
        );
      case "living-in-uk-student":
        return (
          <>
            <p className="text-base leading-relaxed mb-4">
              Moving to the UK can be exciting yet challenging. Expect to budget around £400–£600 per
              month for shared accommodation, plus additional costs for utilities and transport. Public
              transit is efficient, but students often invest in a railcard or Oyster card for savings.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Cultural adaptation takes time; attending university societies and events is a great way
              to meet people. Remember the UK has four countries with distinct cultures—England,
              Scotland, Wales and Northern Ireland—so experiences may vary depending on your campus.
            </p>
          </>
        );
      case "usa-work-permit-guide":
        return (
          <>
            <p className="text-base leading-relaxed mb-4">
              The Optional Practical Training (OPT) program allows F-1 students to work up to 12
              months after graduation. STEM graduates can apply for a 24‑month extension. Begin the
              OPT application while you are still enrolled and coordinate with your school’s
              international office to obtain an I‑20 endorsement.
            </p>
            <p className="text-base leading-relaxed mb-4">
              After OPT, many students pursue H‑1B visas or employer-sponsored green cards. ABEC can
              connect you with US immigration consultants and provide guidance on timing and
              documentation.
            </p>
          </>
        );
      case "malaysia-campus-tour":
        return (
          <>
            <p className="text-base leading-relaxed mb-4">
              When touring Malaysian universities, look beyond facilities—check safety measures,
              student support services, and proximity to healthcare. Visit both commercial and on‑campus
              housing to compare costs and amenities. Talk to current students about meal plans and
              cultural adjustments.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Keep a checklist of questions and take photos of rooms so you can review them later.
              Our consultants can arrange guided tours and introduction sessions prior to your visit.
            </p>
          </>
        );
      case "scholarship-tips-international":
        return (
          <>
            <p className="text-base leading-relaxed mb-4">
              Winning a scholarship often depends on the story you tell. Begin with a clear thesis: why
              you need the funds and how you will use them to contribute academically or socially.
              Use concrete examples of past achievements and end with a forward-looking statement.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Proofread meticulously and, if possible, have a mentor review your essay. ABEC provides
              mock interviews and feedback sessions to refine your application package.
            </p>
          </>
        );
      default:
        return <p className="text-base leading-relaxed mb-4">{post.excerpt}</p>;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20">
        <div className="container">
          <h1 className="font-heading text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">{post.date}</p>
          <img src={post.image} alt={post.title} className="w-full h-auto mb-8" />
          {renderContent()}
          <Link to="/blog" className="text-primary underline">
            ← Back to blog
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPostPage;

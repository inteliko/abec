import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountryPageLayout from "@/components/CountryPageLayout";
import canadaImg from "@/assets/canada.jpg";
import { GraduationCap, Globe, Award, BookOpen } from "lucide-react";

const universities = [
  { name: "University of Manitoba", fees: "CAD 14,000 – 18,000/year", scholarship: "Up to 25%", ielts: "6.5 Overall", programs: ["Engineering", "Business", "Science", "Arts", "Agriculture", "Nursing"], locations: ["Winnipeg"] },
  { name: "Thompson Rivers University", fees: "CAD 10,000 – 14,000/year", scholarship: "Up to 30%", ielts: "6.5 Overall", programs: ["Business", "Computing", "Tourism", "Nursing", "Science", "Arts"], locations: ["Kamloops", "Williams Lake"] },
  { name: "Conestoga College", fees: "CAD 12,000 – 16,000/year", scholarship: "Up to 20%", ielts: "6.0 Overall", programs: ["Engineering Technology", "Business", "IT", "Health", "Hospitality"], locations: ["Kitchener", "Waterloo"] },
  { name: "Seneca College", fees: "CAD 13,000 – 17,000/year", scholarship: "Up to 20%", ielts: "6.0 Overall", programs: ["Business", "IT", "Engineering", "Animation", "Aviation"], locations: ["Toronto"] },
  { name: "Centennial College", fees: "CAD 12,000 – 15,000/year", scholarship: "Up to 15%", ielts: "6.0 Overall", programs: ["Business", "Engineering", "IT", "Health Sciences", "Media"], locations: ["Toronto"] },
  { name: "Cape Breton University", fees: "CAD 10,000 – 13,000/year", scholarship: "Up to 25%", ielts: "6.5 Overall", programs: ["Business", "Engineering", "IT", "Health", "Arts", "Science"], locations: ["Sydney, NS"] },
];

const partnerNames = [
  "University of Manitoba", "Thompson Rivers University", "Conestoga College", "Seneca College",
  "Centennial College", "Cape Breton University", "University of Regina", "Lakehead University",
  "Nipissing University", "Vancouver Island University", "Algoma University", "Cambrian College",
  "Fanshawe College", "George Brown College", "Humber College", "Niagara College",
  "Sheridan College", "Lambton College", "St. Clair College", "Canadore College",
];

const StudyCanadaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CountryPageLayout
        country="Canada"
        heroImage={canadaImg}
        heroSubtitle="Canada offers affordable, high-quality education with excellent post-study work opportunities and pathways to permanent residency."
        whyItems={[
          { icon: GraduationCap, title: "Affordable Tuition", desc: "Lower tuition fees compared to USA and UK" },
          { icon: Globe, title: "3-Year Work Permit", desc: "Post-graduation work permit up to 3 years" },
          { icon: Award, title: "PR Pathway", desc: "Strong immigration pathways for graduates" },
          { icon: BookOpen, title: "Co-op Programs", desc: "Gain work experience during your studies" },
        ]}
        intakes={["September", "January", "May"]}
        universities={universities}
        partnerNames={partnerNames}
      />
      <Footer />
    </div>
  );
};

export default StudyCanadaPage;

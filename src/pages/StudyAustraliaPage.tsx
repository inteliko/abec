import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountryPageLayout from "@/components/CountryPageLayout";
import australiaImg from "@/assets/australia.jpg";
import { GraduationCap, Globe, Award, BookOpen } from "lucide-react";

const universities = [
  { name: "Central Queensland University (CQU)", fees: "AUD 12,000 – 15,000/semester", scholarship: "20% – 30%", ielts: "6.0 Overall", programs: ["Information Technology", "Engineering", "Business", "Accounting", "Public Health", "Nursing", "Arts"], locations: ["Melbourne", "Sydney", "Queensland", "Perth"] },
  { name: "Western Sydney University (WSU)", fees: "AUD 15,000 – 17,000/semester", scholarship: "Up to 50% tuition", ielts: "6.5 (no band below 6.0)", programs: ["Architecture", "Law", "Business", "Medicine", "Nursing", "Cyber Security", "Engineering", "IT"], locations: ["Sydney"] },
  { name: "Curtin University", fees: "AUD 14,000 – 18,000/semester", scholarship: "Up to 25%", ielts: "6.5 Overall", programs: ["Engineering", "Business", "Health Sciences", "IT", "Science", "Arts"], locations: ["Perth"] },
  { name: "Deakin University", fees: "AUD 15,000 – 20,000/semester", scholarship: "Up to 25%", ielts: "6.0 Overall", programs: ["Business", "Engineering", "IT", "Health", "Arts", "Education", "Science"], locations: ["Melbourne", "Geelong"] },
  { name: "Griffith University", fees: "AUD 14,000 – 17,000/semester", scholarship: "Up to 20%", ielts: "6.5 Overall", programs: ["Business", "Engineering", "IT", "Health", "Criminology", "Arts", "Education"], locations: ["Brisbane", "Gold Coast"] },
  { name: "Edith Cowan University", fees: "AUD 13,000 – 16,000/semester", scholarship: "Up to 20%", ielts: "6.0 Overall", programs: ["Engineering", "IT", "Nursing", "Business", "Arts", "Science", "Education"], locations: ["Perth"] },
];

const partnerNames = [
  "Macquarie University", "Adelaide University", "Monash University", "UTS", "University of Tasmania",
  "University of Wollongong", "La Trobe University", "Charles Darwin University", "Victoria University", "University of Canberra",
  "Swinburne University", "Edith Cowan University", "Flinders University", "Federation University", "Western Sydney University",
  "RMIT University", "SAIBT", "Melbourne Institute of Technology", "James Cook University", "Griffith University",
  "CQUniversity", "Curtin University", "Deakin University", "Bond University", "University of Western Australia",
  "QUT", "University of New England", "University of Newcastle", "University of Southern Queensland",
];

const StudyAustraliaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CountryPageLayout
        country="Australia"
        heroImage={australiaImg}
        heroSubtitle="Australia offers a wide range of study choices for international students — from popular courses to rare specializations."
        whyItems={[
          { icon: GraduationCap, title: "70% Ranked in Top 500", desc: "Australian universities ranked within top 500 globally" },
          { icon: Globe, title: "Most Liveable Country", desc: "High standards of living and multicultural environment" },
          { icon: Award, title: "Up to 50% Scholarship", desc: "Generous scholarship opportunities for international students" },
          { icon: BookOpen, title: "Top Ranking Universities", desc: "Apply for the highest-ranking institutions" },
        ]}
        intakes={["February", "July", "November"]}
        universities={universities}
        partnerNames={partnerNames}
      />
      <Footer />
    </div>
  );
};

export default StudyAustraliaPage;

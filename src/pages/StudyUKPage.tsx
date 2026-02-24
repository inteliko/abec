import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountryPageLayout from "@/components/CountryPageLayout";
import ukImg from "@/assets/uk.jpg";
import { GraduationCap, Globe, Award, BookOpen } from "lucide-react";

const universities = [
  { name: "University of East London", fees: "£12,000 – £15,000/year", scholarship: "Up to 30%", ielts: "6.0 Overall", programs: ["Business", "Computing", "Engineering", "Health Sciences", "Arts", "Education"], locations: ["London"] },
  { name: "Middlesex University", fees: "£13,000 – £16,000/year", scholarship: "Up to 25%", ielts: "6.0 Overall", programs: ["Business", "Law", "IT", "Engineering", "Arts", "Health"], locations: ["London"] },
  { name: "University of Greenwich", fees: "£14,000 – £16,500/year", scholarship: "Up to 20%", ielts: "6.0 Overall", programs: ["Business", "Computing", "Engineering", "Architecture", "Education"], locations: ["London", "Kent"] },
  { name: "University of Hertfordshire", fees: "£12,500 – £15,000/year", scholarship: "Up to 25%", ielts: "6.0 Overall", programs: ["Business", "Engineering", "Computer Science", "Health", "Arts"], locations: ["Hatfield"] },
  { name: "Coventry University", fees: "£13,000 – £16,000/year", scholarship: "Up to 30%", ielts: "6.0 Overall", programs: ["Business", "Engineering", "Computing", "Health", "Design", "Media"], locations: ["Coventry", "London"] },
  { name: "University of Sunderland", fees: "£12,000 – £14,000/year", scholarship: "Up to 20%", ielts: "6.0 Overall", programs: ["Business", "Computing", "Engineering", "Nursing", "Tourism"], locations: ["Sunderland", "London"] },
];

const partnerNames = [
  "University of East London", "Middlesex University", "University of Greenwich", "University of Hertfordshire",
  "Coventry University", "University of Sunderland", "Anglia Ruskin University", "University of Bedfordshire",
  "University of Central Lancashire", "Birmingham City University", "University of West London", "De Montfort University",
  "University of Roehampton", "London South Bank University", "University of Northampton", "Canterbury Christ Church University",
  "University of South Wales", "Teesside University", "University of Bolton", "BPP University",
];

const StudyUKPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CountryPageLayout
        country="United Kingdom"
        heroImage={ukImg}
        heroSubtitle="The UK offers world-class education, rich cultural experiences, and globally recognized qualifications."
        whyItems={[
          { icon: GraduationCap, title: "World-Class Education", desc: "Home to some of the oldest and most prestigious universities" },
          { icon: Globe, title: "2-Year Post-Study Work", desc: "Graduate route visa allows 2 years of work after study" },
          { icon: Award, title: "Up to 30% Scholarship", desc: "Attractive scholarships for international students" },
          { icon: BookOpen, title: "1-Year Master's Degree", desc: "Complete your postgraduate degree in just one year" },
        ]}
        intakes={["September", "January", "May"]}
        universities={universities}
        partnerNames={partnerNames}
      />
      <Footer />
    </div>
  );
};

export default StudyUKPage;

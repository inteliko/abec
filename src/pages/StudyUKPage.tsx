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

const partnerUniversities = [
  { name: "Birmingham City University International College", logo: "/src/assets/uk/bcuit.jpeg", url: "https://www.bcu.ac.uk/international-college" },
  { name: "Hertfordshire International College", logo: "/src/assets/uk/hic.jpeg", url: "https://www.herts.ac.uk/international-college" },
  { name: "International College at Robert Gordon University", logo: "/src/assets/uk/rgu.jpeg", url: "https://www.rgu.ac.uk/international-college" },
  { name: "International College Portsmouth", logo: "/src/assets/uk/uop.jpeg", url: "https://www.port.ac.uk/international-college" },
  { name: "Brunel University London Pathway College", logo: "/src/assets/uk/bul.jpeg", url: "https://www.brunel.ac.uk/international-college" },
  { name: "The College, Swansea University", logo: "/src/assets/uk/supa.jpeg", url: "https://www.swansea.ac.uk/international-college" },
  { name: "University of Plymouth International College", logo: "/src/assets/uk/uoply.jpeg", url: "https://www.plymouth.ac.uk/international-college" },
  { name: "Keele University International College", logo: "/src/assets/uk/ku.jpeg", url: "https://www.keele.ac.uk/international-college" },

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
        partnerUniversities={partnerUniversities}
      />
      <Footer />
    </div>
  );
};

export default StudyUKPage;

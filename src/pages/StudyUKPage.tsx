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
  { name: "University of East London", url: "https://www.uel.ac.uk" },
  { name: "Middlesex University", url: "https://www.mdx.ac.uk" },
  { name: "University of Greenwich", url: "https://www.gre.ac.uk" },
  { name: "University of Hertfordshire", url: "https://www.herts.ac.uk" },
  { name: "Coventry University", url: "https://www.coventry.ac.uk" },
  { name: "University of Sunderland", url: "https://www.sunderland.ac.uk" },
  { name: "Anglia Ruskin University", url: "https://aru.ac.uk" },
  { name: "University of Bedfordshire", url: "https://www.beds.ac.uk" },
  { name: "University of Central Lancashire", url: "https://www.uclan.ac.uk" },
  { name: "Birmingham City University", url: "https://www.bcu.ac.uk" },
  { name: "University of West London", url: "https://www.uwl.ac.uk" },
  { name: "De Montfort University", url: "https://www.dmu.ac.uk" },
  { name: "University of Roehampton", url: "https://www.roehampton.ac.uk" },
  { name: "London South Bank University", url: "https://www.lsbu.ac.uk" },
  { name: "University of Northampton", url: "https://www.northampton.ac.uk" },
  { name: "Canterbury Christ Church University", url: "https://www.canterbury.ac.uk" },
  { name: "University of South Wales", url: "https://www.southwales.ac.uk" },
  { name: "Teesside University", url: "https://www.tees.ac.uk" },
  { name: "University of Bolton", url: "https://www.bolton.ac.uk" },
  { name: "BPP University", url: "https://www.bpp.com" },
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

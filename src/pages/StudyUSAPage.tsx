import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountryPageLayout from "@/components/CountryPageLayout";
import usaImg from "@/assets/usa.jpg";
import { GraduationCap, Globe, Award, BookOpen } from "lucide-react";

const universities = [
  { name: "University of Bridgeport", fees: "USD 18,000 – 22,000/year", scholarship: "Up to 50%", ielts: "6.0 Overall", programs: ["Business", "Engineering", "Computer Science", "Health Sciences", "Design"], locations: ["Connecticut"] },
  { name: "University of New Haven", fees: "USD 20,000 – 25,000/year", scholarship: "Up to 40%", ielts: "6.5 Overall", programs: ["Engineering", "Business", "Criminal Justice", "Forensic Science", "IT"], locations: ["Connecticut"] },
  { name: "Wright State University", fees: "USD 15,000 – 19,000/year", scholarship: "Up to 45%", ielts: "6.0 Overall", programs: ["Engineering", "Business", "Computer Science", "Nursing", "Education"], locations: ["Ohio"] },
  { name: "Southeast Missouri State University", fees: "USD 12,000 – 16,000/year", scholarship: "Up to 40%", ielts: "6.0 Overall", programs: ["Business", "Engineering", "Education", "Health", "Arts"], locations: ["Missouri"] },
  { name: "University of the Cumberlands", fees: "USD 10,000 – 14,000/year", scholarship: "Up to 50%", ielts: "6.0 Overall", programs: ["Business", "IT", "Education", "Health Sciences", "Psychology"], locations: ["Kentucky"] },
  { name: "Lewis University", fees: "USD 17,000 – 22,000/year", scholarship: "Up to 35%", ielts: "6.5 Overall", programs: ["Aviation", "Business", "Computer Science", "Engineering", "Nursing"], locations: ["Illinois"] },
];

const partnerUniversities = [
  { name: "University of Bridgeport", url: "https://www.bridgeport.edu" },
  { name: "University of New Haven", url: "https://www.newhaven.edu" },
  { name: "Wright State University", url: "https://www.wright.edu" },
  { name: "Southeast Missouri State University", url: "https://semo.edu" },
  { name: "University of the Cumberlands", url: "https://www.ucumberlands.edu" },
  { name: "Lewis University", url: "https://www.lewisu.edu" },
  { name: "Trine University", url: "https://www.trine.edu" },
  { name: "University of Dayton", url: "https://udayton.edu" },
  { name: "Northern Illinois University", url: "https://www.niu.edu" },
  { name: "Youngstown State University", url: "https://ysu.edu" },
  { name: "University of South Florida", url: "https://www.usf.edu" },
  { name: "Florida International University", url: "https://www.fiu.edu" },
  { name: "Kent State University", url: "https://www.kent.edu" },
  { name: "University of Findlay", url: "https://www.findlay.edu" },
  { name: "New England College", url: "https://www.nec.edu" },
  { name: "Wichita State University", url: "https://www.wichita.edu" },
];

const StudyUSAPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CountryPageLayout
        country="United States"
        heroImage={usaImg}
        heroSubtitle="The USA is home to the world's top-ranked universities, offering diverse programs, cutting-edge research, and global career opportunities."
        whyItems={[
          { icon: GraduationCap, title: "Top-Ranked Universities", desc: "Home to the highest number of globally ranked institutions" },
          { icon: Globe, title: "OPT & CPT Programs", desc: "Work opportunities during and after your studies" },
          { icon: Award, title: "Up to 50% Scholarship", desc: "Generous merit and need-based scholarships" },
          { icon: BookOpen, title: "Flexible Curriculum", desc: "Choose from diverse majors and customize your degree" },
        ]}
        intakes={["Fall (August)", "Spring (January)", "Summer (May)"]}
        universities={universities}
        partnerUniversities={partnerUniversities}
      />
      <Footer />
    </div>
  );
};

export default StudyUSAPage;

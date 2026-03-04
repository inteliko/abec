import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountryPageLayout from "@/components/CountryPageLayout";
import asiaImg from "@/assets/malaysia.jpg";
import { GraduationCap, Globe, Award, BookOpen } from "lucide-react";

const universities = [
  { name: "Murdoch University Dubai Campus", fees: "AED 60,000 – 90,000/year", scholarship: "Up to 30%", ielts: "6.0 Overall", programs: ["Business", "Engineering", "IT", "Nursing", "Psychology", "Arts"], locations: ["Dubai"] },
  { name: "Curtin University Singapore Campus", fees: "SGD 30,000 – 45,000/year", scholarship: "Up to 25%", ielts: "6.0 Overall", programs: ["Business", "Engineering", "IT", "Design", "Science"], locations: ["Singapore"] },
  { name: "MAHSA University", fees: "MYR 15,000 – 28,000/year", scholarship: "Up to 40%", ielts: "5.5 Overall", programs: ["Medicine", "Pharmacy", "Health Sciences", "Business", "Engineering"], locations: ["Kuala Lumpur", "Selangor"] },
];

const partnerUniversities = [
  { name: "Murdoch University Dubai Campus", url: "https://www.murdochuniversitydubai.com/", logo: "/src/assets/asia/murdoch.jpeg"  },
  { name: "Curtin University Singapore Campus", url: "https://curtin.edu.sg/", logo: "/src/assets/asia/curtin.jpeg"  },
  { name: "MAHSA University", url: "https://www.mahsa.edu.my", logo: "/src/assets/asia/masha.jpeg"  },
  
];

const StudyAsiaPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 md:pt-28">
      <CountryPageLayout
        country="Asia"
        heroImage={asiaImg}
        heroSubtitle="Explore world-class education across Asia's top destinations: Dubai, Singapore, and Malaysia."
        whyItems={[
          { icon: GraduationCap, title: "Diverse Opportunities", desc: "Multiple countries and institutions to choose from" },
          { icon: Globe, title: "Strategic Locations", desc: "Gateway to global career opportunities in Asia" },
          { icon: Award, title: "Up to 40% Scholarship", desc: "Competitive scholarships and financial aid" },
          { icon: BookOpen, title: "Affordable Education", desc: "Quality education at affordable costs" },
        ]}
        intakes={["January", "March", "July", "September"]}
        universities={universities}
        partnerUniversities={partnerUniversities}
      />
      <Footer />
      </div>
    </>
  );
};

export default StudyAsiaPage;

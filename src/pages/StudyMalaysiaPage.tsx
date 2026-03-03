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
  { name: "Murdoch University Dubai Campus", url: "https://www.murdochuniversitydubai.com/", logo: "https://via.placeholder.com/120x60?text=Murdoch+Dubai" },
  { name: "Curtin University Singapore Campus", url: "https://curtin.edu.sg/", logo: "https://via.placeholder.com/120x60?text=Curtin+SG" },
  { name: "MAHSA University", url: "https://www.mahsa.edu.my", logo: "https://via.placeholder.com/120x60?text=MAHSA" },
  { name: "Asia Pacific University (APU)", url: "https://www.apu.edu.my", logo: "https://via.placeholder.com/120x60?text=APU" },
  { name: "Taylor's University", url: "https://www.taylors.edu.my", logo: "https://via.placeholder.com/120x60?text=Taylors" },
  { name: "UCSI University", url: "https://www.ucsiuniversity.edu.my", logo: "https://via.placeholder.com/120x60?text=UCSI" },
  { name: "Sunway University", url: "https://www.sunway.edu.my", logo: "https://via.placeholder.com/120x60?text=Sunway" },
  { name: "Universiti Teknologi Malaysia", url: "https://www.utm.my", logo: "https://via.placeholder.com/120x60?text=UTM" },
  { name: "Management & Science University", url: "https://www.msu.edu.my", logo: "https://via.placeholder.com/120x60?text=MSU" },
  { name: "Multimedia University", url: "https://www.mmu.edu.my", logo: "https://via.placeholder.com/120x60?text=MMU" },
  { name: "INTI International University", url: "https://newinti.edu.my", logo: "https://via.placeholder.com/120x60?text=INTI" },
  { name: "SEGi University", url: "https://www.segi.edu.my", logo: "https://via.placeholder.com/120x60?text=SEGi" },
  { name: "HELP University", url: "https://www.help.edu.my", logo: "https://via.placeholder.com/120x60?text=HELP" },
  { name: "University of Nottingham Malaysia", url: "https://www.nottingham.edu.my", logo: "https://via.placeholder.com/120x60?text=Nottingham+MY" },
  { name: "Monash University Malaysia", url: "https://www.monash.edu.my", logo: "https://via.placeholder.com/120x60?text=Monash+MY" },
  { name: "Heriot-Watt University Malaysia", url: "https://www.hw.ac.uk/malaysia", logo: "https://via.placeholder.com/120x60?text=Heriot-Watt+MY" },
  { name: "Limkokwing University", url: "https://www.limkokwing.net", logo: "https://via.placeholder.com/120x60?text=Limkokwing" },
  { name: "Taylors College", url: "https://www.taylorscollege.edu.my", logo: "https://via.placeholder.com/120x60?text=Taylors+College" },
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

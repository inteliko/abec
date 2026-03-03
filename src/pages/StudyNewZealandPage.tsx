import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountryPageLayout from "@/components/CountryPageLayout";
import nzImg from "@/assets/usa.jpg"; // placeholder until real NZ image available
import { GraduationCap, Globe, Award, BookOpen } from "lucide-react";

const universities = [
  { name: "University of Auckland", fees: "NZD 30,000 – 45,000/year", scholarship: "Up to 25%", ielts: "6.5 Overall", programs: ["Engineering", "Business", "Science", "Medicine", "Law", "Arts"], locations: ["Auckland"] },
  { name: "University of Canterbury", fees: "NZD 25,000 – 40,000/year", scholarship: "Up to 20%", ielts: "6.0 Overall", programs: ["Engineering", "Science", "Business", "Arts", "Law"], locations: ["Christchurch"] },
  { name: "University of Otago", fees: "NZD 23,000 – 38,000/year", scholarship: "Up to 20%", ielts: "6.0 Overall", programs: ["Medicine", "Dentistry", "Business", "Engineering", "Science"], locations: ["Dunedin"] },
  { name: "Massey University", fees: "NZD 22,000 – 36,000/year", scholarship: "Up to 25%", ielts: "6.0 Overall", programs: ["Business", "Engineering", "Science", "Agriculture", "Veterinary"], locations: ["Palmerston North", "Albany", "Wellington"] },
  { name: "AUT University", fees: "NZD 25,000 – 42,000/year", scholarship: "Up to 20%", ielts: "6.0 Overall", programs: ["Business", "Engineering", "Design", "IT", "Sports Science"], locations: ["Auckland"] },
  { name: "Victoria University of Wellington", fees: "NZD 24,000 – 39,000/year", scholarship: "Up to 20%", ielts: "6.0 Overall", programs: ["Business", "Law", "Science", "Engineering", "Arts"], locations: ["Wellington"] },
];

const partnerUniversities = [
  { name: "NZMA - ACG Group/UP Education", url: "https://www.nzma.edu.au", logo: "https://via.placeholder.com/120x60?text=NZMA" },
  { name: "Yoobee - ACG Group/UP Education", url: "https://yoobee.ac.nz", logo: "https://via.placeholder.com/120x60?text=Yoobee" },
  { name: "Southseas Film & Television", url: "https://www.southseas.ac.nz", logo: "https://via.placeholder.com/120x60?text=Southseas" },
  { name: "NZIS - New Zealand Institute of Sport", url: "https://www.nzis.ac.nz", logo: "https://via.placeholder.com/120x60?text=NZIS" },
  { name: "IPU New Zealand Tertiary Institute", url: "https://www.ipu.ac.nz", logo: "https://via.placeholder.com/120x60?text=IPU" },
  { name: "New Zealand School of Tourism", url: "https://www.nzst.ac.nz", logo: "https://via.placeholder.com/120x60?text=NZST" },
  { name: "Aspire2International", url: "https://www.aspire2.ac.nz", logo: "https://via.placeholder.com/120x60?text=Aspire2" },
  { name: "Universal College of Learning (UCOL)", url: "https://www.ucol.ac.nz", logo: "https://via.placeholder.com/120x60?text=UCOL" },
  { name: "AIS St Helen", url: "https://www.aisthelens.ac.nz", logo: "https://via.placeholder.com/120x60?text=AIS" },
  { name: "NSIA - ACG Group/UP Education", url: "https://www.nsia.ac.nz", logo: "https://via.placeholder.com/120x60?text=NSIA" },
  { name: "Cornell Institute of Business Technology", url: "https://www.cornell.ac.nz", logo: "https://via.placeholder.com/120x60?text=Cornell" },
  { name: "Regent International Edu Group", url: "https://www.regent.ac.nz", logo: "https://via.placeholder.com/120x60?text=Regent" },
  { name: "NTec", url: "https://www.ntec.ac.nz", logo: "https://via.placeholder.com/120x60?text=NTec" },
  { name: "ATMC New Zealand", url: "https://www.atmc.ac.nz", logo: "https://via.placeholder.com/120x60?text=ATMC" },
  { name: "Animation College - ACG", url: "https://www.animationcollege.ac.nz", logo: "https://via.placeholder.com/120x60?text=Animation" },
  { name: "UUNZ Institute of Business", url: "https://www.uunz.ac.nz", logo: "https://via.placeholder.com/120x60?text=UUNZ" },
  { name: "Whitecliffe College of Arts & Design", url: "https://www.whitecliffe.ac.nz", logo: "https://via.placeholder.com/120x60?text=Whitecliffe" },
  { name: "Queenstown Resort College - QRC", url: "https://www.qrc.ac.nz", logo: "https://via.placeholder.com/120x60?text=QRC" },
  { name: "NZSE (New Zealand School of Education)", url: "https://www.nzse.ac.nz", logo: "https://via.placeholder.com/120x60?text=NZSE" },
  { name: "Air New Zealand Aviation Institute", url: "https://www.airneeding.com", logo: "https://via.placeholder.com/120x60?text=Air+NZ" },
  { name: "KAURI ACADEMY", url: "https://www.kauri.ac.nz", logo: "https://via.placeholder.com/120x60?text=KAURI" },
  { name: "New Zealand Career College - ACG Group/UP Education", url: "https://www.nzcc.ac.nz", logo: "https://via.placeholder.com/120x60?text=NZCC" },
];

const StudyNewZealandPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CountryPageLayout
        country="New Zealand"
        heroImage={nzImg}
        heroSubtitle="New Zealand combines stunning landscapes with internationally respected universities and institutes."
        whyItems={[
          { icon: GraduationCap, title: "World-Class Institutions", desc: "Top universities and technical institutes across the country" },
          { icon: Globe, title: "Safe & Scenic", desc: "Known for safety and breathtaking natural beauty" },
          { icon: Award, title: "Post-Study Work Rights", desc: "Generous visa options allowing graduates to work" },
          { icon: BookOpen, title: "Affordable Living", desc: "Lower living costs compared to other English-speaking countries" },
        ]}
        intakes={["February", "July", "November"]}
        universities={universities}
        partnerUniversities={partnerUniversities}
      />
      <Footer />
    </div>
  );
};

export default StudyNewZealandPage;

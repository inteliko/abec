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
  { name: "NZMA - ACG Group/UP Education", url: "https://www.nzma.edu.nz", logo: "/src/assets/Newzeland/aut.jpeg"  },
  { name: "University of Canterbury", url: "https://www.canterbury.ac.nz", logo: "/src/assets/Newzeland/uocn.jpeg" },
  { name: "University of Otago", url: "https://www.waikato.ac.nz/int/", logo: "/src/assets/Newzeland/uooago.jpeg"},
  { name: "Lincoln University", url: "https://www.lincoln.ac.nz", logo: "/src/assets/Newzeland/lu.jpeg"},
  { name: "Massey University ", url: "https://www.massey.ac.nz", logo: "/src/assets/Newzeland/mu.jpeg" },
  { name: "Victoria University of Wellington", url: "https://www.wgtn.ac.nz", logo: "/src/assets/Newzeland/vuow.jpeg" },
  { name: "University of Auckland ", url: "https://www.auckland.ac.nz/en.html", logo: "/src/assets/Newzeland/uoan.jpeg"},
  { name: "NMIT", url: "https://www.nmit.ac.nz", logo: "/src/assets/Newzeland/nmit.jpeg" },
  { name: "Weltec", url: "https://www.whitireiaweltec.ac.nz", logo: "/src/assets/Newzeland/wtech.jpeg"},
  { name: "EIT", url: "https://www.eit.ac.nz", logo: "/src/assets/Newzeland/eit.jpeg" },
  { name: "WINTEC ", url: "https://www.wintec.ac.nz", logo: "/src/assets/Newzeland/wintec.jpeg"},
  { name: "WITT ", url: "https://www.witt.ac.nz", logo: "/src/assets/Newzeland/witt.jpeg"},
  { name: "Manukau Institute of Technology (MIT) ", url: "https://www.manukau.ac.nz", logo: "/src/assets/Newzeland/manukau.jpeg"},
  { name: "Northtec", url: "https://www.northtec.ac.nz", logo: "/src/assets/Newzeland/nortec.jpeg"},

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

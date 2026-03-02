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

const partnerUniversities = [

  { name: "Mourdoch University", logo: "/src/assets/australia/murdoch.jpeg", url: "https://www.murdoch.edu.au/" },
  { name: "CQUniversity", logo: "/src/assets/australia/cq.jpeg",  url: "https://www.cqu.edu.au/" },
  { name: "Edith Cowan University", logo: "/src/assets/australia/ecu.jpeg", url: "https://www.ecu.edu.au/" },
  { name: "Deakin University", logo: "/src/assets/australia/deakin.jpeg",  url: "https://www.deakin.edu.au/" },
  {
    name: "Macquarie University",
    logo: "/src/assets/australia/macuni.jpeg",
    url: "https://www.mq.edu.au/",
  },
  {
    name: "Adelaide University",
    logo: "/src/assets/australia/adelaide.jpeg", 
    url: "https://www.adelaide.edu.au/",
  },
  {
    name: "Monash University",
    logo: "/src/assets/australia/monash.jpeg",
    url: "https://www.monash.edu/",
  },
  // remaining institutions without logos will still display their name



  { name: "UTS", logo: "/src/assets/australia/uts.jpeg", url: "https://www.uts.edu.au/" },
  { name: "University of Tasmania", logo: "/src/assets/australia/uoft.jpeg", url: "https://www.utas.edu.au/" },
  { name: "University of Wollongong", logo: "/src/assets/australia/uow.jpeg", url: "https://www.uow.edu.au/" },
  { name: "La Trobe University", logo: "/src/assets/australia/ltu.jpeg", url: "https://www.latrobe.edu.au/" },
  { name: "Charles Darwin University", logo: "/src/assets/australia/cwua.jpeg", url: "https://www.cdu.edu.au/" },
  { name: "Victoria University", logo: "/src/assets/australia/vu.jpeg", url: "https://www.vu.edu.au/" },
  { name: "James Cook University", logo: "/src/assets/australia/jcu.jpeg", url: "https://www.jcu.edu.au/" },

  { name: "University of Sunshine Coast", logo: "/src/assets/australia/usca.jpeg", url: "https://www.usc.edu.au/" },
  { name: "Charles Stuart University", logo: "/src/assets/australia/csu.jpeg", url: "https://federation.edu.au/" },
  { name: "Western Sydney University", logo: "/src/assets/australia/wyu.jpeg", url: "https://www.westernsydney.edu.au/" },
  { name: "The University of Notre Dame Australia", logo: "/src/assets/australia/unda.jpeg",  url: "https://www.nd.edu.au/" },
  { name: "James Cook University", logo: "/src/assets/australia/jcua.jpeg",  url: "https://www.jcu.edu.au/" },
  { name: "Charles Darwin University (CDU)", logo: "/src/assets/australia/cdua.jpeg",  url: "https://www.cdu.edu.au/" },

  { name: "Curtin University", logo: "/src/assets/australia/cu.jpeg",  url: "https://www.curtin.edu.au/" },

  { name: "University of Western Australia", logo: "/src/assets/australia/uowa.jpeg",  url: "https://www.uwa.edu.au/" },
  { name: "University of Queensland", logo: "/src/assets/australia/uoqa.jpeg",  url: "https://www.uq.edu.au/" },
  { name: "Swinburne University of Technology", logo: "/src/assets/australia/swu.jpeg",  url: "https://www.swinburne.edu.au/" },
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
        partnerUniversities={partnerUniversities}
      />
      <Footer />
    </div>
  );
};

export default StudyAustraliaPage;

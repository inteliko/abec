import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountryPageLayout from "@/components/CountryPageLayout";
import canadaImg from "@/assets/canada.jpg";
import { GraduationCap, Globe, Award, BookOpen } from "lucide-react";

const universities = [
  { name: "University of Manitoba", fees: "CAD 14,000 – 18,000/year", scholarship: "Up to 25%", ielts: "6.5 Overall", programs: ["Engineering", "Business", "Science", "Arts", "Agriculture", "Nursing"], locations: ["Winnipeg"] },
  { name: "Thompson Rivers University", fees: "CAD 10,000 – 14,000/year", scholarship: "Up to 30%", ielts: "6.5 Overall", programs: ["Business", "Computing", "Tourism", "Nursing", "Science", "Arts"], locations: ["Kamloops", "Williams Lake"] },
  { name: "Conestoga College", fees: "CAD 12,000 – 16,000/year", scholarship: "Up to 20%", ielts: "6.0 Overall", programs: ["Engineering Technology", "Business", "IT", "Health", "Hospitality"], locations: ["Kitchener", "Waterloo"] },
  { name: "Seneca College", fees: "CAD 13,000 – 17,000/year", scholarship: "Up to 20%", ielts: "6.0 Overall", programs: ["Business", "IT", "Engineering", "Animation", "Aviation"], locations: ["Toronto"] },
  { name: "Centennial College", fees: "CAD 12,000 – 15,000/year", scholarship: "Up to 15%", ielts: "6.0 Overall", programs: ["Business", "Engineering", "IT", "Health Sciences", "Media"], locations: ["Toronto"] },
  { name: "Cape Breton University", fees: "CAD 10,000 – 13,000/year", scholarship: "Up to 25%", ielts: "6.5 Overall", programs: ["Business", "Engineering", "IT", "Health", "Arts", "Science"], locations: ["Sydney, NS"] },
];

// partners list combining pathway and direct universities
const partnerUniversities = [
  { name: "Fraser International College",  url: "https://www.fraseric.ca/", logo: "/src/assets/canada/sfu.jpeg" },
  { name: "International College of Manitoba", url: "https://www.icmanitoba.ca/", logo: "/src/assets/canada/ufm.jpeg" },
  { name: "Ryerson University International College", url: "https://www.ryersonuic.ca/", logo: "/src/assets/canada/ruic.jpeg", },
  { name: "Wilfrid Laurier International College", url: "https://www.torontomuic.ca/", logo: "/src/assets/canada/wlic.jpeg", },
  { name: "Western International College", url: "https://www.westernic.ca/", logo: "/src/assets/canada/wca.jpeg",  },
  { name: "Toronto Metropolitan University International College", url: "https://www.torontomuic.ca/", logo: "/src/assets/canada/tmu.jpeg",  },
  { name: "ULethbridge International College", url: "https://www.uicc.ca/", logo: "/src/assets/canada/ultb.jpeg", },
  { name: "University of Windsor", url: "https://www.uwindsor.ca", logo: "/src/assets/canada/uows.jpeg", },
  { name: "Concordia University of Edmonton", url: "https://www.concordia.ab.ca", logo: "/src/assets/canada/cuoe.jpeg",  },
  { name: "Thompson Rivers University", url: "https://www.tru.ca", logo: "/src/assets/canada/tru.jpeg", },
  { name: "Simon Fraser University", url: "https://www.sfu.ca", logo: "/src/assets/canada/sfu.jpeg",  },
  { name: "Western University", url: "https://www.uwo.ca", logo: "/src/assets/canada/wca.jpeg",  },
  { name: "St Thomas University", url: "https://www.stu.ca", logo: "/src/assets/canada/sttu.jpeg",  },
  { name: "Cape Breton University", url: "https://www.cbu.ca", logo: "/src/assets/canada/cbu.jpeg", },
  { name: "Algoma University", url: "https://www.algomau.ca", logo: "/src/assets/canada/au.jpeg",  },
  { name: "University of Ottawa", url: "https://www.uottawa.ca", logo: "/src/assets/canada/owttwa.jpeg", },
  { name: "University of Regina", url: "https://www.uregina.ca", logo: "/src/assets/canada/uor.jpeg",  },
  { name: "University of Canada West", url: "https://www.ucanwest.ca", logo: "/src/assets/canada/western.jpeg", },
  { name: "Trent University", url: "https://www.trentu.ca", logo: "/src/assets/canada/tu.jpeg", },
  { name: "Trinity Western University", url: "https://www.twu.ca", logo: "/src/assets/canada/twu.jpeg", },
  { name: "University of Fraser Valley", url: "https://www.ufv.ca", logo: "/src/assets/canada/uof.jpeg",  },
  { name: "Acadia University", url: "https://www.acadiau.ca", logo: "/src/assets/canada/auuu.jpeg",  },
];

const StudyCanadaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CountryPageLayout
        country="Canada"
        heroImage={canadaImg}
        heroSubtitle="Canada offers affordable, high-quality education with excellent post-study work opportunities and pathways to permanent residency."
        whyItems={[
          { icon: GraduationCap, title: "Affordable Tuition", desc: "Lower tuition fees compared to USA and UK" },
          { icon: Globe, title: "3-Year Work Permit", desc: "Post-graduation work permit up to 3 years" },
          { icon: Award, title: "PR Pathway", desc: "Strong immigration pathways for graduates" },
          { icon: BookOpen, title: "Co-op Programs", desc: "Gain work experience during your studies" },
        ]}
        intakes={["September", "January", "May"]}
        universities={universities}
        partnerUniversities={partnerUniversities}
      />
      <Footer />
    </div>
  );
};

export default StudyCanadaPage;

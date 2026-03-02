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
  {
    name: "Macquarie University",
    logo: "https://via.placeholder.com/150?text=Macquarie",
    url: "https://www.mq.edu.au/",
  },
  {
    name: "Adelaide University",
    logo: "https://via.placeholder.com/150?text=Adelaide",
    url: "https://www.adelaide.edu.au/",
  },
  {
    name: "Monash University",
    logo: "https://via.placeholder.com/150?text=Monash",
    url: "https://www.monash.edu/",
  },
  // remaining institutions without logos will still display their name
  { name: "UTS", url: "https://www.uts.edu.au/" },
  { name: "University of Tasmania", url: "https://www.utas.edu.au/" },
  { name: "University of Wollongong", url: "https://www.uow.edu.au/" },
  { name: "La Trobe University", url: "https://www.latrobe.edu.au/" },
  { name: "Charles Darwin University", url: "https://www.cdu.edu.au/" },
  { name: "Victoria University", url: "https://www.vu.edu.au/" },
  { name: "University of Canberra", url: "https://www.canberra.edu.au/" },
  { name: "Swinburne University", url: "https://www.swinburne.edu.au/" },
  { name: "Edith Cowan University", url: "https://www.ecu.edu.au/" },
  { name: "Flinders University", url: "https://www.flinders.edu.au/" },
  { name: "Federation University", url: "https://federation.edu.au/" },
  { name: "Western Sydney University", url: "https://www.westernsydney.edu.au/" },
  { name: "RMIT University", url: "https://www.rmit.edu.au/" },
  { name: "SAIBT", url: "https://www.saibt.sa.edu.au/" },
  { name: "Melbourne Institute of Technology", url: "https://www.mit.edu.au/" },
  { name: "James Cook University", url: "https://www.jcu.edu.au/" },
  { name: "Griffith University", url: "https://www.griffith.edu.au/" },
  { name: "CQUniversity", url: "https://www.cqu.edu.au/" },
  { name: "Curtin University", url: "https://www.curtin.edu.au/" },
  { name: "Deakin University", url: "https://www.deakin.edu.au/" },
  { name: "Bond University", url: "https://bond.edu.au/" },
  { name: "University of Western Australia", url: "https://www.uwa.edu.au/" },
  { name: "QUT", url: "https://www.qut.edu.au/" },
  { name: "University of New England", url: "https://www.une.edu.au/" },
  { name: "University of Newcastle", url: "https://www.newcastle.edu.au/" },
  { name: "University of Southern Queensland", url: "https://www.usq.edu.au/" },
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

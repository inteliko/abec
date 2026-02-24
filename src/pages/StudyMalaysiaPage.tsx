import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountryPageLayout from "@/components/CountryPageLayout";
import malaysiaImg from "@/assets/malaysia.jpg";
import { GraduationCap, Globe, Award, BookOpen } from "lucide-react";

const universities = [
  { name: "Asia Pacific University (APU)", fees: "MYR 15,000 – 25,000/year", scholarship: "Up to 50%", ielts: "5.5 Overall", programs: ["IT", "Engineering", "Business", "Accounting", "Design", "Media"], locations: ["Kuala Lumpur"] },
  { name: "Taylor's University", fees: "MYR 25,000 – 40,000/year", scholarship: "Up to 30%", ielts: "6.0 Overall", programs: ["Business", "Hospitality", "Engineering", "IT", "Medicine", "Design"], locations: ["Subang Jaya"] },
  { name: "UCSI University", fees: "MYR 18,000 – 30,000/year", scholarship: "Up to 25%", ielts: "5.5 Overall", programs: ["Engineering", "Business", "Music", "Medicine", "IT", "Architecture"], locations: ["Kuala Lumpur", "Kuching"] },
  { name: "Sunway University", fees: "MYR 20,000 – 35,000/year", scholarship: "Up to 30%", ielts: "6.0 Overall", programs: ["Business", "IT", "Arts", "Science", "Engineering", "Hospitality"], locations: ["Petaling Jaya"] },
  { name: "Universiti Teknologi Malaysia (UTM)", fees: "MYR 10,000 – 20,000/year", scholarship: "Up to 20%", ielts: "6.0 Overall", programs: ["Engineering", "IT", "Science", "Business", "Architecture"], locations: ["Johor Bahru", "Kuala Lumpur"] },
  { name: "Management & Science University (MSU)", fees: "MYR 12,000 – 20,000/year", scholarship: "Up to 25%", ielts: "5.5 Overall", programs: ["Business", "Engineering", "IT", "Health Sciences", "Education"], locations: ["Shah Alam"] },
];

const partnerNames = [
  "Asia Pacific University (APU)", "Taylor's University", "UCSI University", "Sunway University",
  "Universiti Teknologi Malaysia", "Management & Science University", "Multimedia University",
  "INTI International University", "SEGi University", "HELP University",
  "University of Nottingham Malaysia", "Monash University Malaysia", "Heriot-Watt University Malaysia",
  "Limkokwing University", "Taylors College", "MAHSA University",
];

const StudyMalaysiaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CountryPageLayout
        country="Malaysia"
        heroImage={malaysiaImg}
        heroSubtitle="Malaysia offers quality education at affordable costs, making it a top choice for international students in Asia."
        whyItems={[
          { icon: GraduationCap, title: "Affordable Education", desc: "High-quality degrees at a fraction of Western costs" },
          { icon: Globe, title: "Cultural Diversity", desc: "A multicultural environment welcoming international students" },
          { icon: Award, title: "Up to 50% Scholarship", desc: "Generous scholarship opportunities for Bangladeshi students" },
          { icon: BookOpen, title: "Twinning Programs", desc: "Earn degrees from UK/Australian universities in Malaysia" },
        ]}
        intakes={["March", "July", "October"]}
        universities={universities}
        partnerNames={partnerNames}
      />
      <Footer />
    </div>
  );
};

export default StudyMalaysiaPage;

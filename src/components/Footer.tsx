import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="ABEC Logo" className="h-14 w-auto mb-4" />
            <p className="text-black/70 text-lg leading-relaxed mb-6">
              Your trusted partner for studying abroad. We help students navigate
              their journey to top universities across Australia, UK, Canada, USA, Malaysia and many
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-lg">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Study Destinations</h4>
            <ul className="space-y-2.5 text-lg">
              {[
                { label: "Australia", path: "/study-in-australia" },
                { label: "United Kingdom", path: "/study-in-uk" },
                { label: "Canada", path: "/study-in-canada" },
                { label: "United States", path: "/study-in-usa" },
                { label: "Malaysia", path: "/study-in-malaysia" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-black shrink-0" />
                <span className="text-black/70">
                   Head Office:
                  57 Kazi Nazrul Islam Ave, Dhaka 1215
                </span>
              </li>

               <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-black shrink-0" />
                <span className="text-black/70">
                   Uttara Office:
                    House-02, Road-2/A, Sonargaon Janapath Rd, Dhaka
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-black shrink-0" />
                <span className="text-black/70">+8801730028095 </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-black shrink-0" />
                <span className="text-black/70">info@abecedu.net</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="container py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-lg text-black/50">
          <p>© 2025 ABEC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

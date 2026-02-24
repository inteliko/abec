import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              ABEC<span className="text-coral">edu</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Your trusted partner for studying abroad. We help students navigate
              their journey to top universities across Australia, UK, Canada, USA, and Malaysia.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-coral transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Study in Australia", path: "/study-in-australia" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-coral transition-colors"
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
            <ul className="space-y-2.5 text-sm">
              {["Australia", "United Kingdom", "Canada", "United States", "Malaysia"].map(
                (country) => (
                  <li key={country}>
                    <span className="text-primary-foreground/70">{country}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-coral shrink-0" />
                <span className="text-primary-foreground/70">
                  Banani, Dhaka & Kawran Bazar, Dhaka
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-coral shrink-0" />
                <span className="text-primary-foreground/70">+880 1XXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-coral shrink-0" />
                <span className="text-primary-foreground/70">info@abecedu.net</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-primary-foreground/50">
          <p>© 2025 ABECedu. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-coral transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-coral transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

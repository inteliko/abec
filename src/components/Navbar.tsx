import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const destinations = [
  { label: "Study in Australia", path: "/study-in-australia" },
  { label: "Study in UK", path: "/study-in-uk" },
  { label: "Study in Canada", path: "/study-in-canada" },
  { label: "Study in New Zealand", path: "/study-in-new-zealand" },
  { label: "Study in Asia", path: "/study-in-asia" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Success Stories", path: "/success-stories" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand text-primary-foreground text-lg py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +8801730028095 
            </span>

             <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +8801730028096 
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              info@abecedu.net
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Kawran Bazar/Uttara, Dhaka</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-sm">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="ABEC Logo" className="h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Destinations dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setDestOpen(true)}
                onMouseLeave={() => setDestOpen(false)}
                className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors flex items-center gap-1 ${
                  location.pathname.startsWith("/study-in")
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                Destinations <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {destOpen && (
                <div
                  onMouseEnter={() => setDestOpen(true)}
                  onMouseLeave={() => setDestOpen(false)}
                  className="absolute top-full left-0 mt-0 bg-card border rounded-xl shadow-lg py-2 min-w-[200px] z-50"
                >
                  {destinations.map((d) => (
                    <Link
                      key={d.path}
                      to={d.path}
                      className={`block px-4 py-2.5 text-lg font-medium transition-colors ${
                        location.pathname === d.path
                          ? "text-primary bg-primary/5"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-brand-light text-primary-foreground font-semibold px-6">
                Book Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-3 text-lg font-medium ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile destinations accordion */}
            <div className="px-6 py-2">
              <button
                onClick={() => setMobileDestOpen((v) => !v)}
                aria-expanded={mobileDestOpen}
                className="w-full flex items-center justify-between px-2 py-2 text-left text-lg font-medium text-foreground/80"
              >
                <span className="font-semibold text-muted-foreground uppercase tracking-wider">Destinations</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDestOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileDestOpen && (
                <div className="mt-2 pl-2">
                  {destinations.map((d) => (
                    <Link
                      key={d.path}
                      to={d.path}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileDestOpen(false);
                      }}
                      className={`block px-2 py-2.5 text-lg font-medium ${
                        location.pathname === d.path
                          ? "text-primary"
                          : "text-foreground/80"
                      }`}
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-6 pt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary hover:bg-brand-light text-primary-foreground font-semibold">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

import { Phone, Mail, Clock, MapPin } from "lucide-react";
import mascot from "@/assets/flores-mascot.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={mascot} 
                alt="Flores mascot" 
                className="w-12 h-12 object-contain brightness-110"
              />
              <div>
                <h3 className="font-extrabold text-xl">Flores Cleaning</h3>
                <p className="text-sm opacity-80">Company</p>
              </div>
            </div>
            <p className="text-sm opacity-70 text-center md:text-left max-w-xs">
              Professional home cleaning services with a personal touch. Serving Maricopa County, AZ.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-bold text-lg mb-2">Contact Us</h4>
            <a 
              href="tel:+16024874094" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              <span>(602) 487-4094</span>
            </a>
            <a 
              href="mailto:flores.cleaning.company.az@gmail.com" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity text-sm"
            >
              <Mail className="w-5 h-5" />
              <span>flores.cleaning.company.az@gmail.com</span>
            </a>
          </div>

          {/* Hours & Location */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-bold text-lg mb-2">Hours & Location</h4>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span>8:00 AM – 5:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Maricopa County, AZ</span>
            </div>
            <div className="mt-2 px-4 py-2 bg-primary/20 rounded-full text-sm font-semibold">
              ⚡ Reply within 15 minutes
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Flores Cleaning Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

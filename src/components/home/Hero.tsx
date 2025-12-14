import { Phone, MessageSquare, Calendar, Sparkles } from "lucide-react";
import mascot from "@/assets/flores-mascot.png";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("request-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-flores-yellow-light/50 to-background" />
        <div className="absolute top-20 -right-20 w-72 h-72 bg-flores-green-light/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/50 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-secondary-foreground">
                Serving Maricopa County, AZ
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Your Home,{" "}
              <span className="text-gradient">Sparkling Clean</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Professional home cleaning with a personal touch. 
              <strong className="text-foreground"> Supplies included</strong> — 
              just relax and enjoy your fresh, beautiful home!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="sms:+16024874094" className="btn-secondary">
                <MessageSquare className="w-5 h-5" />
                Text Us
              </a>
              <a href="tel:+16024874094" className="btn-cta">
                <Phone className="w-5 h-5" />
                Call (602) 487-4094
              </a>
              <button onClick={scrollToForm} className="btn-secondary hidden sm:inline-flex">
                <Calendar className="w-5 h-5" />
                Request Availability
              </button>
            </div>
          </div>

          {/* Mascot */}
          <div className="flex-shrink-0 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-flores-yellow/30 rounded-full blur-3xl scale-75" />
              <img
                src={mascot}
                alt="Flores Cleaning friendly flower mascot"
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

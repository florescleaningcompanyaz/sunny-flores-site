import { Home, Sparkles, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Standard Clean",
    description: "Regular maintenance cleaning to keep your home fresh and tidy week after week.",
    features: ["Kitchen & bathrooms", "Vacuuming & mopping", "Dusting surfaces"],
    color: "bg-secondary",
    iconColor: "text-secondary-foreground",
  },
  {
    icon: Sparkles,
    title: "Deep Clean",
    description: "Thorough top-to-bottom cleaning that reaches every corner and crevice.",
    features: ["Inside appliances", "Baseboards & vents", "Detailed scrubbing"],
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Truck,
    title: "Move-In/Out",
    description: "Make your new home spotless or leave your old place in perfect condition.",
    features: ["Cabinet interiors", "Window tracks", "Full sanitization"],
    color: "bg-accent/20",
    iconColor: "text-accent",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From quick refreshes to deep sanitization — we've got your home covered.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-warm flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/pricing" className="btn-cta inline-flex">
            View Full Pricing
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
